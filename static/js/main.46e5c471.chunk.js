(this["webpackJsonprectangles-no-6"]=this["webpackJsonprectangles-no-6"]||[]).push([[0],{17:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),a=n(9),o=n.n(a),c=(n(17),n(2));window.p5=c;n(19);var d=n(10),r=n(0);function u(){return Object(r.jsxs)("svg",{id:"play-icon",className:"fade-out",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(r.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(r.jsx)("path",{d:"M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]})}var h=n.p+"static/media/rectangles-no-6.b547a8d8.ogg",l=n.p+"static/media/rectangles-no-6.e7bf9ce7.mid",g=n(11),f=n(12),p=function(){function e(t,n,i,s,a,o,c){Object(g.a)(this,e),this.p=t,this.x=n,this.y=i,this.fill=s,this.maxWidth=a,this.maxHeight=o,this.speed=c,this.width=0,this.height=0}return Object(f.a)(e,[{key:"update",value:function(){this.width<this.maxWidth&&(this.width=this.width+this.speed),this.height<this.maxHeight&&(this.height=this.height+this.speed)}},{key:"draw",value:function(){this.p.fill(this.fill),this.p.rect(this.x,this.y,this.width,this.height)}}]),e}(),v=function(){var e=Object(i.useRef)(),t=function(e){e.canvas=null,e.canvasWidth=window.innerWidth,e.canvasHeight=window.innerHeight,e.audioLoaded=!1,e.player=null,e.PPQ=15360,e.loadMidi=function(){d.Midi.fromUrl(l).then((function(t){console.log(t);var n=t.tracks[11].notes;e.scheduleCueSet(n,"executeCueSet1"),e.audioLoaded=!0,document.getElementById("loader").classList.add("loading--complete"),document.getElementById("play-icon").classList.remove("fade-out")}))},e.preload=function(){e.song=e.loadSound(h,e.loadMidi),e.song.onended(e.logCredits)},e.scheduleCueSet=function(t,n){for(var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=-1,a=1,o=0;o<t.length;o++){var c=t[o],d=c.ticks,r=c.time;(d!==s||i)&&(c.currentCue=a,e.song.addCue(r,e[n],c),s=d,a++)}},e.rectangles=[],e.setup=function(){e.canvas=e.createCanvas(e.canvasWidth,e.canvasHeight),e.background(0),e.rectMode(e.CENTER)},e.draw=function(){e.audioLoaded&&e.song.isPlaying()&&e.rectangles.forEach((function(e){e.draw(),e.update()}))},e.useFirstSequence=!0,e.sequence1=[{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1},{x:1,y:2},{x:2,y:2},{x:3,y:2},{x:4,y:2}],e.sequence2=[{x:1,y:1},{x:2,y:1},{x:3,y:1},{x:4,y:1},{x:1,y:2},{x:2,y:2},{x:3,y:2}],e.loopNum=1,e.executeCueSet1=function(t){var n=t.currentCue%15,i=e.useFirstSequence?e.sequence1:e.sequence2;if([1,9].includes(n)){e.clear();var s=Math.random()>.5?0:255;e.background(s),e.stroke(s),e.rectangles=[]}for(var a=0===n?6:n<9?n-1:n-9,o=a>3&&!e.useFirstSequence?3:4,c=e.width/o*i[a].x-e.width/(2*o),d=e.height/2*i[a].y-e.height/4,r=0;r<e.loopNum;r++){var u=1-e.random(.1,.3)*r,h=e.random(0,255),l=e.random(0,255),g=e.random(0,255),f=e.color(h,l,g,e.random(0,191));e.rectangles.push(new p(e,c,d,f,e.width/o*u,e.height/2*u,9-r))}[0,8].includes(n)&&(e.useFirstSequence=!e.useFirstSequence,e.loopNum++)},e.mousePressed=function(){e.audioLoaded&&(e.song.isPlaying()?e.song.pause():(parseInt(e.song.currentTime())>=parseInt(e.song.buffer.duration)&&e.reset(),document.getElementById("play-icon").classList.add("fade-out"),e.song.play()))},e.creditsLogged=!1,e.logCredits=function(){!e.creditsLogged&&parseInt(e.song.currentTime())>=parseInt(e.song.buffer.duration)&&(e.creditsLogged=!0,console.log("Music By: http://labcat.nz/","\n","Animation By: https://github.com/LABCAT/rectangles-no-6","\n","Coding Inspiration: https://openprocessing.org/sketch/824318"),e.song.stop())},e.reset=function(){},e.updateCanvasDimensions=function(){e.canvasWidth=window.innerWidth,e.canvasHeight=window.innerHeight,e.canvas=e.resizeCanvas(e.canvasWidth,e.canvasHeight)},window.attachEvent?window.attachEvent("onresize",(function(){e.updateCanvasDimensions()})):window.addEventListener&&window.addEventListener("resize",(function(){e.updateCanvasDimensions()}),!0)};return Object(i.useEffect)((function(){new c(t,e.current)}),[]),Object(r.jsx)("div",{ref:e,children:Object(r.jsx)(u,{})})};var m=function(){return Object(r.jsx)(v,{})};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.46e5c471.chunk.js.map