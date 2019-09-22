function processData(input) {
    let max = Math.pow(10, input)
    let ans = 0
    for (let n = 10; n < max; n++){
        let str = n.toString()
        let rotated = parseInt(str.slice(-1) + str.slice(0,str.length-1))
        if (rotated%n === 0){
            ans = ans + n
        }
    }
    console.log(ans)
} 

//Currently only 11 points :(