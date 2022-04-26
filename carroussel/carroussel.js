
const container =document.getElementById('container')
const g=document.getElementById('g')
const d=document.getElementById('d')
var i=0
const tab=['images/mj0.jpg','images/mj1.jpg','images/mj2.jpg','images/mj3.jpg','images/mj4.jpg']

function afficher(){
var img= document.createElement('img')
img.className='photo'
img.src=tab[i]
container.appendChild(img)
setInterval( () =>{
    container.removeChild(img)
    i++
   if(i>=tab.length){
       i=0
   }
   afficher()
},5000)

g.addEventListener('click',function(){
    let direction=this.getAttribute('data-direction');
    if(direction=='left'){ 
        container.removeChild(img)
        img.src=tab[i]
        i--
        container.appendChild(img)
    }
    })

    d.addEventListener('click',function(){
        let direction=this.getAttribute('data-direction');
        if(direction=='right'){ 
            container.removeChild(img)
            img.src=tab[i]
            i++
            container.appendChild(img)
        }
    
        })
        
    }
    afficher()




