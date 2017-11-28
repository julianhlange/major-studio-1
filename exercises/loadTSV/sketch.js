// p5 calls setup() exactly once when the canvas loads
function setup() {
    createCanvas(displayWidth, displayHeight);
    // see https://p5js.org/reference/#/p5/loadTable for info on how to read in tsv or csv tables
    // showData is a callback, which Daniel made up and will give us information about data that we set in function below 
    loadTable("groceries.tsv", "tsv", "header", showData);
}
            
function showData(data) {
    var count = data.getRowCount();   // follow syntax on https://p5js.org/reference/#/p5.Table/getRowCount
    console.log(count);

    for (var i=0; i<count; i++) {
        var amount = data.getString(i, 0);  // follow syntax on https://p5js.org/reference/#/p5.Table/getString
        var unit = data.getString(i, 1);
        var item = data.getString(i, 2);
        var source = data.getString(i, 3);
        
        if (source == 'store')  // note here that if there is only one line, can leave off curly braces
            fill('green');        // either enter color name
        else                    // ... or ...
            fill(255, 120, 0);   // enter rgb values (add a fourth value for alpha)
        
        text(amount + ' | ' + unit + ' | ' + item + ' | ' + source + ' | ', width/2, 30*(i+1));    // follow syntax on https://p5js.org/reference/#/p5/text
    }
    
}