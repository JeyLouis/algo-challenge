/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format.
E.g reverseStrin('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
  text = text.split(' ')
  let counter = ""
  for(let i = 0; i < text.length; i++){
    if(text[i].length > counter.length){
      counter = text[i]
    }
  }
  return counter
}
module.exports = longestWord
