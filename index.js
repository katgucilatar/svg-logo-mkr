const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes.js');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to three characters for your logo',
            name: 'characters'
        },
        {
            type: 'input',
            message: 'What color is the text of your logo?',
            name: 'textcolor'
        },
        {
            type: 'list',
            message: 'What is the shape of your logo?',
            name: 'shape',
            choices: [
                'Circle',
                'Triangle',
                'Square'
            ]
        },
        {
            type: 'input',
            message: 'What is the color of your logo?',
            name: 'color'
        }

    ])

    .then((answers) => {
        let shape 
        if (answers.shape === 'Triangle') {
            shape = new Triangle()
            shape.setColor(answers.color)
        } else if (answers.shape === 'Square') {
            shape = new Square()
            shape.setColor(answers.color)
        } else if (answers.shape === 'Circle') {
            shape = new Circle()
            shape.setColor(answers.color)
        }
        const svgLogo = generateSvg(answers, shape);
        fs.writeFile('logo.svg', svgLogo, (err) =>
          err ? console.log(err) : console.log('Generated logo.svg')
        );
      });


const generateSvg = ({ characters, textcolor }, shape) =>
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

${shape.render()} 

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${characters}</text>

</svg>`
