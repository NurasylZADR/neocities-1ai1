let ein = document.querySelector('#ein1')

document.querySelector('#button1').onclick = () => {
	document.querySelector('#eout').textContent= '';
	let str = ein.value;
	for(let i = 1 ; i < 26; i++){
	let str2 = ' ' ;
		for(let j = 0 ; j < str.length; j++){
			let k = str[j].charCodeAt();
			if( k >= 65 && k <91){
				let p = k + i;
				if(p > 90){
					str2+= String.fromCharCode((64 + (p - 90)))	
				}
				else{
					str2+=String.fromCharCode(p)
				}
			}
			else if(k >= 97 && k <= 122){
				let p = k + i;
				if(p > 122){
					str2+= String.fromCharCode(96 + (p - 122))
				}
				else{
					str2+=String.fromCharCode(p)
				}
			}
			else{
				str2+=str[j]
			}
		}
			document.querySelector('#eout').textContent += i + str2 + "\n";
	}
}

let ein2 = document.querySelector('#ein2')

document.querySelector('#button2').onclick = () => {
	let str = ein2.value;
	let str2 = ' ' ;
	for(let i = 0 ; i <  str.length ; i++){
		let asc = str[i].charCodeAt()
		if(asc>= 65 && asc <= 77){
			let b = 25;
			for(let j = 65 ; j <= 77 ; j++){
				if(asc == j){
					str2+=String.fromCharCode(asc+b);
				}
				b-=2;
			}
		}
		else if(asc>= 78 && asc <= 90){
			let b = 25;
			for(let j = 90 ; j >= 78 ; j--){
				if(asc == j){
					str2+=String.fromCharCode(asc-b);
				}
				b-=2;
			}
		}
		else if(asc>= 97 && asc <= 109){
			let b = 25;
			for(let j = 97 ; j <= 109 ; j++){
				if(asc == j){
					str2+=String.fromCharCode(asc+b);
				}
				b-=2;
			}
		}
		else if(asc>= 110 && asc <= 122){
			let b = 25;
			for(let j = 122 ; j >= 110 ; j--){
				if(asc == j){
					str2+=String.fromCharCode(asc-b);
				}
				b-=2;
			}
		}
		else{
			str2 +=str[i]
		}
	}
	document.querySelector('#eout2').textContent = str2;
	
}

let ein3 = document.querySelector('#ein3')

document.querySelector('#button3').onclick = () => {
	let str = ein3.value;
	let str2 = ' ' ;
	for(let i = 0 ; i <  str.length ; i++){
		let k = str[i].charCodeAt();
		if(k >= 97 && k <= 122){
			k-=32;
			let b = String.fromCharCode(k);
		}
		let b = String.fromCharCode(k);
		switch(b){
			case 'A':
				str2+= '.- ';
				break; 
			case 'B':
				str2+= '-... ';
				break;
				case 'C':
			    str2+= '-.-. ';
			    break;
			case 'D':
			    str2+= '-.. ';
			    break;
			case 'E':
			    str2+= '. ';
			    break;
			case 'F':
			    str2+= '..-. ';
			    break;
			case 'G':
			    str2+= '--. ';
			    break;
			case 'H':
			    str2+= '.... ';
			    break;
			case 'I':
			    str2+= '.. ';
			    break;
			case 'J':
			    str2+= '.--- ';
			    break;
			case 'K':
			    str2+= '-.- ';
			    break;
			case 'L':
			    str2+= '.-.. ';
			    break;
			case 'M':
			    str2+= '-- ';
			    break;
			case 'N':
			    str2+= '-. ';
			    break;
			case 'O':
			    str2+= '--- ';
			    break;
			case 'P':
			    str2+= '.--. ';
			    break;
			case 'Q':
			    str2+= '--.- ';
			    break;
			case 'R':
			    str2+= '.-. ';
			    break;
			case 'S':
			    str2+= '... ';
			    break;
			case 'T':
			    str2+= '- ';
			    break;
			case 'U':
			    str2+= '..- ';
			    break;
			case 'V':
			    str2+= '...- ';
			    break;
			case 'W':
			    str2+= '.-- ';
			    break;
			case 'X':
			    str2+= '-..- ';
			    break;
			case 'Y':
			    str2+= '-.-- ';
			    break;
			case 'Z':
			    str2+= '--.. ';
			    break;
			case '0':
			    str2+= '----- ';
			    break;
			case '1':
			    str2+= '.---- ';
			    break;
			case '2':
			    str2+= '..--- ';
			    break;
			case '3':
			    str2+= '...-- ';
			    break;
			case '4':
			    str2+= '....- ';
			    break;
			case '5':
			    str2+= '..... ';
			    break;
			case '6':
			    str2+= '-.... ';
			    break;
			case '7':
			    str2+= '--... ';
			    break;
			case '8':
			    str2+= '---.. ';
			    break;
			case '9':
			    str2+= '----. ';
			    break;
			case '.':
			    str2+= '.-.-.- ';
			    break;
			case ',':
			    str2+= '--..-- ';
			    break;
			case '?':
			    str2+= '..--.. ';
			    break;
			case "'":
			    str2+= '.----. ';
			    break;
			case '!':
			    str2+= '-.-.-- ';
			    break;
			case '/':
			    str2+= '-..-. ';
			    break;
			case '(':
			    str2+= '-.--. ';
			    break;
			case ')':
			    str2+= '-.--.- ';
			    break;
			case '&':
			    str2+= '.-... ';
			    break;
			case ':':
			    str2+= '---... ';
			    break;
			case ';':
			    str2+= '-.-.-. ';
			    break;
			case '=':
			    str2+= '-...- ';
			    break;
			case '+':
			    str2+= '.-.-. ';
			    break;
			case '-':
			    str2+= '-....- ';
			    break;
			case '_':
			    str2+= '..-.- ';
			    break;
			case '"':
			    str2+= '.-..-. ';
			    break;
			case '$':
			    str2+= '...-..- ';
			    break;
			case '@':
			    str2+= '.--.-. ';
			    break;
			case '¿':
			    str2+= '..-.- ';
			    break;
			case '¡':
			    str2+= '--...- ';
			    break;
			case ' ':
				str2+= '/';
			default:
				str2 += b;
		}
	}
	document.querySelector('#eout3').textContent =str2;
}

