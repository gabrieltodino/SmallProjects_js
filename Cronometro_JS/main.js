function set() {
    res = document.querySelector('input#time') 
    inputNumber = Number(res.value)
    timeDisplay = document.querySelector('div#CurrentTime') 
    secMin = inputNumber/60
    
    formatValue()
}

function formatValue(){
    if(secMin < 1){//verify if is seconds or minutes
        if(inputNumber < 10){
            timeDisplay.innerHTML = `00:0${inputNumber}`
        }else{
            timeDisplay.innerHTML = `00:${inputNumber}`
        }
    } else if(inputNumber < 3600){
        if(inputNumber < 600){
            timeDisplay.innerHTML = `0${secMin.toFixed(2).replace('.',':')}`
        }else{
            timeDisplay.innerHTML = secMin.toFixed(2).replace('.',':')
        }
    }else{
        timeDisplay.innerHTML = 'Insira um valor entre 1 segundo e 1 hora!'
    }
}


function init(){
    myInterval = setInterval(() => {
        inputNumber--
        secMin = inputNumber/60
        formatValue()
        inputNumber == 0 ? clearInterval(myInterval) : 0 
    }, 1000 );
}

function stop(){
    clearInterval(myInterval)
}