var input;
var ritaString;
rita(content);

function setup() {
    noCanvas();
    input = createInput();
    input.changed(rita);    // 'changed' is from p5
    content = createElement('div');
    content.id('content');
}

function rita(event) {
    
    var str = event.target.value;
    
    ritaString = RiString(str);        // see rednoise.org
    
    var words = ritaString.words();     // library is made for text analysis, so it will split it on words
    console.log(words);
    
    words.forEach(function(element) {
        var features = RiString(element).features();
        console.log(features);
        
        var span = createElement('span', features.text);    // variable holds the element
        
        if (features.pos === 'nn')
            span.style('background', 'purple');             // gives attribute to element

        span.parent(content);
    });
}