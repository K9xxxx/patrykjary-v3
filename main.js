let tittleOfSection=document.querySelectorAll('.tittle-of-section')









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

    let tittleOfSectionScene=new ScrollMagic.Scene({
        triggerElement: this,
        offset:1,
        reverse:false
    })
    .addIndicators()
    .setClassToggle(this,'active-tittle')
    .addTo(controller);

});