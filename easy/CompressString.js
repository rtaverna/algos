var compress = function(chars) {
    let inst = 1
    let memo = {}
    for (let i = 0; i < chars.length; i++)  {
        if (chars[i] === chars[i+1]) {
            inst++
        }   else    {
            if (!memo.hasOwnProperty(chars[i]))  {
                    memo[chars[i]] = i
            }
            let idx = memo[chars[i]]

            chars[idx] = inst.toString()
            inst = 1
        }
    }
    console.log(memo)
    return chars.length
};