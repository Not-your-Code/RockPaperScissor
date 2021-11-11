let rulebtn = document.getElementById('rules')
rulebtn.addEventListener('click' , ()=>{
       document.querySelector(".Rulebox").style.visibility = "visible"
       document.getElementById('lightbox').style.visibility = "visible"
    })
let cross = document.getElementById("Cross")
cross.addEventListener('click' , ()=>{
    document.getElementById('lightbox').style.visibility = "hidden"
    document.querySelector(".Rulebox").style.visibility = "hidden"
    
})

let play = document.getElementById('playnow')
play.addEventListener('click' , ()=>{
    document.querySelector('.score').classList.add("scactive")
    play.style.visibility="hidden"
     
})