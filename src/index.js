module.exports = function toReadable(number) {
    number = String(number);
    let resString;
    let dictionary = {
        zero: 0,
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    };

    if(number==='30') {
        return dictionary[30];
    }
    if(number==='40') {
        return dictionary[40];
    }
    if(number==='50') {
        return dictionary[50];
    }
    if(number==='60') {
        return dictionary[60];
    }
    if(number==='70') {
        return dictionary[70];
    }
    if(number==='80') {
        return dictionary[80];
    }
    if(number==='90') {
        return dictionary[90];
    }
    if(number==='100') {
        return dictionary[1] + ' ' + dictionary[100];
    }
    if(number==='120') {
        return dictionary[1] + ' ' + dictionary[100] + ' ' + dictionary[20];
    }
    if (number >= 0 && number <= 20) {
        return  dictionary[`${number}`];
    }
    if (number > 20 && number < 30) {
        return  dictionary[20] + ' ' + dictionary[`${number[1]}`];
    }
    if (number > 30 && number < 40) {
        return  dictionary[30] + ' ' + dictionary[`${number[1]}`];
    }
    if (number > 40 && number < 50) {
        return  dictionary[40] + ' ' + dictionary[`${number[1]}`];
    }
    if (number > 50 && number < 60) {
        return  dictionary[50] + ' ' + dictionary[`${number[1]}`];
    }
    if (number > 60 && number < 70) {
        return  dictionary[60] + ' ' + dictionary[`${number[1]}`];
    }
    if (number > 70 && number < 80) {
        return  dictionary[70] + ' ' + dictionary[`${number[1]}`];
    }
    if (number > 80 && number < 90) {
        return  dictionary[80] + ' ' + dictionary[`${number[1]}`];
    }
    if (number > 90 && number < 100) {
        return  dictionary[90] + ' ' + dictionary[`${number[1]}`];
    }
    if (number > 100 && number < 120) {
        if (number[1] === '0') {
            return  dictionary[`${number[0]}`] + ' ' + dictionary[100] + ' ' + dictionary[`${number[2]}`]
        } else {
            return  dictionary[`${number[0]}`] + ' ' + dictionary[100] + ' ' + dictionary[`${number.slice(1, 3)}`];
        }
    }
    if (number > 120) {
        if (number[1] + number[2] === '00') {
            return  dictionary[`${number[0]}`] + ' ' + dictionary[100]
        }
        if (number[2] === '0' && number[1] !== '0') {
            return  dictionary[`${number[0]}`] + ' ' + dictionary[100] + ' ' + dictionary[`${number[1]}` + '0']
        }
        if (number[2] !== '0' && number[1] === '0') {
            return  dictionary[`${number[0]}`] + ' ' + dictionary[100] + ' ' + dictionary[`${number[2]}`]
        }
        if(`${number[1]}`+`${number[2]}`<'20' && `${number[1]}`+`${number[2]}`>'10') {
            let sum = `${number[1]}`+`${number[2]}`;
            return  dictionary[`${number[0]}`] + ' ' + dictionary[100] + ' ' + dictionary[+sum];
        }
        if(`${number[1]}`+`${number[2]}`<'10' && `${number[1]}`+`${number[2]}`>'0') {
            return  dictionary[`${number[0]}`] + ' ' + dictionary[100] + ' ' + dictionary[`${number[2]}`];
        }
    }
    if (number.length >= 3 && number[1] !== '0' && number[2] !== '0') {
        return  dictionary[`${number[0]}`] + ' ' + dictionary[100] + ' ' + dictionary[`${number[1]}` + '0'] + ' ' + dictionary[`${number[2]}`];
    }
    /*return resString;*/
};
