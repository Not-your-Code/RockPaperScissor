let rulebtn = document.getElementById('rules')
rulebtn.addEventListener('click' , ()=>{
       document.querySelector(".Rulebox").style.visibility = "visible"
})
let cross = document.getElementById("Cross")
cross.addEventListener('click' , ()=>{
    document.querySelector(".Rulebox").style.visibility = "hidden"
    
})