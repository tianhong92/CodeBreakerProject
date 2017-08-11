let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.value == '' || attempt.value == ''){
        setHiddenFields();
    }

    if(!validateInput(input.value)){
        return false;
    }
    attempt.value += 1;
}

//implement new functions here

function setHiddenFields() {
    newValue = Math.floor( Math.random() * 10000 ).toString();
    while(newValue.length < 4) {
      newValue = '0' + newValue;
    }
    answer.value = newValue;
    attempt.value = 0;
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
    if(input.length == 4){
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}
//
// function getResults(result) {
//     var resultsDiv = "<div class='row'>";
//     for(i = 0; i < result.length; i++) {
//         if(result[i] == answer[i]){
//           tempSpan = "<span class='col-md-6 glyphicon glyphicon-ok'>" + result[i] + "</span>"
//         } else if( result[i] != answer[i] && answer.includes(result[i])) {
//           tempSpan = "<span class='col-md-6 glyphicon glyphicon-transfer'>" + result[i] + "</span>"
//         } else {
//           tempSpan = "<span class='col-md-6 glyphicon glyphicon-remove'>" + result[i] + "</span>"
//         }
//
//         resultsDiv += tempSpan;
//     }
//     resultsDiv +=
// }