let a = "this is a sentence"
a = a.split(' ')

let b = []

for (let i = 0; i < a.length; i++) {

    if (a[i][0] == a[i][0].toLowerCase()) {

        let a1 = a[i].split('')
        let temp = a1[0]
        a1.shift()
        a1.unshift(temp.toUpperCase())
        b.push(a1.join(''))
    }


}
console.log(b.join(' '));