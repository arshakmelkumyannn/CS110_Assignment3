let grade = 69;
let letterGrade = "";
let check = "";

if (grade >= 97) {
    letterGrade = "A+";
} else if (grade >= 93) {
    letterGrade = "A";
} else if (grade >= 90) {
    letterGrade = "A-";
} else if (grade >= 87) {
    letterGrade = "B+";
} else if (grade >= 83) {
    letterGrade = "B";
} else if (grade >= 80) {
    letterGrade = "B-";
} else if (grade >= 77) {
    letterGrade = "C+";
} else if (grade >= 73) {
    letterGrade = "C";
} else if (grade >= 70) {
    letterGrade = "C-";
} else if (grade >= 67) {
    letterGrade = "D+";
} else if (grade >= 63) {
    letterGrade = "D";
} else if (grade >= 60) {
    letterGrade = "C-";
} else {
    letterGrade = "F";
}

switch (letterGrade) {
    case "A+":
    case "A":
    case "A-":
    case "B+":
    case "B":
    case "B-":
    case "C+":
    case "C":
    case "C-":
        check = "passed";
        break;
    default:
        check = "failed";
        break;
}

console.log(
    "Your grade is " +
        grade +
        " which corresponds to " +
        letterGrade +
        ". You " +
        check +
        "!"
);
