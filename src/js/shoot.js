document.addEventListener('keyup',(event)=>{handleArrow(event.key)})

var currArrowPosition = {x:0,y:0}; 
function handleArrow(key){
    const arrowRef = document.getElementById("arrow");
     
    switch(key){
        case 'ArrowUp':
            currArrowPosition.y-=10;
            break;
        case 'ArrowDown':
            if(currArrowPosition.y != 480){
                currArrowPosition.y+=10;
            }
            break;
        case 'ArrowLeft':
            if(currArrowPosition.x !=0){
                currArrowPosition.x-=10;
            }
            break;
        case 'ArrowRight':
            if(currArrowPosition.x != 300){
                currArrowPosition.x+=10;
            }
            break;
    }
    arrowRef.style.left = currArrowPosition.x+'px'
    arrowRef.style.top = currArrowPosition.y+'px'
    window.currArrowPosition = currArrowPosition;

}


function handleShoot(eve){
    var count = 10;
    const arrowRef = document.getElementById("arrow");
    const idRef = setInterval(()=>{
        arrowRef.style.left = `${++count}px`;
        if(count === 474){
            clearInterval(idRef);
            count=0;
            sendMessage();
        }
    },10)
}
function sendMessage(){
    const msgRef = document.getElementById("msg"); 
    const arrowRef1 = document.getElementById("arrow"); 
    const leftRef = window.getComputedStyle(arrowRef1).getPropertyValue('left')
    const topRef = window.getComputedStyle(arrowRef1).getPropertyValue('top')
    msgRef.innerText = `${currArrowPosition.x} x ${currArrowPosition.y} `
}