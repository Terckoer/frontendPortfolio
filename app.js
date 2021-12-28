
let scale = 0.4;

const $backgroundAnimated = document.querySelectorAll('.animations-container div');
const $header = document.querySelector('.header');
const $next = document.getElementById('id-next');
const $previous = document.getElementById('id-previous');
const $slider = document.getElementById('id-slider');
const $about = document.getElementById('id-about');
const $project = document.getElementById('id-projects');
const $skills = document.getElementById('id-skills');
const $contact = document.getElementById('id-contact');
const $closeMenu = document.getElementById('id-close-menu');
const $openMenu = document.getElementById('id-open-menu');


const generarHex = () =>{
    let arr = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];
    let result = '';
    for(let i=0; i<6;i++){
        result+= arr[parseInt(Math.random()*16)];
    }
    return '#'+result;
}

setInterval(()=>{
    $backgroundAnimated.forEach(el => 
        {
            let top = parseInt(10+Math.random()*80);
            let left = parseInt(Math.random()*90); 
            if(el.classList.contains('fixed')){
            }
            else if(el.classList.contains('item11')){
                let hex = generarHex();
                el.textContent = hex;
                el.style.color = hex;
                el.style.left = `${left}vw`;
                el.style.top = `${top}vh`;
                el.style.transition = `all 8s linear`;
            }else{
                el.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
                el.style.left = `${left}vw`;
                el.style.top = `${top}vh`;
                el.style.transition = `all 8s linear`;
            }
                       
            
        }    
    );
},7000);

$backgroundAnimated.forEach(el => 
    {
        
        if(el.classList.contains('item11')){
            let hex = generarHex();
            el.textContent = hex;
            el.style.color = hex;
        }else{
            el.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
        }
        let top = parseInt(10+Math.random()*80);
        let left = parseInt(Math.random()*90); 

        el.style.left = `${left}vw`;
        el.style.top = `${top}vh`;
        el.style.transition = `all 8s linear`;
        
    }    
);

$backgroundAnimated.forEach(el => {
    el.addEventListener('click',(event)=>{
        el.classList.toggle('fixed');
        el.style.left = `${event.clientX}px`;
        el.style.top = `${event.clientY}px`;

    })
});

const next = () =>{
    let $lastSlide = document.querySelectorAll('.project-card')[0]; 

    $slider.style.marginLeft = `-${900}px`;
    $slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        $slider.style.transition = 'none';
        $slider.insertAdjacentElement('beforeend', $lastSlide);
        $slider.style.marginLeft =`${0}px`;
    },500);
  }

const previous = () =>{
let $lastSlide = document.querySelectorAll('.project-card')[4]; 
$slider.style.marginLeft = '900px';
$slider.style.transition = 'all 0.5s';
setTimeout(function (){
    $slider.style.transition = 'none';
    $slider.insertAdjacentElement('afterbegin', $lastSlide);
    $slider.style.marginLeft =`${0}px`;
},500);
}



const removeMenu = () =>{
    const $menu = document.getElementById('id-hidden-menu');
    const $layer = document.getElementById('id-menu-layer');
    $menu.classList.remove('show-menu');
    $layer.classList.remove('show-menu');
}


const addMenu = () =>{
    const $menu = document.getElementById('id-hidden-menu');
    const $layer = document.getElementById('id-menu-layer');
    $menu.classList.add('show-menu');
    $layer.classList.add('show-menu');
}

$next.addEventListener('click', () => next());
$previous.addEventListener('click', () => previous());
$closeMenu.addEventListener('click', ()=> removeMenu());
$openMenu.addEventListener('click', ()=> addMenu());


//INTERSECTION OBSERVER FUNCTIONS

const showAbout = (entries, observer) =>{
    if(entries[0].isIntersecting){
        const $aboutContainer = document.getElementById('id-about-container');
        
        setTimeout(() => {
            const $aboutTitle = document.getElementById('id-title-about');
            $aboutTitle.style.transform = `translateY(0)`;
            $aboutTitle.style.transition = `all 0.5s ease`;
        }, 1000);
        $aboutContainer.style.opacity = '1';
        $aboutContainer.style.transition = `all 1s linear`;
        $aboutContainer.style.transform = `scale(1)`;
    }else{
        const $aboutContainer = document.getElementById('id-about-container');
        const $aboutTitle = document.getElementById('id-title-about');
        $aboutTitle.style.transform = `translateX(-100vw)`;
        $aboutTitle.style.transition = `all 0.5s ease`;
        
        $aboutContainer.style.opacity = '0';
        $aboutContainer.style.transition = `all 0.5s linear`;
        $aboutContainer.style.transform = `scale(0.7)`;
    
    }
}

