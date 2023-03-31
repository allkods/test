var fullWordList = ['1','2','3','4','5'];
var wordsToRemove = ['1','2','3'];


// Approach First ( using nested loops )
matchedWords=[];
for(var i=0; i< fullWordList.length; i++){

    for(var j=0; j< wordsToRemove.length; j++){

        if(fullWordList[i] == wordsToRemove[j]){

            matchedWords.push(wordsToRemove[j]);
            break;
        }
    }
}

console.log(matchedWords);


// Approach Second ( using indexof() function )
var matchedWords=[]
for(var i=0; i< wordsToRemove.length; i++){

    if( fullWordList.indexOf(wordsToRemove[i]) != -1 ){
        matchedWords.push(wordsToRemove[i])
    }

}

console.log(matchedWords);

// Approach Third ( using Array.filter() and Array.indexof() function )
var x = fullWordList.filter(e=>{

    return wordsToRemove.indexOf(e) != -1

})

console.log(x)
