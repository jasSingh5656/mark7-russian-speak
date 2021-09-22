var userinput = document.getElementById('input')
var output = document.getElementById('output-box')
var buttontransalte = document.getElementById('button')

var url = 'https://api.funtranslations.com/translate/russian-accent.json?text='

function translateurl(text){
    return url + text
}



function clickhandler(){
    var inputtext = userinput.value;
    fetch(translateurl(inputtext))
    .then(response => response.json())
    .then(json => output.innerHTML = json.contents.translated)
}

buttontransalte.addEventListener('click', clickhandler)