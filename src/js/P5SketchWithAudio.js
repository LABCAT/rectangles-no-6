import React, { useRef, useEffect } from "react";
import "./helpers/Globals";
import "p5/lib/addons/p5.sound";
import * as p5 from "p5";
import { Midi } from '@tonejs/midi'
import PlayIcon from './functions/PlayIcon.js';

import audio from "../audio/rectangles-no-6.ogg";
import midi from "../audio/rectangles-no-6.mid";
import Rectangle from "./classes/Rectangle";

const P5SketchWithAudio = () => {
    const sketchRef = useRef();

    const Sketch = p => {

        p.canvas = null;

        p.canvasWidth = window.innerWidth;

        p.canvasHeight = window.innerHeight;

        p.audioLoaded = false;

        p.player = null;

        p.PPQ = 3840 * 4;

        p.loadMidi = () => {
            Midi.fromUrl(midi).then(
                function(result) {
                    console.log(result);
                    const noteSet1 = result.tracks[11].notes; // NN19 1 - Ghost (only used to sequence the animation)
                    p.scheduleCueSet(noteSet1, 'executeCueSet1');
                    p.audioLoaded = true;
                    document.getElementById("loader").classList.add("loading--complete");
                    // document.getElementById("play-icon").classList.remove("fade-out");
                }
            );
            
        }

        p.preload = () => {
            p.song = p.loadSound(audio, p.loadMidi);
            p.song.onended(p.logCredits);
        }

        p.scheduleCueSet = (noteSet, callbackName, poly = false)  => {
            let lastTicks = -1,
                currentCue = 1;
            for (let i = 0; i < noteSet.length; i++) {
                const note = noteSet[i],
                    { ticks, time } = note;
                if(ticks !== lastTicks || poly){
                    note.currentCue = currentCue;
                    p.song.addCue(time, p[callbackName], note);
                    lastTicks = ticks;
                    currentCue++;
                }
            }
        } 

        p.rectangles = [];

        p.setup = () => {
            p.canvas = p.createCanvas(p.canvasWidth, p.canvasHeight);
            p.background(0);
            p.rectMode(p.CENTER);
        }

        p.draw = () => {
            if(p.audioLoaded && p.song.isPlaying()){
                p.rectangles.forEach(rectangle => {
                    rectangle.draw();
                    rectangle.update();
                });
            }
        }

        p.useFirstSequence = true;

        p.sequence1 = [
            {x: 1, y: 1},
            {x: 2, y: 1},
            {x: 3, y: 1},
            {x: 4, y: 1},
            {x: 1, y: 2},
            {x: 2, y: 2},
            {x: 3, y: 2},
            {x: 4, y: 2},
        ];

        p.sequence2 = [
            {x: 1, y: 1},
            {x: 2, y: 1},
            {x: 3, y: 1},
            {x: 4, y: 1},
            {x: 1, y: 2},
            {x: 2, y: 2},
            {x: 3, y: 2},
        ];

        p.loopNum = 1;

        p.executeCueSet1 = (note) => {
            const { currentCue } = note;
            const mod = currentCue % 15;
            const currentSequence = p.useFirstSequence ? p.sequence1 : p.sequence2;
            if([1, 9].includes(mod)) {
                p.clear();
                const bgColour = Math.random() > 0.5 ? 0 : 255;
                p.background(bgColour);
                p.stroke(bgColour);
                p.rectangles = [];
            }
            const index = mod === 0 ? 6 : mod < 9 ? mod - 1 : mod - 9; 
            const xDivisor = index > 3 && !p.useFirstSequence ? 3 : 4;
            const x = p.width / xDivisor * currentSequence[index].x - p.width / (xDivisor * 2);
            const y = p.height / 2 * currentSequence[index].y - p.height / 4;
            

            for (let i = 0; i < p.loopNum; i++) {
                const loopMultiplier =  (1 - (p.random(0.1, 0.3) * i));
                const r = p.random(0, 255);
                const g = p.random(0, 255);
                const b = p.random(0, 255);
                const colour = p.color(
                    r,
                    g,
                    b,
                    p.random(0, 191)
                );

                p.rectangles.push(
                    new Rectangle(
                        p, 
                        x,
                        y,
                        colour,
                        (p.width / xDivisor) * loopMultiplier,
                        (p.height / 2) * loopMultiplier,
                        9 - i
                    )
                );
            }
            

            if([0, 8].includes(mod)) {
                p.useFirstSequence = !p.useFirstSequence;
                p.loopNum++;
            }
        }

        p.mousePressed = () => {
            if(p.audioLoaded){
                if (p.song.isPlaying()) {
                    p.song.pause();
                } else {
                    if (parseInt(p.song.currentTime()) >= parseInt(p.song.buffer.duration)) {
                        p.reset();
                    }
                    //document.getElementById("play-icon").classList.add("fade-out");
                    p.song.play();
                }
            }
        }

        p.creditsLogged = false;

        p.logCredits = () => {
            if (
                !p.creditsLogged &&
                parseInt(p.song.currentTime()) >= parseInt(p.song.buffer.duration)
            ) {
                p.creditsLogged = true;
                    console.log(
                    "Music By: http://labcat.nz/",
                    "\n",
                    "Animation By: https://github.com/LABCAT/rectangles-no-6",
                    "\n",
                    "Coding Inspiration: https://openprocessing.org/sketch/824318"
                );
                p.song.stop();
            }
        };

        p.reset = () => {

        }

        p.updateCanvasDimensions = () => {
            p.canvasWidth = window.innerWidth;
            p.canvasHeight = window.innerHeight;
            p.canvas = p.resizeCanvas(p.canvasWidth, p.canvasHeight);
        }

        if (window.attachEvent) {
            window.attachEvent(
                'onresize',
                function () {
                    p.updateCanvasDimensions();
                }
            );
        }
        else if (window.addEventListener) {
            window.addEventListener(
                'resize',
                function () {
                    p.updateCanvasDimensions();
                },
                true
            );
        }
        else {
            //The browser does not support Javascript event binding
        }
    };

    useEffect(() => {
        new p5(Sketch, sketchRef.current);
    }, []);

    return (
        <div ref={sketchRef}>
        </div>
    );
};

export default P5SketchWithAudio;
