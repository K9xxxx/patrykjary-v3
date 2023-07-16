let tittleOfSection=document.querySelectorAll('.tittle-of-section')
let NavigationMobile=document.querySelector('.navigation-mobile-content')
let navigationBtn=document.querySelector('.navigation-btn img')
let closeBtn=document.querySelector('.close-btn')




const tlInitial=new TimelineMax();


tlInitial.to('.tittle-of-section',0,{opacity:0})

$(document).ready(function(){
    let controller=new ScrollMagic.Controller();
    let navScene=new ScrollMagic.Scene({
        triggerElement:'.header',
        triggerHook:'0',
        offset:0,
        reverse:true,
        duration:100
    })
    .addIndicators()
    .setClassToggle('.desk-nav','active-nav')
    .addTo(controller);


    $(tittleOfSection).each(function(){

        let tittleOfSectionScene=new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook:'0.88',
            offset:1,
            reverse:false
        })
        .addIndicators()
        .setClassToggle(this,'active-tittle')
        .addTo(controller);
    })

    navigationBtn.addEventListener('click',()=>{
        if (NavigationMobile.classList.contains('active')!==false){
            navigationBtn.classList.add('active')
        }
        else{
            console.log('ij')
        }
            
    })


});