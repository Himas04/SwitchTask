/*
//For Loops
for(let i=1; i<=10; i++){
    console.log("For------->"+i)
}

//While Loops
let i=1;
while (i<=10){
    console.log("While------->"+i)
    i++
}
let j=10;
while(j>=1){
    console.log("WHile------->"+j)
    j--
}

//Do While Loops

k=1;
do{
    console.log("Welcome")
    k++;
}
while(k<=3);

l=1
do{
    console.log(l)
    l++;
}
while(l<=5);
*/
//1....
let sum=0;
for(i=1; i<=10; i++){
    sum+=i
}
console.log(sum);

//2...
let factorial=1;
for(j=1; j<=5; j++){
    factorial*=j
}
console.log(factorial)

//3....
for(let k=5; k>=1; k--){
    console.log("*".repeat(k));
}