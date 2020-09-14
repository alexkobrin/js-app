const passLenEl = document.getElementById('passLen');
const lowCaseEl = document.getElementById('lowCase');
const upperCaseEl = document.getElementById('upperCase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const genBtnEl = document.getElementById('genBtn');
const passText = document.querySelector('.pass-text')
const copyBtn =  document.querySelector('.copyBtn')
 
const lettersUpp ="ABCDEFGHIJKLMNOPQRSTUVXYZ";
const lettersDown = "abcdefghijklmnopqrstuvxyz";
const symbol = "<>?/!@#$%^&*()_+=";
const number = "0123456789;"

const getUppCaseletters = () => {
    return lettersUpp[Math.floor(Math.random () * lettersUpp.length )]
} 
const getDownCaseletters = () => {
    return lettersDown[Math.floor(Math.random () * lettersDown.length )]
} 
const getSymbol = () => {
    return symbol[Math.floor(Math.random () * symbol.length )]
} 
const getNumber = () => {
    return number[Math.floor(Math.random () * number.length )]
} 

 const generPass = () => {
  const len = passLenEl.value
 let password = ""

 for ( let i=0; i<len; i++) {
     const x = generateX();
    password +=x

 }
 passText.innerHTML = password
 
 }

 function generateX() {
     const xs = []
    if(symbolEl.checked) {
        xs.push(getSymbol())
}
    if(lowCaseEl.checked) {
        xs.push( getDownCaseletters())
}
    if(upperCaseEl.checked) {
        xs.push( getUppCaseletters())
}
    if(numberEl.checked) {
        xs.push( getNumber())
    }

    if(xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)]

    
 }
  
 copyBtn.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        let password = passText.innerHTML;
       if(!password) {
           return
       }
        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      
 }  )
 
  
                        

 genBtnEl.addEventListener('click' , generPass)
 
 