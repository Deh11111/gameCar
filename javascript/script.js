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
     

    /* let carLeft = parseInt(window.getComputedStyle(car).getPropertyPriority('left'));
    let carTop = parseInt(window.getComputedStyle(car).getPropertyPriority('top'));
    let pillarLeft =  parseInt(window.getComputedStyle(pillar).getPropertyPriority('left'));
    let pillarTop =  parseInt(window.getComputedStyle(pillar).getPropertyPriority('top'));

    if(carLeft == pillarLeft && carTop == pillarTop){
        alert("ПРощай");
    }
});
 */
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
        
        
            let isAnim=setInterval(function(){
                for(i=0;i<anim.length;i++){
                    let pillar = anim[i];
                    let pillarLeft = parseInt(window.getComputedStyle(pillar).getPropertyValue('left'));
                    let pillarTop = parseInt(window.getComputedStyle(pillar).getPropertyValue('top'));
                    let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
                    let carTop = parseInt(window.getComputedStyle(car).getPropertyValue('top'));
                if((pillarLeft == carLeft+20 && pillarTop-2 == carTop)||(pillarLeft == carLeft+20 && pillarTop-4 == carTop)||(pillarLeft == carLeft+20 && pillarTop-5 == carTop)){
                    alert('Vse')
                }
              }
            },10)
            /* for(i=0;i<anim.length;i++){
                let pillar = anim[i];
                let pillarLeft = parseInt(window.getComputedStyle(pillar).getPropertyValue('left'));
                let pillarTop = parseInt(window.getComputedStyle(pillar).getPropertyValue('top'));
                let carLeft = parseInt(window.getComputedStyle(car).getPropertyValue('left'));
                let carTop = parseInt(window.getComputedStyle(car).getPropertyValue('top'));
                setInterval(function(){
                    if((pillarLeft == carLeft+20 && pillarTop-2 == carTop)||(pillarLeft == carLeft+20 && pillarTop-4 == carTop)||(pillarLeft == carLeft+20 && pillarTop-5 == carTop)){
                        'ИДИ отсюда'
                    }
                },10)
            } */
}); 

console.log(anim[0].offsetTop);
console.log(car.offsetTop);
window.addEventListener('keydown',function(e){
    if(e.key = "/"){
        console.log(parseInt(window.getComputedStyle(anim[0]).getPropertyValue('left')));
    }
})



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

/* for(let i=0;i<anim.length;i++){
    anim[i].addEventListener('mouseover',function(){
        if(car.offsetLeft > anim[1].offsetLeft){
            alert('Goddbye')
        }
        console.log('car',car.offsetLeft)
        console.log('pillar',anim[1].offsetLeft)
    })
} */

anim.forEach(ani=>{
    ani.addEventListener('mouseover',function(){
        if(car.offsetLeft > anim[1].offsetLeft){
            alert('Goddbye')
        }
        console.log('car',car.offsetLeft)
        console.log('pillar',anim[0].offsetLeft)
    })
})

if(car.offsetLeft > anim[1].offsetLeft){
    alert('все')
}