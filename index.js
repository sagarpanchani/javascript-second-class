var EnglishMarks = prompt("Enter your English Marks");
console.log(".............>", EnglishMarks )

var physicsMarks = prompt("Enter your physics Marks");
console.log(".............>", physicsMarks )

var chemistryMarks = prompt("Enter your chemistry Marks");
console.log(".............>", chemistryMarks )
var mathsMarks =     prompt("Enter your  maths Marks");
console.log(".............>",  mathsMarks )


var  obaintedMarks =  Number(EnglishMarks)+Number(physicsMarks)+Number(chemistryMarks)+Number(mathsMarks)
console.log("...........>", obaintedMarks)




//   Percentage
var  totalMarks  = 400 ;
var  Percentage = (obaintedMarks/totalMarks)*100
console.log(".................", Percentage)


// CONDITION 

if(Percentage  >= "80"){
    alert("congratulation you got A1 grade");
}

if(Percentage  >= "70"){
    alert("congratulation you got A grade");
}

if(Percentage  >= "60"){
    alert("congratulation you got B grade");
}

if(Percentage  <= "40"){
    alert("Bad  luck try  next time your  are   failed");
}