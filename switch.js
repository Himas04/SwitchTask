let studentName="Himas";
let age=23;
let mathsMarks=75;
let chemistryMarks=70;
let physicsMarks=68;
let attendance=71;
let totalFee=150000;
let paidFee=50000;
let option=7;

switch(option){
    case 1:
        console.log("Name:"+studentName);
        console.log("Age:"+age);
        break;
    case 2: {
        let averageMarks = (mathsMarks + physicsMarks + chemistryMarks) / 3;
        console.log("Average Marks:" + averageMarks);
        break;
    }
    case 3: {
        let averageMarks = (mathsMarks + physicsMarks + chemistryMarks) / 3;
        if (averageMarks > 70) {
            console.log("Grade:A");
        } else if (averageMarks >= 60 && averageMarks <= 70) {
            console.log("Grade:B");
        } else if (averageMarks >= 50 && averageMarks < 60) {
            console.log("Grade:C");
        } else {
            console.log("Fail");
        }
        break;
    }
    case 4:{
        if (attendance>=70){
            console.log("Eligibile For Exam")
        }
        else{
            console.log("Not Eligibile")
        }
        break;

    }

    case 5:{
        let remainingFee=totalFee-paidFee;
        let installment=remainingFee/10;
        console.log("RemainingFees:"+remainingFee)
        console.log("InstallmentPerMonth:"+installment)
    }
    break;

    case 6:{
        console.log("Exit........🐈")
    }
    break;

    default:
        console.log("Invalid Option..........")

}