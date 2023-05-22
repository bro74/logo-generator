class Shapes {
    constructor(text, textColor, shapeColor) {
    this.text= text,
    this.textColor= textColor,
    this.shapeColor= shapeColor
    }
    render() {
       return ""
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
       
    }
    render(text, textColor, shapeColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="${shapeColor}" /><text x="50" y="60" text-anchor="middle" font-family="sans-serif" font-size="30" fill= "${textColor}">${text}</text></svg>`
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);

    }
    render (text, textColor, shapeColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" /> <text x="150" y="125" text-anchor="middle" font-family="sans-serif" font-size="40" fill= "${textColor}">${text}</text></svg>`
    }
}

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);

    }
    render(text, textColor, shapeColor) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="20" width="150" height="150" fill="${shapeColor}"/><text x="125" y="110" text-anchor="middle" font-family="sans-serif" font-size="50" fill= "${textColor}">${text}</text></svg>`
    }
}

module.exports = {
    Shapes,
    Circle,
    Triangle,
    Square,
}