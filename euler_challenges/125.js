//INCOMPLETE
//PALINDROMIC SUMS

function processData(input) {
    let testsArr = input.match(/.+\w.+/mg)
    let save = {}
    testsArr.foreach((str)=>{
        let total = parseInt(str.split(' ')[1])
        save[str.split(' ')[0]] = []
        let count = parseInt(str.split(' ')[0]);

        while (total > 0){
            if (checkPal(count)){
                
            }
        }
    })
} 

function checkPal(num) {
    return num == num.toString().reverse()
}