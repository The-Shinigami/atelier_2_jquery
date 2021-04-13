
 $(document).ready(function(){
  var result_String = '0';
  var prevEntry_String = '0';
  var currentEntry_String = '0';
  var operation = null;
  updateScreen = function(displayValue) {
    $('#screen').html(displayValue);
  };
  updateSmallScreen = function(displayValue) {
    $('#small_screen').html(displayValue);
  };
  
  updateScreen(result_String);
  updateSmallScreen(result_String);
  //verifier si l'argument de la fonction est un nombre
  isNumber = function(value) {
    return !isNaN(value);
  };
  //verifier si l'argument de la fonction est un operateur
  isOperator = function(value) {
    return value === '/' || value === '*' || value === '+' || value === '-';
  };
    //fair une operation 'operation' entre 'a' et 'b' 
  operate = function(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b, operation);
    if (operation === '+')return a + b;
    if (operation === '-') return a - b;
    if (operation === '*') return a * b;
    if (operation === '/'){
      return a / b;}
 };
 //fonctionement de la calculatrice selon le button qu'on click
  $('.button').on('click', function(evt){
    var buttonPressed = $(this).html();
    if (buttonPressed === "C") {
      currentEntry_String='0' ;
      updateScreen(currentEntry_String);
      updateSmallScreen(currentEntry_String);
    } else if (buttonPressed === "CE") {
      prevEntry_String='0' ;
      updateScreen( prevEntry_String);
    }  else if (buttonPressed === '.') {
      currentEntry_String.substring( currentEntry_String.length)
      currentEntry_String+=buttonPressed;
      updateScreen(currentEntry_String);

    } else if (isNumber(buttonPressed)) {
      if(currentEntry_String=='0')
     {currentEntry_String=buttonPressed;
     }
      else {
        currentEntry_String+=buttonPressed;
      }    
      updateScreen(currentEntry_String);

    } else if (isOperator(buttonPressed)) {
      updateSmallScreen(currentEntry_String);
      prevEntry_String=currentEntry_String;
      currentEntry_String=buttonPressed;
      updateScreen(currentEntry_String);
      operation=buttonPressed;
       
    } else if (buttonPressed === '=') {
      updateSmallScreen(prevEntry_String);
      currentEntry_String = operate(prevEntry_String, currentEntry_String.substring(1, currentEntry_String.length), operation);  

      console.log(currentEntry_String);
      updateScreen(currentEntry_String);
      prevEntry_String=currentEntry_String;
      
      updateSmallScreen(currentEntry_String);
      operation = null;
    }
    if(currentEntry_String.length>12)
    currentEntry_String=currentEntry_String.substring(0, 11);

  });
 
 }
 );