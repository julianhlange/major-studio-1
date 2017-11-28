// class participants (sets up list of people to assign to groups)

var participant = ['Alonso', 'Ellie', 'Rik', 'Steve', 'Julian', 'Flavio', 'Aucher', 'Yicen', 'George', 'Isabel', 'Benz', 'Rye', 'Joe'];

console.log(participant[0]);


// reports (these are readings that each group of two will have to do)

var report = [];
report[0] = 'Warner Herzog. Lo and Behold';
report[1] = 'Kurgan, Laura. Close up at a Distance';
report[2] = 'Steyerl, Hito. A Sea of Data';
report[3] = 'Crawford, Kate. Can an Algorithm be Agonistic?';
report[4] = 'Hayles, Katherine N. Unthought, Chapter 5';
report[5] = 'Hayles, Katherine N. Unthought, Chapter 6';
report[6] = 'Selected UNDP RBA reading';

console.log(report);


var assignment = [];
for(var i=0; i<report.length; i++) {
    assignment[i] = {
        report: report[i],
        team: []
    }
}
console.log(assignment);

for (var key in assignment){
    while (assignment[key].team.length < 2) {
        var rnd = Math.floor(Math.random() * participant.length);       // get random number between 0 and 12 (13 total participants)
        console.log(rnd)
        assignment[key].team.push(participant[rnd]);
        participant.splice(rnd, 1);                                      // this removes the class participant from the list; next random pick is based on updated participant list, which will be shorter
    }
}

console.log(assignment);
