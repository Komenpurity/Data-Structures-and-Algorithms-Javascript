// A good example of a stack is a stack of books
// You can only insert or delete items at the top of the stack
// The last item you put in the stack is the first item that comes out of the stack
// functions in a stack: push,pop,peek,length

let letters = []; //this is our stack

let word = "racecar"

let rword = ""

//put letters of word into stack
for(let i=0; i<word.length; i++){
    letters.push(word[i]);
    console.log(letters) 
}


//remove letters on top of stack and adding it to rword variable
for(let i=0; i<word.length; i++){
    rword += letters.pop() 
    console.log(letters)
    console.log(rword) 
}

if(rword === word){
    console.log(`${word} is a palindrome`) 
} else {
    console.log(`${word} is not a palindrome`)
}