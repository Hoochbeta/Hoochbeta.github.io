setInterval(function(){
    let counter= 0;
    let radio = document.getElementById('radio'+ counter);
    counter++;
    if(counter > 6){
        counter = 0;
    }
    radio.checked=true;
}, 5000);
