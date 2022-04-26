const btns=document.querySelectorAll('button')
const droite=document.getElementById('generer')

function notification(couleur,texte){
    const p=document.createElement('p');
    p.classList.add(couleur);
    p.classList.add('style')
    p.innerHTML=texte;
    droite.appendChild(p);
    setTimeout(() =>{
        droite.removeChild(p);
    },2000)
}

btns.forEach((btn,i)=>{
    btn.addEventListener('click',function(){
        let text=this.getAttribute('data-text')
        let color=this.getAttribute('data-color');
        notification(color,text);
        
    })
})
    


