const marks = [78, 80, 75, 65, 70];
let highest = 0;

for (var i=0; i<5; i++) {
  highest = (marks[i] < highest) ? highest : marks[i];
}

console.log(highest);