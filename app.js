let cards = document.querySelectorAll(".card")

document.addEventListener('DOMContentLoaded', ()=>{
    let option ={
        root:null,
        threshold:0,
        rootMargin: "-150px"
    }
    let observer = new IntersectionObserver(callback=(entries,observer)=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting){
                return
            }
            entry.target.classList.toggle('animate__animated')
            entry.target.classList.toggle('animate__heartBeat')
            entry.target.classList.toggle('animate__repeat-1')
            entry.target.classList.toggle('animate_slower')
            entry.target.classList.toggle('3s')
            
        })
    },option)

    cards.forEach(card=>observer.observe(card))
})

let scrollToTop = document.getElementById("scrollToTop")

window.addEventListener("scroll",()=>{
    if(window.scrollY > 300){
        scrollToTop.classList.remove("d-none")
    }else{
        scrollToTop.classList.add("d-none")
    }
})

scrollToTop.addEventListener("click", ()=>window.scrollTo({top:0,behavior:'smooth'}))

