// To find the longest chain of letters in a word
const word = '00000111110101001111100001001';


function getMaximumSequenceOfCharacers(word){

    // creating an array with unique characters of the word
    const uniqueWords = new Set(word);
    const uniqueArray = [...uniqueWords];

    //  creating an object from the array and assigning its value as 0
    var result = uniqueArray.reduce((a,b)=>{
        return {...a, [b]:0};
    })

    // if the word contains only one unique character then length of the word is its longest sequence 
    if(result.length == 1){

        var ob = {};
        ob[ result[0] ] = word.length;
        return ob;
    }

    // assigning the first character of the word as previous word.
    var counter = 0;
    var prev = word[0];
    for( var i=0; i< word.length; i++ ){

        var current = word[i];
        // while we get a sequence, the counter will increase
        if( current == prev){
            counter++;
        }
        else{

            /*  if the total count of a particular key of result object is greater than its previous value
                than the value is swapped mainting the highest count   */
            if(result[prev] < counter ){
                result[prev] = counter;
            }

            // values are re-initialized for the different sequence of word
            counter = 1;
            prev = current;
        }
    }

    // Our loop is dealing with the previous character so after the loop terminates,
    // the last character details is still unprocessed and is maintained in 'counter' and 'prev' variables
    // so we will have to proces it.
    if(result[prev] < counter ){
        result[prev] = counter;
    }

    return result;

}




var x = getMaximumSequenceOfCharacers(word);
console.log(x);
