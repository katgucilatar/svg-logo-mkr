const {Triangle, Circle, Square} = require('../lib/shapes.js');

describe('Shapes', () => {
    describe('triangle', () => {
        it('this should return the correct SVG polygon points for a triangle', () => {
            const shape = new Triangle();
            shape.setColor("black");
            expect(shape.render()).toEqual('<polygon points="250,60 100,400 400,400" fill = "black" />');
        })
    })
});

describe('Shapes', () => {
    describe('square', () => {
        it('this should return the correct SVG rectangle width and height for a square', () => {
            const shape = new Square();
            shape.setColor("red");
            expect(shape.render()).toEqual('<rect width="200" height="200" fill = "red" />');
        })
    })
});

describe('Shapes', () => {
    describe('circle', () => {
        it('this should return the correct SVG measurements for a circle', () => {
            const shape = new Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill = "green" />');
        })
    })
});