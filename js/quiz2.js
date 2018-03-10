var answer01 = 'Beethoven';
var answer02 = 'Renässansen';
var answer03 = 'Cembalon';
var user_score = 0;

// Restarts when user clicks the button "Börja om".
setTimeout(function() { alert('Spelet är slut! Du fick ' + user_score + ' poäng. Bra kämpat! \n\nKlicka på "OK" för att starta nästa ämne.');}, 60000);

// Sends user to next topic
setTimeout(function() { location.replace("file:///Users/a/Google%20Drive/2017/GDrive_Utbildning/ITHS/Webbutvecklare/01_AvanceradWebbdesign/Labbar/AndersEriksson_Slutprojekt/topic2-musikhistoria.html");}, 60100);


function nextQuiz() {
    location.replace("topic2-musikhistoria.html")
}

// First question ------------------------
function onClick1(){
    if((document.getElementById('user_input01').value) === answer01){
      var element = document.createElement('li');
      var text = document.createTextNode(userAnswer01(document.getElementById('user_input01').value)+' - Rätt! Ludwig van Beethoven var pianovirtuosen som komponerade mästerverk även som döv.');
      element.appendChild(text);
      document.getElementById('result').appendChild(element);
      user_score++;
      alert('Grattis! Du har ' + user_score + ' poäng!');
      //document.getElementById('user_score').appendChild(element);
    } else {
      var element = document.createElement('li');
      var text = document.createTextNode(userAnswer01(document.getElementById('user_input01').value)+' - Fel! Rätt svar är ' + answer01 + '.');
      element.appendChild(text);
      document.getElementById('result').appendChild(element);
    }
  }

  function userAnswer01(){
    return (document.getElementById('user_input01').value);
  }

  document.getElementById('answer01').addEventListener('click', onClick1);


// Second question ------------------------
function onClick2(){
  if((document.getElementById('user_input02').value) === answer02){
    var element = document.createElement('li');
    var text = document.createTextNode(userAnswer02(document.getElementById('user_input02').value)+' - Rätt! Under renässansen (c:a 1450-1600) verkade storheter som Michelangelo, Leonardo da Vinci och Shakespeare.');
    element.appendChild(text);
    document.getElementById('result').appendChild(element);
    user_score++;
    alert('Grattis! Du har ' + user_score + ' poäng!');
  }
  else {
    var element = document.createElement('li');
    var text = document.createTextNode(userAnswer02(document.getElementById('user_input02').value)+' - Fel! Rätt svar är ' + answer02 + '.');
    element.appendChild(text);
    document.getElementById('result').appendChild(element);
  }
}

function userAnswer02(){
  return (document.getElementById('user_input02').value);
}

document.getElementById('answer02').addEventListener('click', onClick2);


// Third question ------------------------
function onClick3(){
  if((document.getElementById('user_input03').value) === answer03){
    var element = document.createElement('li');
    var text = document.createTextNode(userAnswer03(document.getElementById('user_input03').value)+' - Rätt! Cembalon dök upp på 1300-talet och pianot kom först i början av 1700-talet.');
    element.appendChild(text);
    document.getElementById('result').appendChild(element);
    user_score++;
    alert('Grattis! Du har ' + user_score + ' poäng!');
  }
  else {
    var element = document.createElement('li');
    var text = document.createTextNode(userAnswer03(document.getElementById('user_input03').value)+' - Fel! Rätt svar är ' + answer03 + '.');
    element.appendChild(text);
    document.getElementById('result').appendChild(element);
  }
}

function userAnswer03(){
  return (document.getElementById('user_input03').value);
}

document.getElementById('answer03').addEventListener('click', onClick3);



// Other functionality ------------------------

// Reloads the page when user clicks "Börja om" button. Resets values and restarts timer.
function myResetFunction() {
    location.reload();
}

// 60 s countdown in the Tab title - need to fix a break after 0
// kolla setInterval på w3
document.title = 60;
var i = 60;
function onInterval(){
i--;
document.title = i;
}
setInterval(onInterval, 1000);
