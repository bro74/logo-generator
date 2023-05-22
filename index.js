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
