const s = 'vimanshu'
const t = 'anshbvim'

const isAnagram = (s,t) => {
    
    if (s.length !== t.length) {
        return false;
    }

    let dict = {}

    for (let letter of s) {
        if (dict[letter]) {
            dict[letter] ++
        } else {
            dict[letter] = 1
        }
    }
    for (let letter of t) {
        if (dict[letter]) {
            dict[letter] --
        } else {
            dict[letter] = 1
        }
    }

    for (let key in dict) {
        if (dict[key] !== 0){
            return false
        }
    }

    return true

};

console.log(isAnagram(s,t));