/* Use an if-else-if chain to categorize a person's age group (child, teenager, adult).*/

function ageCategory(age: number) {
    if(age < 13) {
        console.log("The age group is Child...");
        

    }
    else if (age <= 19) {
        console.log("The age group is Teenager...");
        

    }
    else{
        console.log("The age group is Adult.....");
        
    }
}

ageCategory(12);
ageCategory(19);
ageCategory(20);
ageCategory(25);
