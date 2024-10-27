module.exports = function reverse (n) {
     let tempNumber = n.toString().split('').reverse().join('');
    if (tempNumber[tempNumber.length - 1] == '-')
        tempNumber = '-'+tempNumber.slice(0,tempNumber.length - 1);
    return tempNumber;
}
