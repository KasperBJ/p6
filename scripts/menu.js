const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    
    
    burger.addEventListener('click',() => {
    
        //åben og luk nav
        nav.classList.toggle('nav-active');
    
        // nav link animation
        navlinks.forEach((link,index)=>{
            if(link.style.animation){
            link.style.animation ='';
            }else{
             link.style.animation = `navlinkfade 0.5s ease forwards ${index/7+0.3}s`;
            }
        });   
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();