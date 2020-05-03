var wordPattern = function(pattern, str) {
    let memo = {}
    let used = []
    let words = str.split(' ')
    if (words.length !== pattern.length)    {
        return false
    }
    for (let i = 0; i < words.length; i++)    {
        let letter = pattern[i]
        let word = words[i]
        if (letter in memo) {
            console.log('??', memo[letter])
            if (memo[letter] !== word)  {
                return false
            }
        }   else    {
            memo[letter] = word
            if (used.includes(word)) {
                return false
            }
            used.push(word)
            console.log(memo)
        }
    }
    return true
};