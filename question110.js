/*  Create a function that assigns a grade (A, B, C, D, F) based on a student's score.*/
function grade(marksPercent) {
    if (marksPercent > 90 && marksPercent <= 100) {
        console.log("Grade: A+");
        if (marksPercent >= 98) {
            console.log("Reward $100");
        }
    }
    else if (marksPercent > 80 && marksPercent <= 90) {
        console.log("Grade: A");
    }
    else if (marksPercent > 70 && marksPercent <= 80) {
        console.log("Grade: B");
    }
    else if (marksPercent > 60 && marksPercent <= 70) {
        console.log("Grade: C");
    }
    else if (marksPercent > 50 && marksPercent <= 60) {
        console.log("Grade: D");
    }
    else {
        console.log("Fail!!!!");
    }
}
grade(75);
grade(99);
grade(48);
grade(60);
