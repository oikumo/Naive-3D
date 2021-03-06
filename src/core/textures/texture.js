export class Texture {
    constructor(width, height) {
        this.pixels = new Uint32Array(width * height);
        this.width = width;
        this.height = height;
    }

    fill(fillerColor) {
        let i = 0, row = 0, col = 0;
        const cols = this.width;
        const size = this.width * this.height;

        for (i = 0; i < size; i++) {
            this.pixels[col + cols * row] = fillerColor(col, row);
            if (col + 1 == cols) {
                col = 0;
                row++;
            }
            else {
                col++;
            }
        }
    }

    paintTo(to, toWidth, dx = 0, dy = 0) {
        const size = this.width * this.height;
        let col = 0;
        let row = 0;

        for (let i = 0; i < size; i++) {
            to[Math.ceil(dx + col) + Math.ceil(dy + row) * toWidth] = this.pixels[col + row * this.width];
            if (col + 1 == this.width) {
                col = 0;
                row++;
            }
            else {
                col++;
            }
        }
    }
}