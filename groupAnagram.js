// 49
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
const group = (strs) => {
    let map = {}
    for (let str of strs) {
        let s = str.split('').sort().join('')
        if (!map[s]) {
            map[s] = []
        }
        map[s].push(str)
    }
    return Object.values(map)
}

console.log(group(strs))