/* CHALLENGE
Given a sentence containing two or more words,
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!'
*/




function capSentence(text) {
   // Code goes here
   let copy = text.toLowerCase().split(" ")
   let newArr = copy.map( co => {
     return co.charAt(0).toUpperCase() + co.slice(1)
   })
   return newArr.join(" ")
}



module.exports = capSentence
