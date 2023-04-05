
setInterval(function(){
    let counter= 0;
    document.getElementById('radio'+ counter).checked=true;
    counter++;
    if(counter > 6){
        counter = 0;
    }
}, 5000);