const showProject = (entries, observer) =>{
    if(entries[0].isIntersecting){
        const $aboutContainer = document.getElementById('id-project-container');
        const $projectTitle = document.getElementById('id-title-projects');
        

        $aboutContainer.style.opacity = '1';
        $aboutContainer.style.transition = `all 1s linear`;
        $aboutContainer.style.transform = `scale(1)`;
        setTimeout(()=>{
            $next.style.right = `0vw`; 
            $next.style.transition = `all 0.5s ease`; 
            $previous.style.left = `0vw`; 
            $previous.style.transition = `all 0.5s ease`;
            $projectTitle.style.transition = `all 0.5s ease`;
            $projectTitle.style.transform = `translateX(0vw)`;   
        },1000);

    }else{
        const $aboutContainer = document.getElementById('id-project-container');
        const $projectTitle = document.getElementById('id-title-projects');
        $projectTitle.style.transition = `all 1s ease`;
        $projectTitle.style.transform = `translateX(100vw)`;
        
        $aboutContainer.style.opacity = '0';
        $aboutContainer.style.transition = `all 0.5s linear`;
        $aboutContainer.style.transform = `scale(0.7)`;
        $next.style.right = `-10vw`; 
        $next.style.transition = `all 0.5s ease`; 
        $previous.style.left = `-10vw`; 
        $previous.style.transition = `all 0.5s ease`; 
    }
}

const showSkills = (entries, observer) =>{
    if(entries[0].isIntersecting){
        const $aboutContainer = document.getElementById('id-skills-container');
        const $skillsArray = document.querySelectorAll('.skill');
        const $skillsTitle = document.getElementById('id-skills-title');

        setTimeout(() => {
            $skillsTitle.style.transition = `all 0.5s ease`;
            $skillsTitle.style.transform = `translateX(0vw)`;
        }, 2000);

        for(let i=0;i<$skillsArray.length;i++){
            $skillsArray[i].classList.add('show-skill'+i);
        }
        $aboutContainer.style.opacity = '1';
        $aboutContainer.style.transition = `all 1s linear`;
        $aboutContainer.style.transform = `scale(1)`;
           
    }else{
        const $aboutContainer = document.getElementById('id-skills-container');
        const $skillsArray = document.querySelectorAll('.skill');
        const $skillsTitle = document.getElementById('id-skills-title');

        $skillsTitle.style.transition = `all 0.5s ease`;
        $skillsTitle.style.transform = `translateX(-100vw)`;

        for(let i=0;i<$skillsArray.length;i++){
            $skillsArray[i].classList.remove('show-skill'+i);
        }
        $aboutContainer.style.opacity = '0';
        $aboutContainer.style.transition = `all 0.5s linear`;
        $aboutContainer.style.transform = `scale(0.7)`;
    }
}


const showContact = (entries, observer) =>{
    if(entries[0].isIntersecting){
        const $aboutContainer = document.getElementById('id-contact-container');
        const $contactTitle = document.getElementById('id-contact-title');

        setTimeout(() => {    
            $contactTitle.style.transition = `all 0.5s ease`;
            $contactTitle.style.transform = `translateX(0vw)`;
        }, 1000);
            
        $aboutContainer.style.opacity = '1';
        $aboutContainer.style.transition = `all 1s linear`;
        $aboutContainer.style.transform = `scale(1)`;

    }else{
        const $aboutContainer = document.getElementById('id-contact-container');
        const $contactTitle = document.getElementById('id-contact-title');

        $contactTitle.style.transition = `all 0.5s ease`;
        $contactTitle.style.transform = `translateX(100vw)`;

        $aboutContainer.style.opacity = '0';
        $aboutContainer.style.transition = `all 0.5s linear`;
        $aboutContainer.style.transform = `scale(0.7)`;
    }
}

//OBSERVERS
const observerAbout = new IntersectionObserver(showAbout, {
    root:null,
    rootMargin:'10px 10px 10px 10px',
    threshold: 0.5
});

const observerProject = new IntersectionObserver(showProject, {
    root:null,
    rootMargin:'300px 10px 200px 10px',
    threshold: 1.0
});

const observerSkills = new IntersectionObserver(showSkills, {
    root:null,
    rootMargin:'10px 10px 10px 10px',
    threshold: 0.5
});

const observerContact = new IntersectionObserver(showContact, {
    root:null,
    rootMargin:'10px 10px 10px 10px',
    threshold: 0.5
});

//OBSERVE ELEMENTS
observerAbout.observe($about);
observerProject.observe($project);
observerSkills.observe($skills);
observerContact.observe($contact);




// ANIMACION AL HACER :HOVER

//const $card = document.querySelector('.monogram');

// $card.addEventListener('mouseover', ()=>{
//     const $projects = document.querySelector('.projects');
//     $projects.classList.add('background-project');
// });

// $card.addEventListener('mouseleave', ()=>{
//     const $projects = document.querySelector('.projects');
//     $projects.classList.remove('background-project');
// });

