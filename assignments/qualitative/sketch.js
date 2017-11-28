var chapter7clean, input, button, output;

function preload() {
    chapter7clean = loadStrings('chapter7clean.txt');
}

// adapted from https://p5js.org/examples/dom-input-and-button.html
function setup() {
    createCanvas(windowWidth, 400);
    input = createInput();
    input.position(windowWidth/2-240, 150);
    input.id('placeholder');
    document.getElementById("placeholder").placeholder = "Enter search term... e.g., South Africa";
    // next three lines are for a 'submit' button
    // button = createButton('submit');
    // button.position(input.x + input.width, 65);
    // button.mousePressed(analyze);
    input.changed(analyze);
    output = createElement('span');
    output.position(80, 300);
    outputCount = createElement('counter');
    outputCount.position(135, 275);
}

function analyze() {
    var chapter7concat = chapter7clean.join(' ');
    // console.log("concat" + chapter7concat)
    // var chapter7concatpolish = chapter7concat.split(chapter7concat.match(/[a-z]\.\d/g)[0].slice(2,chapter7concat.match(/[a-z]\.\d/g)[0].length)).join("");
    var chapter7concatpolish = chapter7concat.split(chapter7concat.match(/\D\.\d{1,4}/g)[0].slice(2,chapter7concat.match(/\D\.\d{1,4}/g)[0].length)).join("");
    // var chapter7concatpolish = chapter7concat.replace(/[\.]\d\b/g, '.');
    // console.log("polish" + chapter7concatpolish);
    var phrases = chapter7concat.split('. ');
    var phrases = chapter7concatpolish.split('. ');
    for(var i=0; i<phrases.length; i++) {
        phrases[i]=phrases[i] + '.';
    }
    console.log(phrases);

    var value, test;
    var outputText = '';
    var outputCounter = 0;

    for (var i = 0; i < phrases.length; i++) {
        value = phrases[i];
        // console.log(value);
        test = value.includes(input.value());
        if (test === true) {
            outputCounter = outputCounter + 1;
            outputText = outputText + '<br><br>' + value;
            // var output = createDiv(value);
            // var outputText = output + output
            // return outputText;
        }
    }
    if(outputText.includes(input.value())) {
        outputText == outputText
        } else { outputText = '<br><br>' + "The term \"" + input.value() + "\" is not present in the text." };
    output.html(outputText);
    outputCount.html("Number of sentences: " + outputCounter);
};