let car = document.querySelector('.car');
let road = document.querySelector('.road');
let anim = document.querySelectorAll('.pillar');
document.addEventListener('keydown',function(e){
    
   /*  console.dir(car)
     if(car.offsetTop == 90  && !car.classList.contains('doubledown') && e.key == "/"){
       car.classList.add('doubledown');
    }
    else{
        car.classList.add('doubledown');
    } 
    if(e.key == "/" && !car.classList.contains('down')){
        car.classList.add('down');
    }
    else{
        car.classList.remove('down')
    }

    if(e.key == "." && !car.classList.contains('up')){
        car.classList.add('up');
    } */
   //key if 
    if(e.key == 'ArrowRight' && !car.classList.contains('right')){
        car.classList.add('right');
        setTimeout(function(){
            car.classList.remove('right');
        },2000)
    }


    if(e.key == 'ArrowLeft' && !car.classList.contains('left')){
        car.classList.add('left')
    }
    else{
        car.classList.remove('left')
    }



    if(e.key == "ArrowDown"){
        car.animate([
            {top:'90px'}
        ],{
            duration: 500,
            fill:'forwards'
        })
    }
    else if(e.key == "ArrowUp" && car.offsetTop == 90){
        car.animate([
            {top:'14px'}
        ],{
            duration: 500,
            fill:'forwards'
        })
    }  

    if(car.offsetTop > 80 && e.key == "ArrowDown"){
        car.animate([
            {top:'165px'}
        ],{
            duration: 500,
            fill:'forwards'
        })
    }
    else if(car.offsetTop > 95 && e.key == "ArrowUp"){
        car.animate([
            {top:'90px'}
        ],{
            duration: 500,
            fill:'forwards'
        })
    }

     /* if(e.key == "/"){
        car.animate([
            {transform : 'translateY(75px)'}
        ],{
            duration: 700,
            fill:'forwards'
        })
    }  */
     
});

window.addEventListener('load',function(e){
        anim[0].animate([
            {left:0}
        ],{
            duration: 2500,
            fill:'forwards',
            iterations:Infinity
        }) 
        anim[1].animate([
            {left:0}
        ],{
            duration: 3000,
            fill:'forwards',
            iterations:Infinity
        }) 
        anim[2].animate([
            {left:0}
        ],{
            duration: 3200,
            fill:'forwards',
            iterations:Infinity
        })
        
        
            /* let isAnim=setInterval(function(){
                for(i=0;i<anim.length;i++){
                    let pillar = anim[i];
                    let pillarLeft = parseInt(window.getComputedStyle(pillar).getPropertyValue('left'));
                    let pillarTop = parseInt(window.getComputedStyle(pillar).getPropertyValue('top'));
                    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
                    let carTop = parseInt(window.getComputedStyle(car).getPropertyValue('top'));
                if((pillarLeft == carLeft+40 && pillarTop-2 == carTop)||(pillarLeft == carLeft+40 && pillarTop-4 == carTop)||(pillarLeft == carLeft+20 && pillarTop-5 == carTop)){
                    alert('Vse')
                }
              }
            },4) */

        


        let isAnim = setInterval(function(){
            let pillarLeft1 = parseInt(window.getComputedStyle(anim[0]).getPropertyValue('left'));
            let pillarTop1 = parseInt(window.getComputedStyle(anim[0]).getPropertyValue('top'));
            let pillarLeft2 = parseInt(window.getComputedStyle(anim[1]).getPropertyValue('left'));
            let pillarTop2 = parseInt(window.getComputedStyle(anim[1]).getPropertyValue('top'));
            let pillarLeft3 = parseInt(window.getComputedStyle(anim[2]).getPropertyValue('left'));
            let pillarTop3 = parseInt(window.getComputedStyle(anim[2]).getPropertyValue('top'));
            let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
            let carTop = parseInt(window.getComputedStyle(car).getPropertyValue('top'));
            console.log(pillarLeft1)
            console.log(pillarTop1)
            if((pillarLeft1 == carLeft && pillarTop1-5 == carTop) || (pillarLeft2 == carLeft && pillarTop2-2 == carTop) || (pillarLeft3 == carLeft && pillarTop3-5 == carTop)){
                alert("Спасибо,что живой");
                }
        },4)

}); 

window.addEventListener('keydown',function(e){
        let pillarLeft1 = parseInt(window.getComputedStyle(anim[0]).getPropertyValue('left'));
        let pillarTop1 = parseInt(window.getComputedStyle(anim[0]).getPropertyValue('top'));
        let pillarLeft2 = parseInt(window.getComputedStyle(anim[1]).getPropertyValue('left'));
        let pillarTop2 = parseInt(window.getComputedStyle(anim[1]).getPropertyValue('top'));
        let pillarLeft3 = parseInt(window.getComputedStyle(anim[2]).getPropertyValue('left'));
        let pillarTop3 = parseInt(window.getComputedStyle(anim[2]).getPropertyValue('top'));
        let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
        let carTop = parseInt(window.getComputedStyle(car).getPropertyValue('top'));


        if(e.key === "/"){
            console.log('stolbLeft:',pillarLeft3);
            console.log('stolbTop:',pillarTop3);
            console.log('carLeft:',carLeft);
            console.log('carTop:',carTop);
        }
});



let btn = document.querySelector('.btn');
let pos = 350;
btn.addEventListener('click',function(){
        /* setInterval(() => {
            if(pos == 0 && (car.offsetLeft > anim[1].offsetLeft)){
                clearInterval();
            }
            else{
                pos--;
                anim[1].style.left = pos + 'px'
            }
        }, 10); */
        let set = setInterval(function frame(){
            if(pos == 0){
                /* clearInterval(set); */
                pos= 350
            }
            else{
                pos--;
                anim[1].style.left = pos + 'px'
            }
        },4);
});

