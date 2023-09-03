const removeFromArray = function(string, num, num2, num3, num4) {
    let array = string;
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== num && array[i] !== num2 && array[i] !== num3 && array[i] !== num4) {
        newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;