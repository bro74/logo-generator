const inquirer = require("inquirer");
const fs = require('fs');
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");;
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


const shapeJS = require('./lib/shapes');
const Shapes = shapeJS.Shapes;
const Circle = shapeJS.Circle;
const Triangle = shapeJS.Triangle;
const Square= shapeJS.Square;


const questions  =
inquirer
.prompt ([
    {
        type: 'maxlength-input',
        message: "Let's create an SVG logo! Enter your text, 3 character limit.",
        name: 'text',
        maxLength: 3,
    },
    {
        type: 'input',
        message: 'What color is the text? Enter a color keyword or hexidecimal value.',
        name:'textColor',
    },
    {
        type: 'list',
        message: 'What shape is the logo?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],

    },
    {
        type: 'input',
        message: 'What color is the shape? Enter a color keyword or hexidecimal value.',
        name: 'shapeColor',
    }

]).then((response) =>
writeSVG('logo.svg', response)

);

function writeSVG(fileName, data) {
    if (data.shape === 'Circle') {
        const circle = new Circle(data.text, data.textColor, data.shapeColor);
        fs.writeFile(fileName, circle.render(data.text, data.textColor, data.shapeColor), err =>
        err ? console.error(err) : console.log("Generated logo.svg")
     )} else if (data.shape === 'Triangle') {
        const triangle = new Triangle(data.text, data.textColor, data.shapeColor);
        fs.writeFile(fileName, triangle.render(data.text, data.textColor, data.shapeColor), err =>
        err ? console.error(err) : console.log("Generated logo.svg")
     )} else {
        const square = new Square(data.text, data.textColor, data.shapeColor);
        fs.writeFile(fileName, square.render(data.text, data.textColor, data.shapeColor), err =>
        err ? console.error(err) : console.log("Generated logo.svg")
     )}
}
