console.log("7" > 7)
console.log("2">"21")
console.log("KL">"S")



// Explanation

/*  (1)
    The first statement is false because javascript checks the value irrespective to its type by default.
    Here both the value is of different type, so, string value will be automatically parsed to its integer value
    before checking.
    "7" and 7 are both same until === operator is applied as it also checks for values type.
    The statement will always return false if one value is integer and another cannot be parsed to integer.
    like ("S" > 7)

*/

/* (2)
    Second statement is false because both the string will be parsed to integer automatically and 2 is not
    greater than 21.

*/

/* (3)
    Third statement is false because both the string cannot be parsed to integer, so, their values are 
    compared by their ASCII code.

*/
