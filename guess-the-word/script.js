const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous")
const show = document.getElementById("displayWord")
const inputElement = document.getElementById("correctWord").value
const updatedDisplay = document.getElementById("displayWord")
console.log(inputElement)
// function word{
const words= ["black","purple","white","gold","pink","red","green","yellow","blue","silver"];
//   for (let i = 0; i < words.length; i++) {
    
//   }
// const newArray= []
// for (let i = 0; i < word.length; i++) {
//     words.push(word[i]);
// }
// for (j = 0; j < words.length; j++) {
//     let pick = Math.floor(Math.random() * words.length);
//     newArray.push(words[pick]);
//     words.splice(pick, 1);
//   }
//   console.log(newArray);
// }





// let guessedList = [];

let displayWord = ""
// for (let i = 0; i < selectedWord.length; i++) {
//     return selectedWord
// }





function submit() {
    let random_words = Math.floor(Math.random() * words.length);
    let selectedWord = inputElement.value
    console.log(random_words)
   
    // let inputElement = document.getElementById("correctWord");
    
    for(let i = 0; i < random_words; i++ ){
    
    if (inputElement.value === selectedWord) {
        alert("Congratulations you know your words!");
        
    } else if(!random_words === selectedWord){
        alert("Oops thats an incorrect word")
    }
    else if(!inputElement.value) {
        alert("Empty Input Box!Please enter word");
        
    } 
    // console.log(inputElement.value)

    inputElement.value="";
    
    if (correctWord.includes(words)) {
        return(selectedWord.split("").sort(() => Math.random()-0.5).join(""))
    }
    let correctWord = true;
    for (let i = 0; i < selectedWord; i++) {
       if (correctWord.includes(selectedWord[i])) {
        updatedDisplay += selectedWord[i] + " ";
       } else {
        updatedDisplay += " ";
        correctWord = false;
       }
    }
    document.getElementById("correctWord")
        .textContent = updatedDisplay;
}
}

submitBtn.addEventListener("click", submit)

function next(){

    let random_words = Math.floor(Math.random() * words.length);
    let selectedWord = words[random_words];
    
  
const randomLetters = selectedWord.split("").sort(() => Math.random()-0.5).join("")

console.log(randomLetters)


 if( selectedWord === randomLetters)
{return selectedWord.split("").sort(() => Math.random()-0.5).join("") }
 else if(!selectedWord){
    return randomLetters}

    document.getElementById("displayWord").innerHTML = randomLetters
}

nextBtn.addEventListener("click", next)

// function previous(){
//     let random_words = Math.floor(Math.random() * words.length);
//     let selectedWord = words[random_words];
//     console.log(random_words)

    
    


//     document.getElementById("displayWord").innerHTML = selectedWord
// }

next()


// previousBtn.addEventListener("click", previous)