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

function decode(str) {
  let arr = str.match(/.{2}/g);
  let resultArr = "";
  let result = '';
  let c = 4;
  console.log(arr);
  for(let i = 0; i < arr.length; i++){
    
    if(arr[i] == '10'){
      resultArr += ".";
    }else if(arr[i] == '11'){
      resultArr += "-";
    }else if(arr[i] == '**' && arr[i+4] == '**'){
      resultArr += " ";
    }  
    if(i == c){
      if(arr[i] == '11' && arr[i+1] !== undefined || arr[i] == '10' && arr[i+1] !== undefined){
        c += 5;
        resultArr += " ";
      }else if(arr[i] == '**'){
        c += 5;
      }
       
    } 
  }
  for(i = 0; i < resultArr.split(" ").length; i++){
    if(resultArr.split(" ")[i].length == 0){
      result += ' ';
    }else{
      result += MORSE_TABLE[resultArr.split(" ")[i]];
    }
  }
  return result;
}

module.exports = {
    decode
}
