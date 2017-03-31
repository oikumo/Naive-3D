function Triangle() {
    this.a = { x:0, y: 0 };
    this.b = { x:0, y: 0 };
    this.c = { x:0, y: 0 };
    this.center = { x:0, y:0 };
}

function centerTriangleTo(triangle, centerX, centerY) {
    var delta = { x:0, y:0 };
    delta.x = centerX - triangle.center.x;
    delta.y = centerY - triangle.center.y;
    triangle.center.x = centerX;
    triangle.center.y = centerY;
    translateTriangle(triangle, delta);
}