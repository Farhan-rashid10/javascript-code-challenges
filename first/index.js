//calling function
//function with argurement

function calculateGrade(grade){
    if (grade > 79){
        return 'A';
    }else if (grade > 60 && grade <= 79){
        return 'B';
    }else if (grade > 49 && grade <= 59){
        return 'C';
    }else if (grade > 40 && grade <= 49){
        return 'D';
    }else if (grade < 40){
        return 'E';
    }

}
//get the student grade from user input
let studentGrade= prompt('Enter Your grade')
    let marks = calculateGrade(studentGrade)


    //output the letter grade
    console.log(marks)