let hourHand = document.querySelector('#hour');
let minuteHand = document.querySelector('#minute');
let secondHand = document.querySelector('#second');
let h = 0, m = 0 , s = 0 ;
function zero(h,i){
    if (h<10){
        i.innerText = `0${h}`;
    }
    else{
        i.innerText = h;

    }
}
setInterval(() => {
    s++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++;
            if(h==12){
                h=0;
            }
        }
    }
    zero(h,hourHand);
    zero(m,minuteHand);
    zero(s,secondHand);
},1000);
var deg = 0;
setInterval(() => { 
    deg+=10;
    secondHand.style.transform = `rotate(${deg}deg)`;
    if (m > 0 ){
        minuteHand.style.transform = `rotate(${deg}deg)`;
    }
    if (h > 0 ){
        hourHand.style.transform = `rotate(${deg}deg)`;
    }
    if(deg ==10){
        deg=-20;
      }
    else{
        deg+=10;
      };
   

}, 1000);
