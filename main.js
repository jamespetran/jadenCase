String.prototype.toJadenCase = function () {
    //...
    let stringArray = this.split(' ');
    let jcResult = []

    for (string of stringArray) {
        let tinyArray = string.split('');
        tinyArray[0] = tinyArray[0].toUpperCase();

        let capWords = tinyArray.join('');
        console.log(`capWords`, capWords);
        jcResult.push(capWords);
    }
    let result = jcResult.join(' ');
    return result

};

// let str = "How can mirrors be real if our eyes aren't real";
// let jCS = str.toJadenCase()
// console.log(jCS);