function average(a, b) {
    return a + b / 2;
}
console.log(average(2, 1));

// EXPLANATION

/* 
    Here the output is wrong because of the operators precedence.
    The precedence of division operator is higher than addition operator.
    So, b/2 will execute first.

    the correct answer is as below:
*/

function average2(a, b) {
    return (a + b) / 2;
}

console.log(average2(2, 1));

// Here the precedence of bracket is greatest so addition will execute first