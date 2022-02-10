const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // let num = (expr.length/10);
    //console.log(expr.match(/.{1,10}/g));
    
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
     arr.push(expr.substring(i, i+10));
    }
    //console.log(arr);
    
    let arrStr = [];
    //let el = arr[i];
    //let str = '';
    for (let i = 0; i < arr.length; i++) {
      let str = '';
        if (arr[i] == '**********') {
          str += ' ';
        }
        else {
           for (let k = 0; k < arr[i].length; k+=2) {
            if (arr[i].slice(k,k+2) == 10) {
              str += '.';
            }
            else
              if (arr[i].slice(k,k+2) == 11) {
              str += '-';
             }
            else
             if (arr[i].slice(k,k+2) == 00) {
             str += '';
             }
         }
      }
      if (str == ' ') {
        arrStr.push(str);
      } 
      else
     arrStr.push(MORSE_TABLE[str]);
    }  
    //console.log(arrStr.join(''));
  return arrStr.join('');
  }

module.exports = {
  decode
}
   