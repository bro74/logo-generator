const shapeScript = require('/Users/brookewhite/Desktop/bootcamp_coding/logo-generator/lib/../shapes.js')

const Shapes = shapeScript.Shapes
const Circle = shapeScript.Circle
const Triangle = shapeScript.Triangle
const Square = shapeScript.Square


describe ('Shapes', () => {
  describe('Shapes', () => {
    it('should initialize the children classes of circle, triangle, and square and pass down the correct parameters', () => {
      const shape = new Shapes('text', 'textColor', 'shapeColor');
      expect(shape.text).toEqual('text');
      expect(shape.textColor).toEqual('textColor');
      expect(shape.shapeColor).toEqual('shapeColor')
      });
  });
  describe('render', () => {
    it('should return an empty string and be passed to children', () => {
      const shape = new Shapes('text', 'textColor', 'shapeColor');
      expect(shape.render("")).toEqual("");
    })
  })
});


describe ('Circle', () => {
  describe('render', () => {
    it('should create a circle with a color of blue, text color of white, and text of Hello World', () => {
      const shape = new Circle();
      const shapeColor1 = "blue";
      const textColor1= "white";
      const text1= "Hello World";
      expect(shape.render(text1, textColor1, shapeColor1)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="blue" /><text x="50" y="60" text-anchor="middle" font-family="sans-serif" font-size="30" fill= "white">Hello World</text></svg>`);
      });
  });
});


describe ('Triangle', () => {
    describe('render', () => {
      it('should create a triangle with a color of blue, text color of white, and text of Hello World', () => {
        const shape = new Triangle();
        const shapeColor1 = "blue";
        const textColor1= "white";
        const text1= "Hello World";
        expect(shape.render(text1, textColor1, shapeColor1)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="blue" /> <text x="150" y="125" text-anchor="middle" font-family="sans-serif" font-size="40" fill= "white">Hello World</text></svg>`);
        });
    });
});

describe ('Square', () => {
  describe('render', () => {
    it('should create a square with a color of blue, text color of white, and text of Hello World', () => {
      const shape = new Square();
      const shapeColor1 = "blue";
      const textColor1= "white";
      const text1= "Hello World";
      expect(shape.render(text1, textColor1, shapeColor1)).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="150" fill="blue"/><text x="125" y="110" text-anchor="middle" font-family="sans-serif" font-size="50" fill= "white">Hello World</text></svg>`);
      });
  });
});