let ein4 = document.querySelector('#ein4')

document.querySelector('#button4').onclick = () => {
	let str = ein4.value;
	let str2 = ' ' ;
	function decodeMorse(morseCode) {
  var ref = { 
    '.-':     'A',
    '-...':   'B',
    '-.-.':   'C',
    '-..':    'D',
    '.':      'E',
    '..-.':   'F',
    '--.':    'G',
    '....':   'H',
    '..':     'I',
    '.---':   'J',
    '-.-':    'K',
    '.-..':   'L',
    '--':     'M',
    '-.':     'N',
    '---':    'O',
    '.--.':   'P',
    '--.-':   'Q',
    '.-.':    'R',
    '...':    'S',
    '-':      'T',
    '..-':    'U',
    '...-':   'V',
    '.--':    'W',
    '-..-':   'X',
    '-.--':   'Y',
    '--..':   'Z',
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
    '/' : ' ',
    '.-.-.-' : '.',
    '--..--' : ',',
    '..--..' : '?',
    '.----.' : "'",
    '-.-.--' : '!',
    '-..-.' : '/',
    '-.--.' : '(',
    '-.--.-' : ')',
    '.-...' : '&',
    '---...' : ':',
    '-.-.-.' : ';',
    '-...-' : '=',
    '.-.-.' : '+',
    '-....-' : '-',
    '..--.-' : '_',
    '.-..-.' : '"',
    '...-..-' : '$',
    '.--.-.' : '@',
    '..-.-' : '¿' ,
    '--...-' : '¡',
  };

  return morseCode
    .split('   ')
    .map(
      a => a
        .split(' ')
        .map(
          b => ref[b]
        ).join('')
    ).join(' ');
}

var decoded = decodeMorse(str);


	document.querySelector('#eout4').textContent = decoded;
}

let input_text = document.querySelector('#ein5'); 

document.querySelector('#button5').onclick = () => {
	let text_in = input_text.value;
	let text  = '';

	for (let i = 0 ; i < text_in.length; i++){
		let k = text_in[i].charCodeAt();
		let binom = k.toString(2);
		text += binom;
	};

	document.querySelector('#eout5').innerHTML = text;
};

let input_text2 = document.querySelector('#ein6'); 

document.querySelector('#button6').onclick = () => {
	let text_in2 = input_text2.value;
	let text  = '';

	text_in2 = text_in2.split("").reverse().join("");
	let len = text_in2.length;
	if(text_in2.length%2!=0){
		len+=1;
	}
	document.querySelector('#eout6').textContent = text_in2
};

let ein7 = document.querySelector('#ein7'); 

document.querySelector('#button7').onclick = () => {
	let text_in = input_text.value;
	let text  = '';

	for (let i = 0 ; i < text_in.length; i++){
		let k = text_in[i].charCodeAt();
		let binom = k.toString(2);
		text += binom;
	};

	document.querySelector('#eout7').innerHTML = text;
};

/*
	let ch = 'A';
	let i = ch.charCodeAt() + 1;
	console.log(String.fromCharCode(i));*/




