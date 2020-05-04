/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    var find = function(obj)   {
        console.log('obj',obj)
        let total = 0
        for (key in obj)    {
            if (obj[key] <= 0) {
                console.log('key',key)
                return total
            }   else    {
                    if (obj['l'] >= 2 && obj['o'] >= 2)   {
                        total++
                    }
                    for (key in obj)    {
                        if (key === 'l' || key === 'o') {
                            obj[key] -= 2
                        }   else    {
                        obj[key]--
                        }
                    }
                    total += find(obj)
                }
        }
    }
    //1 b, 1 a, 2 l, 2 o, 1 n
    let memo = {b: 0, a: 0, l: 0, o: 0, n: 0}
    for (let i = 0; i < text.length; i++)   {
        let el = text[i]
        if (el in memo) {
            memo[el]++
        }
    }
    return find(memo)
    
};