class Shape {
    constructor(parameter, color) {
        this.parameter = parameter;
        this.color = "";
    }
    setColor(color){this.color = color}
}

class Circle extends Shape {
    render(color)
    {return `<circle cx="150" cy="100" r="80" fill = "${this.color}" />`}
}

class Triangle extends Shape {
    render(color)
    {return `<polygon points="150, 18 244, 182 56, 182" fill = "${this.color}" />`}
}

class Square extends Shape {
    render(color)
    {return `<rect x="63" y="35" width="200" height="200" fill = "${this.color}" />`}
}

module.exports = {Circle, Triangle, Square}
