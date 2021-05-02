document.querySelector('.main').style.display='none';
document.getElementById('load').classList.add('loader');


async function animation () {
    document.getElementById('load').classList.remove('loader');
    document.querySelector('.main').style.display = 'block';
    await new Promise(() => runTick());
}

setTimeout(animation, 3000);

const text=document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for( let i=0; i<splitText.length;i++){
    text.innerHTML += "<span>" + splitText[i] +"</span>";
}

let char =0;
function runTick(){setInterval(onTick, 100)};

function onTick(){
    const span=text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();

    }
}

function  complete(){
    clearInterval(timer);
    timer=null;
}