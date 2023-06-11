export default class Rectangle {
    constructor(p5, x, y, fill, maxWidth, maxHeight, speed) {
        this.p = p5;
        this.x = x;
        this.y = y;
        this.fill = fill;
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this.speed = speed;
        this.width = 0;
        this.height = 0;
    }

    update() {
        if(this.width < this.maxWidth) {
            this.width = this.width + this.speed;
        }
        if(this.height < this.maxHeight) {
            this.height = this.height + this.speed;
        }
    }

    draw() {
        this.p.fill(this.fill);
        this.p.rect(this.x, this.y, this.width, this.height);
    }
}