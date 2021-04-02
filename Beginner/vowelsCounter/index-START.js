/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/
function vowelsCounter(text) {
    const vowels = ["a", "e", "i", "o","u"]
    let counter = 0;
    for (let word of text.toLowerCase()) {
        if (vowels.includes(word)) {
            counter++
        }
    }
    return counter
}
module.exports = vowelsCounter;
