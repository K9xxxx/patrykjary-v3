let tittleOfSection=document.querySelectorAll('.tittle-of-section')
let qaQuestion=document.querySelectorAll('.qa')
let qaAnswer=document.querySelectorAll('.qa-answer')
let qaiIconPlus=document.querySelectorAll('.qa-icon-plus')
let navigationMobile=document.querySelector('.navigation-mobile-content')
let navigationBtn=document.querySelector('.navigation-btn')
let closeBtn=document.querySelector('.close-btn')
let navSocials=document.querySelector('.navigation-mobile-socials')
let activeTool=document.querySelector('.active-tool')





const tlInitial=new TimelineMax();



tlInitial.to('.tittle-of-section',0,{opacity:0})

$(document).ready(function(){


    document.querySelector('.programming-tools').addEventListener('click',()=>{
        if (document.querySelector('.active-tool').classList.contains('right-tool'))
        {
            document.querySelector('.active-tool').classList.remove('right-tool')
            document.querySelector('.programming-tools').classList.add('active-tools')
            document.querySelector('.designing-tools').classList.remove('active-tools')
            document.querySelector('.my-tools-programming').classList.add('my-active-tools')
            document.querySelector('.my-tools-designing').classList.remove('my-active-tools')
        }
        else{
            return 0;
        }
    })
    document.querySelector('.designing-tools').addEventListener('click',()=>{
        if (document.querySelector('.active-tool').classList.contains('right-tool'))
        {
            return 0;
        }
        else{
            document.querySelector('.active-tool').classList.add('right-tool')
            document.querySelector('.programming-tools').classList.remove('active-tools')
            document.querySelector('.designing-tools').classList.add('active-tools')
            document.querySelector('.my-tools-programming').classList.remove('my-active-tools')
            document.querySelector('.my-tools-designing').classList.add('my-active-tools')
        }
    })


    //Do zmiany ten blok, który mowi o wysuwaniu odpowiedzi do pytan w sekcji Q&A
    qaQuestion[0].addEventListener('click',()=>{
        if(qaQuestion[0].classList.contains('qa-Active')){
            qaQuestion[0].classList.remove('qa-Active')
        }
        else{
            qaQuestion[0].classList.add('qa-Active')
            qaQuestion[1].classList.remove('qa-Active')
            qaQuestion[2].classList.remove('qa-Active')
            qaQuestion[3].classList.remove('qa-Active')
        }
    })
    qaQuestion[1].addEventListener('click',()=>{
        if(qaQuestion[1].classList.contains('qa-Active')){
            qaQuestion[1].classList.remove('qa-Active')
        }
        else{
            qaQuestion[1].classList.add('qa-Active')
            qaQuestion[0].classList.remove('qa-Active')
            qaQuestion[2].classList.remove('qa-Active')
            qaQuestion[3].classList.remove('qa-Active')
        }
    })
    qaQuestion[2].addEventListener('click',()=>{
        if(qaQuestion[2].classList.contains('qa-Active')){
            qaQuestion[2].classList.remove('qa-Active')
        }
        else{
            qaQuestion[2].classList.add('qa-Active')
            qaQuestion[0].classList.remove('qa-Active')
            qaQuestion[1].classList.remove('qa-Active')
            qaQuestion[3].classList.remove('qa-Active')
        }
    })
    qaQuestion[3].addEventListener('click',()=>{
        if(qaQuestion[3].classList.contains('qa-Active')){
            qaQuestion[3].classList.remove('qa-Active')
        }
        else{
            qaQuestion[3].classList.add('qa-Active')
            qaQuestion[0].classList.remove('qa-Active')
            qaQuestion[1].classList.remove('qa-Active')
            qaQuestion[2].classList.remove('qa-Active')
        }
    })


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
        if (navigationMobile.classList.contains('active')!==true){
            navigationBtn.classList.remove('nav-active')
            navigationMobile.classList.add('active')
            closeBtn.classList.add('nav-active')
            navSocials.classList.add('active-social-nav')
        }
        else{
            return 0;
        }
            
    })
    closeBtn.addEventListener('click',()=>{
        if (navigationMobile.classList.contains('active')===true){
            navigationBtn.classList.add('nav-active')
            navigationMobile.classList.remove('active')
            closeBtn.classList.remove('nav-active')
            navSocials.classList.remove('active-social-nav')
        }
        else{
            return 0;
        }
            
    })




});