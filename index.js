gsap.registerPlugin(ScrollTrigger);

gsap.from(".nav",{ 
   y:-50,
   duration:.9,
   opacity:0
   

})

gsap.from(".hero h1",{ 
    y:50,
    duration:.5,
    opacity:0,
    stagger:2,
    delay:.3,
   

 })


 gsap.from(".hero p",{ 
    y:30,
    duration:1,
    delay:.8,
    opacity:0,
    stagger:2
   

 })

gsap.from(".img-container .imgs ",{ 
    
    opacity:0,
    y:50,
    duration:1,
    scale:.9,
    stagger:1,
  
        scrollTrigger: {
            scroller:"body",
            trigger: ".img-container",
            start:"top 90%",
            end:"top 95%",
            scrub: 2,
        }
          
 
 })


gsap.from(".img-container img",{ 
   
    scale:2,
    // duration:.9,
    scrollTrigger: {
        scroller:"body",
		trigger: ".img-container img",
		scrub: true,
        start:"top 30%",
        end:"bottom 50%",
        
	}
 
 })
 gsap.from(".left h1",{ 
    y:50,
    opacity:0,
    scale:.9,
   stagger: 0.8,

    scrollTrigger: {
        scroller:"body",
		trigger: ".left h1",
		scrub: true,
		end: "bottom bottom",
        start:"top 90%",
        end:"top 85%",
        scrub:1,
	}
 
 })
 gsap.from(".left p",{ 
    y:40,
    scale:.8,
    opacity:0,
    stagger: 0.8,

    scrollTrigger: {
        scroller:"body",
		trigger: ".left p",
		scrub: true,
		end: "bottom bottom",
        start:"top 90%",
        end:"top 85%",
        scrub:1,
	}
 
 })
 gsap.from(".self h4",{ 
    x:-50,
    scale:.9,
    opacity:1,
    duration:1,


    scrollTrigger: {
        scroller:"body",
		trigger: ".self h4",
		scrub: true,
		end: "bottom bottom",
        start:"top 95%",
        end:"top 90%",
        scrub:true,
	}
 
 })

 gsap.from(".heading",{ 
    y:50,
    scale:.9,
    opacity:0,
    stagger:1,


    scrollTrigger: {
        scroller:"body",
		trigger: ".heading",
		scrub: true,
        start:"top 85%",
        end:"top 70%",
        scrub:2,
	}
 
 })

 gsap.from(".next-line h2",{ 
    y:50,
    scale:.9,
    opacity:0,
    stagger:3,


    scrollTrigger: {
        scroller:"body",
		trigger: ".heading",
		scrub: true,
        start:"top 75%",
        end:"top 60%",
        scrub:1,
	}
 
 })

 gsap.from(".card-container  h4",{ 
    y:50,
    scale:.9,
    opacity:0,
    stagger:2,


    scrollTrigger: {
        scroller:"body",
		trigger: ".card-container ul li h4 ",
		scrub: true,
        start:"top 85%",
        end:"top 80%",
        scrub:2,
	}
 
 })

 gsap.from(".pg3-left h6",{ 
    y:20,
    scale:.9,
    opacity:0,
    stagger:3,


    scrollTrigger: {
        scroller:"body",
		trigger: ".pg3-left h6",
		scrub: true,
        start:"top 85%",
        end:"top 80%",
        scrub:1,
	}
 
 })


 gsap.from(".pg3-left p",{ 
    y:50,
    scale:.9,
    opacity:0,
    stagger:3,


    scrollTrigger: {
        scroller:"body",
		trigger: ".pg3-left p",
		scrub: true,
        start:"top 85%",
        end:"top 80%",
        scrub:1,
	}
 
 })

 gsap.from(".pg3-img-container",{ 
    y:50,
    scale:.9,
    opacity:0,
    stagger:3,


    scrollTrigger: {
        scroller:"body",
		trigger: ".imgs",
		scrub: true,
        start:"top 65%",
        end:"top 50%",
        scrub:1,
	}
 
 })


 gsap.from(".lower-text",{ 
    y:50,
    scale:.9,
    opacity:0,
    stagger:2,
    scrollTrigger: {
        scroller:"body",
		trigger: ".lower-text",
		scrub: true,
        start:"top 85%",
        end:"top 80%",
        scrub:1,
	}
 
 })
 gsap.from(".pg4-container h2",{ 
    y:50,
    scale:.9,
    opacity:0,
    stagger:2,
    scrollTrigger: {
        scroller:"body",
		trigger: ".pg4-container",
		scrub: true,
        start:"top 75%",
        end:"top 70%",
        scrub:1,
	}
 
 })

 gsap.from(".popular-img",{ 
    y:50,
    scale:.9,
    opacity:0,
    scrollTrigger: {
        scroller:"body",
		trigger: ".popular-img",
		scrub: true,
        start:"top 75%",
        end:"top 70%",
        scrub:1,
	}
 
 })

 gsap.from(".popular-div h2",{ 
    y:50,
    scale:.9,
    opacity:0,
    scrollTrigger: {
        scroller:"body",
		trigger: ".popular-div h2",
		scrub: true,
        start:"top 95%",
        end:"top 90%",
        scrub:1,
	}
 
 })

 gsap.from(".popular-div span",{ 
    y:50,
    scale:.9,
    opacity:0,
    scrollTrigger: {
        scroller:"body",
		trigger: ".popular-div span",
		scrub: true,
        start:"top 85%",
        end:"top 80%",
        scrub:1,
	}
 
 })


 gsap.from(".footer-container",{ 
    y:50,
    scale:.9,
    opacity:0,
    scrollTrigger: {
        scroller:"body",
		trigger: ".footer-container",
		scrub: true,
        start:"top 85%",
        end:"top 80%",
        scrub:1,
	}
 
 })

  gsap.from(".copyright",{ 
    y:50,
    scale:.9,
    opacity:0,
    scrollTrigger: {
        scroller:"body",
		trigger: ".footer-container",
		scrub: true,
        start:"top 65%",
        end:"top 60%",
        scrub:1,
	}
 
 })


 document.addEventListener('DOMContentLoaded', function() {
    // Get all option elements
    const options = document.querySelectorAll('.option');

    // Add click event listener to each option
    options.forEach(option => {
        option.style.color='white'
        option.addEventListener('click', ()=>{
            
           
            document.querySelector('.phone').classList.toggle('active')
            const sectionId = this.querySelector('a').getAttribute('href'); // Get href value
            const section = document.querySelector(sectionId);
           

            ;// Find corresponding section

            // Scroll to the section
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});