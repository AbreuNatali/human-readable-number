module.exports = function toReadable (number) {
    const str = number.toString();
    let result = '';
  
  if (str.length === 1) {
    result = (number === 0) ? 'zero' :
    (number === 1) ? 'one' :
    (number === 2) ? 'two' :
    (number === 3) ? 'three' :
    (number === 4) ? 'four' :
    (number === 5) ? 'five' :
    (number === 6) ? 'six' :
    (number === 7) ? 'seven' :
    (number === 8) ? 'eight' :
    'nine';
    
    } else if ((str.length === 2) && (str[0] === '1')) {
        result = (number === 10) ? 'ten' :
        (number === 11) ? 'eleven' :
        (number === 12) ? 'twelve' :
        (number === 13) ? 'thirteen' :
        (number === 14) ? 'fourteen' :
        (number === 15) ? 'fifteen' :
        (number === 16) ? 'sixteen' :
        (number === 17) ? 'seventeen' :
        (number === 18) ? 'eighteen' :
        'nineteen';

    } else if (((str.length === 2) && (str[0] != '1'))) {
        result = (str[0] === '2') ? 'twenty' :
        (str[0] === '3') ? 'thirty' :
        (str[0] === '4') ? 'forty' :
        (str[0] === '5') ? 'fifty' :
        (str[0] === '6') ? 'sixty' :
        (str[0] === '7') ? 'seventy' :
        (str[0] === '8') ? 'eighty' :
        'ninety';

        result = (str[1] === '0') ? result + '' :
        (str[1] === '1') ? result + ' one' :
        (str[1] === '2') ? result + ' two' :
        (str[1] === '3') ? result + ' three' :
        (str[1] === '4') ? result + ' four' :
        (str[1] === '5') ? result + ' five' :
        (str[1] === '6') ? result + ' six' :
        (str[1] === '7') ? result + ' seven' :
        (str[1] === '8') ? result + ' eight' :
        result + ' nine';
        
} else if (str.length === 3) {
    result = (str[0] === '1') ? 'one hundred' :
    (str[0] === '2') ? 'two hundred' :
    (str[0] === '3') ? 'three hundred' :
    (str[0] === '4') ? 'four hundred' :
    (str[0] === '5') ? 'five hundred' :
    (str[0] === '6') ? 'six hundred' :
    (str[0] === '7') ? 'seven hundred' :
    (str[0] === '8') ? 'eight hundred' :
    'nine hundred';

    if (str[1] === '0') {
    result = (str[2] === '0') ? result + '' :
    (str[2] === '1') ? result + ' one' :
    (str[2] === '2') ? result + ' two' :
    (str[2] === '3') ? result + ' three' :
    (str[2] === '4') ? result + ' four' :
    (str[2] === '5') ? result + ' five' :
    (str[2] === '6') ? result + ' six' :
    (str[2] === '7') ? result + ' seven' :
    (str[2] === '8') ? result + ' eight' :
    result + ' nine';

    } else if (str[1] === '1') {
    result = (str[2] === '0') ? result + ' ten' :
    (str[2] === '1') ? result + ' eleven' :
    (str[2] === '2') ? result + ' twelve' :
    (str[2] === '3') ? result + ' thirteen' :
    (str[2] === '4') ? result + ' fourteen' :
    (str[2] === '5') ? result + ' fifteen' :
    (str[2] === '6') ? result + ' sixteen' :
    (str[2] === '7') ? result + ' seventeen' :
    (str[2] === '8') ? result + ' eighteen' :
    result + ' nineteen';

    } else {
        result = (str[1] === '2') ? result + ' twenty' :
    (str[1] === '3') ? result + ' thirty' :
    (str[1] === '4') ? result + ' forty' :
    (str[1] === '5') ? result + ' fifty' :
    (str[1] === '6') ? result + ' sixty' :
    (str[1] === '7') ? result + ' seventy' :
    (str[1] === '8') ? result + ' eighty' :
    result + ' ninety';

    result = (str[2] === '0') ? result + '' :
        (str[2] === '1') ? result + ' one' :
        (str[2] === '2') ? result + ' two' :
        (str[2] === '3') ? result + ' three' :
        (str[2] === '4') ? result + ' four' :
        (str[2] === '5') ? result + ' five' :
        (str[2] === '6') ? result + ' six' :
        (str[2] === '7') ? result + ' seven' :
        (str[2] === '8') ? result + ' eight' :
        result + ' nine';
    } 
} 
    return (result);
} 
