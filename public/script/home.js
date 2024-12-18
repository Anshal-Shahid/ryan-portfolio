const service_box1 = document.querySelector(".service-1")
const service_box2 = document.querySelector(".service-2")
const service_box3 = document.querySelector(".service-3")
// const service_box4 = document.querySelector(".service-4")

const service_para = document.querySelector(".service-box p")

// const service_active=document.querySelector(".service-active")

service_para.innerHTML = "Struggling to increase traffic to your website? I’m here to help! With my expert SEO services, I’ll optimize your site to attract more visitors and keep them engaged. 🌟 <br> <br> By utilizing advanced SEO techniques and tailored strategies, I ensure that your content ranks higher on search engines, bringing in more organic traffic and boosting your online visibility. 📈 Let’s work together to transform your website into a traffic powerhouse! 💻"
service_box1.classList.add("service-active")


service_box1.addEventListener("click", () => {
    service_box1.classList.add("service-active")

    service_box2.classList.remove("service-active")
    service_box3.classList.remove("service-active")
    // service_box4.classList.remove("service-active")

    service_para.innerHTML = "Struggling to increase traffic to your website? I’m here to help! With my expert SEO services, I’ll optimize your site to attract more visitors and keep them engaged. 🌟 <br> <br> By utilizing advanced SEO techniques and tailored strategies, I ensure that your content ranks higher on search engines, bringing in more organic traffic and boosting your online visibility. 📈 Let’s work together to transform your website into a traffic powerhouse! 💻"
})
service_box2.addEventListener("click", () => {
    service_box2.classList.add("service-active")
    service_box1.classList.remove("service-active")
    service_box3.classList.remove("service-active")
    // service_box4.classList.remove("service-active")

    service_para.textContent = "Want to create a seamless and engaging experience for your website visitors? I specialize in improving user experience (UX) to ensure your audience enjoys navigating your site. 🚀<br><br>From optimizing website design and structure to enhancing load speed and accessibility, I focus on every detail to keep your visitors engaged and encourage them to take action. 📈 Let’s work together to create a website that not only attracts visitors but keeps them coming back!"
})
service_box3.addEventListener("click", () => {
    service_box3.classList.add("service-active")
    service_box1.classList.remove("service-active")
    service_box2.classList.remove("service-active")
    // service_box4.classList.remove("service-active")


    service_para.textContent = "Ready to turn visitors into customers? I specialize in optimizing websites to boost conversion rates and maximize your return on investment. 🚀 <br><br>By analyzing user behavior and refining key elements like calls-to-action, landing pages, and site flow, I help you convert more visitors into loyal customers. 📈 Let’s work together to create a website that drives results and helps your business grow!"
})
// service_box4.addEventListener("click", () => {
//     service_box4.classList.add("service-active")
//     service_box1.classList.remove("service-active")
//     service_box2.classList.remove("service-active")
//     service_box3.classList.remove("service-active")

//     service_para.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vero sit molestias delectus, autem architecto repudiandae placeat enim rem deleniti praesentium voluptate sequi labore est nihil consequuntur adipisci eum beatae saepe, quas et ullam! "
// })



gsap.from(".welcome h1",{
    duration:1,
    y:130,
    opacity:0,
    ease:"power2.inOut",
})

gsap.to(".welcome",{
    delay:2,
    y:-900,
    display:"none"
})




gsap.fromTo(".section-7 .box", {
    opacity: 0,

}, {
    opacity: 1,
    scrollTrigger: {
        trigger: ".section-7",
        start: "20% 80%",
        // end:"bottom 80%",
        // markers:true
    }
})


gsap.fromTo(".section-2 .box", {
    scale: 0
}, {
    scale: 1,
    scrollTrigger: {
        trigger: ".section-2",
        start: "15% 80%",
        // end:"bottom 80%",
        // markers:true
    }
})




gsap.from(".section-4 .num-1", {
    textContent: 0,
    duration: 1,
    ease: Power1.easeIn,
    snap: { textContent: 1 },
    stagger: 1,
    scrollTrigger: {
        trigger: ".num ",
        start: "top 90%",
        end: "bottom top",
        // markers:true

    },


});
gsap.from(".section-4 .num-2", {
    textContent: 0,
    duration: 1,
    ease: Power1.easeIn,
    snap: { textContent: 1 },
    stagger: 1,
    scrollTrigger: {
        trigger: ".num ",
        start: "top 90%",
        end: "bottom top",
        // markers:true

    },


});
gsap.from(".section-4 .num-3", {
    textContent: 0,
    duration: 1,
    ease: Power1.easeIn,
    snap: { textContent: 1 },
    stagger: 1,
    scrollTrigger: {
        trigger: ".num ",
        start: "top 90%",
        end: "bottom top",
        // markers:true

    },


});






gsap.fromTo(".section-6 .service-1", {
    x:-55,
    opacity:0
}, {
    x: 0,
    opacity:1,
    scrollTrigger: {
        trigger: ".section-6",
        start: "23% 80%",
        // end:"bottom 80%",
        // markers:true
    }
})

gsap.fromTo(".section-6 .service-2", {
    x:-55,
    opacity:0
}, {
    x: 0,
    opacity:1,
    scrollTrigger: {
        trigger: ".section-6",
        start: "23% 80%",
        // end:"bottom 80%",
        // markers:true
    }
})

gsap.fromTo(".section-6 .service-3", {
    x:55,
    opacity:0
}, {
    x: 0,
    opacity:1,
    scrollTrigger: {
        trigger: ".section-6",
        start: "23% 80%",
        // end:"bottom 80%",
        // markers:true
    }
})

gsap.fromTo(".section-6 .service-4", {
    x:55,
    opacity:0
}, {
    x: 0,
    opacity:1,
    scrollTrigger: {
        trigger: ".section-6",
        start: "23% 80%",
        // end:"bottom 80%",
        // markers:true
    }
})

