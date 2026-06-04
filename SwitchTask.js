
//Inventory Management System
let category="Food";
let stock=100;

switch(category){
    case "Electronics":
        if(stock>=10){
            console.log("Stock Avalable")
        }
        else{
            console.log("out OF stock")
        }
        break;
    case "Food":
        let expiryDate=new Date("2026.06.07");
        let today= new Date()
        let dayLeft=(expiryDate-today)/(1000*60*60*24);

        if (dayLeft<=3 && stock>=1){
            console.log("Good Food & Available");
        }
        else{
            console.log("Not Availabe");
        }
        break;

    case "Furniture":
        if(stock>=15){
            console.log("Availabe");
        }
        else{
            console.log("Not Availabe");
        }

}

//Student Managment Sysytem
let attendance=60;
let role="Student";

switch(role){
    case "Admin":
        console.log("Admin Dashboard");
        break;
    case "Student":{
        if(attendance>=70){
            console.log("Eligibile For exam");

        }
        else{
            console.log("Not Eligibile");
        }
    }
    break;

    case"Teacher":
    console.log("TEacher Details");
    break;

    default:
        console.log("Invalid User");
}

//E-commerce Order system
let paymentMethod="Cash";
let totalAmount=11000;
let discount=0;


switch(paymentMethod){
    case "Cash":
        if(totalAmount>10000){
            discount=totalAmount*0.10
        }
        else{
            console.log("No Discount")
        }
        
    break;

    case "Card":
        if (totalAmount > 10000) {
          discount = totalAmount * 0.2;
        } else {
          console.log("No Discount");
        }
       
    
    break;

    case "Online":
        if (totalAmount > 10000) {
          discount = totalAmount * 0.05;
        } else {
          console.log("No Discount");
        }
        
    break;

    default:{
        console.log("Wrong Payment Method")
    }
}
        let finalBills=totalAmount-discount;
        console.log("Disocunt:"+discount)
        console.log("FinalBill:"+finalBills)
    

//Hospital Queue system
let patientType="Emergency";
let age=20;

switch(true){
    case(patientType==="Emergency" && age<=20 ):
    console.log("Fast Treatment");
    break;

    case(patientType==="Regular" && age>20):
    console.log("Regular CheckUp");
    break;

   case(patientType==="Emergency" && age>20):
   console.log("Immediate Treatment");
    break;

    default:
        console.log("Genrel Treatment")
}

//BAnking System
let accountType="Savings";
let accountBalance=90;

switch(accountType){
    case "Savings":
        if(accountBalance<=0){
            console.log("Saving Accout:No Balance ")
        }
        else if(accountBalance>=1000){
            console.log(
              "Saving Accout:Your Account Have:" + accountBalance + "Rs.",
            );
        }
        else{
            console.log("Your Saving Accout have Minimum Balance");
        }
        break;
    case "Current":
        if(accountBalance<=0){
            console.log("Current Accout:No balance");
        }
        else if(accountBalance>=1000){
            console.log(
              "Current Accout:Your Account Have:" + accountBalance + "Rs.",
            );
        }
        else{
            console.log("Current Accout have minimum balance");
        }
        break;
    default:{
        console.log("No Bank Access");
    }
}

//Mini Project
let category1 = "Clothing";
let discount1 = 0;
let totalAmount1 = 100000;

switch(category1){

    case "Grocery":
        if (totalAmount1 > 5000) {
          discount1 = totalAmount1 * 0.1;
        } else {
          console.log("No Discount.Spend 5000Rs to get 10% Discount.🤦");
        }
        break;

    case "Electronics":
        if (totalAmount1 >= 20000) {
          discount1 = totalAmount1 * 0.25;
        } else {
          console.log("No Discount.Spend 20000Rs to get 25% Discount.🤦");
        }
        break;

    case "Clothing":
        if(totalAmount1 >= 10000){
            discount1 = totalAmount1 * 0.15;
        }
        else{
            console.log("No Discount.Spend 10000Rs to get 15% Discount.🤦");
        }
        break;

    default:
        console.log("Invalid Choice");
}

let finalBill1 = totalAmount1 - discount1;

console.log("Discount: Rs." + discount1);
console.log("Final Bill: Rs." + finalBill1);