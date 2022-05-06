





    var itemOneall= document.querySelectorAll(".opacity");
    var translatex= document.querySelectorAll(".translatex");
    var translatereght= document.querySelectorAll(".translatereght");


    window.onscroll=function(){



        if(scrollY>=500){
            up.classList.add("show")
          }else{
            up.classList.remove("show")
          }
  
          up.onclick=function(){
            window.scrollTo({
          
              top :0,
            behavior:"smooth"
              
            }
          
            )
          }















        itemOneall.forEach(function(e){
            if(window.pageYOffset >= e.offsetTop - 1000){

                e.classList.add("visibility")
            }
        })




        
    translatex.forEach(function(e){
        if(pageYOffset >= e.offsetTop - 1000){

            e.classList.add("translate")
        }
    })


    
    translatereght.forEach(function(e){
        if(pageYOffset >= e.offsetTop - 1000){

            e.classList.add("translatere")
        }
    })














    

        
    
    }
    




























let color=document.querySelector(".color")

let mencolor="--mancolor";
let transparent="--transparent";

console.log(color)

color.addEventListener("change" ,(e)=>{

  document.documentElement.style.setProperty(mencolor,e.target.value );

  document.documentElement.style.setProperty(transparent,e.target.value +"a8");

  localStorage.setItem("colorone", e.target.value )
  localStorage.setItem("colortow", e.target.value +"a8")
  
    console.log(e.target.value)
    console.log(e.target.value +"c9")
})





  document.documentElement.style.setProperty(mencolor,localStorage.getItem("colorone") );

  document.documentElement.style.setProperty(transparent,localStorage.getItem("colortow"));







window.addEventListener("scroll",function(){

    
    let navbar =document.querySelector(".content")
    navbar.classList.toggle("navparclor" ,window.scrollY > 0)

})    
    








var up =document.querySelector(".up")

// window.onscroll=function(){
if(scrollY>=500){
  up.classList.add("show")
}else{
  up.classList.remove("show")
}
// }

up.onclick=function(){
  window.scrollTo({

    top :0,
  behavior:"smooth"
    
  }

  )
}





















let menu=document.querySelector(".menu").onclick=function(){
    let show =document.querySelector(".content .item ul")
    show.classList.toggle("show")
}

































let slideContainer= document.querySelector(".container")
let slide= document.querySelector(".slides")
let slides= document.querySelectorAll(".slide")
let left= document.querySelector(".left ")
let right= document.querySelector(".right ")
let index=1;
let interval=3000;
let slideId;
let firstClone =slides[0].cloneNode(true)
let lastClone =slides[slides.length-1].cloneNode(true)


firstClone.id="first-clone";
lastClone.id="last-clone";

slide.append(firstClone);
slide.prepend(lastClone)

let slidewidth=slides[index].clientWidth;
console.log(slidewidth)
slide.style.transform=`translateX(${-slidewidth * index}px)`;


let startslide=()=>{
    slideId=setInterval(() => {
        movetonextslide()
    }, interval);
}
let getslides =()=>{
    return(slides= document.querySelectorAll(".slide"))
}
slide.addEventListener('transitionend',()=>{
    let slides= document.querySelectorAll(".slide")
    if(slides[index].id===firstClone.id){
        slide.style.transition="none"
        index=1;
        slide.style.transform=`translate(${-slidewidth * index}px)`;
    }
    if(slides[index].id===lastClone .id){
        slide.style.transition="none"
        index=slides.length-2;
        slide.style.transform=`translate(${-slidewidth * index}px)`;
    }
})
let movetonextslide=()=>{
    let= getslides();
    if(index>=slides.length-1)return;
    index++;
    slide.style.transform=`translate(${-slidewidth * index}px)`;
    slide.style.transition=".7s"
    console.log(index)
}
    let movetopravslide=()=>{
        if(index<=0)return;
        index--;
        slide.style.transform=`translate(${-slidewidth * index}px)`;
        slide.style.transition=".7s"
        console.log(index)
    }

slideContainer.addEventListener("mouseenter",()=>{
    clearInterval(slideId)
})
slideContainer.addEventListener("mouseleave", startslide)

right.addEventListener("click",movetonextslide)
left.addEventListener("click",movetopravslide)


startslide();















    



















let prodact=document.querySelectorAll(".prodact img");


console.log(prodact)

prodact.forEach(function(e){

  e.addEventListener("click",(x)=>{
      let overlay=document.createElement("div")

      overlay.className="popup-overlay";

      document.body.append(overlay);

      let pooupbox=document.createElement("div");

      pooupbox.classList="popup-box";

      pooupbox.textContent="×"

      let popupimge=document.createElement("img");

      popupimge.src=e.src;

      pooupbox.appendChild(popupimge);

    document.body.appendChild(pooupbox)

    
pooupbox.onclick=function(){
  pooupbox.remove();
  overlay.remove();
}
  })

})









  

    const filterContainer = document.querySelector(".filer-box"),
    galleryItems = document.querySelectorAll(".prodact img");

  filterContainer.addEventListener("click", (evant)=>{

    console.log(evant.target)

    if(evant.target.classList.contains("filter-item")){
      let  value=evant.target.getAttribute("data-filter")

      filterContainer.querySelector(".active").classList.remove("active")

      evant.target.classList.add("active")

      galleryItems.forEach((item)=>{

        if(item.classList.contains(value) || value=='all'){
          item.classList.remove("hide")
          item.classList.add("active")

        }else{
          item.classList.remove("active")
          item.classList.add("hide")
        }

      })

    }
  
  })





var test=document.querySelector(".item ul ")



test.addEventListener("click",(events)=>{
  events.preventDefault()
  var  know = events.target.dataset.class;
  console.log(know)
  var service=document.querySelector(know) 
  console.log(service)
  var scrooll=service.offsetTop;
    console.log(scrooll)

  window.scrollTo({
    top:scrooll,
    behavior:"smooth"
})

})


let  change=document.querySelector(".change i").onclick=function(){

  let  change=document.querySelector(".change").classList.toggle("active")
  
}














