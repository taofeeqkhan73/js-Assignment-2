// question no-1
let marks = parseInt(prompt("Enter  your marks"));

let grade;

switch (true) {
    case marks >= 0 && marks <= 10:
        grade = "E";
        break;
    case marks >= 11 && marks <= 20:
        grade = "D";
         break;
    case marks >=21 && marks <=30:
         grade = "C";
          break;
    case marks >=31 && marks <=40:
        grade = "B";
        break;
     case marks >=41 && marks <=50:
        grade = "A";
        break;        

    default: 
            grade = "Invalid Number"
        break;
}
console.log(grade);

// question no-2
function getValue (C) {

    if (C === 'P' || C === 'p') {
        return "PrepBytes";
    } 
    else if (C === 'Z' || C === 'z') {
        return "Zenith";
    } 
    else if (C === 'E' || C === 'e') {
        return "Expert Coder";
    } 
    else if (C === 'D' || C === 'd') {
        return "Data Structure";
    } 
    else {
        return "Invalid Input";
    }
}
 let input = "E"
console.log(getValue(input)); 

// question no 3
let A = 2;
let B = 5;
let C = 4;
let  max;
{
    if(A > B && A > C)
    max=-1
}
if (A > B)
{
    if(A > C)
        max=A
} 
else if(B > A)
{
    if(B > C)
        max=B
}
else
    max=C
console.log(max);

// question no-4
let x = 2;
let y = 9;
let z = 23;
if(x>y && x<z)
{
    secondsmalles = x;
}
else if (y>x && y<z)
{
    secondsmalles = y;
}
else 
{
    secondsmalles = z;
}
console.log(secondsmalles);

// question no-5
function Triangle_Check(i, j, k) {
    if (i + j + k !== 180) 
    return "Invalid Triangle";
    
    if (i < 90 && j < 90 && k < 90) {
        return "acute";
    } else if (i > 90 || j > 90 || k > 90) {
        return "obtuse";
    } else {
        return "right";
    }
}
console.log(Triangle_Check(60, 100, 20));  // Output: obtuse
