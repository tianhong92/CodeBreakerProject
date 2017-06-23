let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer == '' || attempt == ''){
        setHiddenFields();
    }

    if(validateInput(!input.value)){
        return false;
    } else {
        attempt++;
    }
}

//implement new functions here

function setHiddenFields() {
    answer = Math.floor( Math.random() * 10000 ).toString();
    while(answer.length < 4) {
        answer = '0' + answer;
    }
    attempt = 0;
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

function getResults(results) {
    var initDiv;
    for(i = 0; i < results.length; i++) {
        initDiv.append('<div class="row"><span class="col-md-6">' + results[i] + '</span><div class="col-md-6">')
    }
}