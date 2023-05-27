const s = "A man, a plan, a canal: Panama"

function valid(s) {
    let L = 0
    let R = s.length - 1
    console.log(L,R)

    while (L<R) {
        while (L<R & !alphanum(s[L])) {
            L += 1
            console.log(L)
        }
        while (L<R & !alphanum(s[R])) {
            R -= 1
            console.log(R)
        }
        if (s[L].toLowerCase() !== s[R].toLowerCase()) {
            return false 
        }
        L += 1
        R -= 1
        console.log(L,R)
    }
    return true
}

function alphanum (c) {
    return (s.charCodeAt('A') <= s.charCodeAt(c) <= s.charCodeAt('Z') || 
    s.charCodeAt('a') <= s.charCodeAt(c) <= s.charCodeAt('z') ||
    s.charCodeAt('0') <= s.charCodeAt(c) <= s.charCodeAt('9') )
}

console.log(valid(s))

// Doesn't work
// alhapnum f() is incorrect
// Doesn't return false for non alphanumeric chars