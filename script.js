const container = document.querySelector(".container");
const card = document.querySelector(".card");
const sneaker = document.querySelector(".sneaker img")
const title = document.querySelector(".title")
const desc = document.querySelector(".info h2")
const buttons = document.querySelector(".sizes")
const purchase =  document.querySelector(".purchase")

container.addEventListener("mousemove" , (e)=>{
    console.log(innerWidth,innerHeight)
    var xAngle = (window.innerWidth/2 - e.pageX)/20;
    var yAngle = (window.innerHeight/2 - e.pageY)/20;
    console.log(xAngle,yAngle)
    card.style.transform= `rotateX(${xAngle}deg) rotateY(${yAngle}deg)`
})

container.addEventListener("mouseenter", (e) =>{
    console.log("entered")
    card.style.transition = `none`;
    sneaker.style.transform = `translateZ(150px)`;
    title.style.transform = `translateZ(100px)`;
    desc.style.transform = `translateZ(80px)`;
    buttons.style.transform = `translateZ(60px)`;
    purchase.style.transform = `translateZ(50px)`;
})

container.addEventListener("mouseleave", (e) =>{
    console.log("leaving")
    card.style.transform = `rotateX(0deg) rotateY(0deg)`; 
    card.style.transition = `1s ease`;
    })