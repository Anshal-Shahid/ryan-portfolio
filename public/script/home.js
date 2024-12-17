const service_box1 = document.querySelector(".service-1")
const service_box2 = document.querySelector(".service-2")
const service_box3 = document.querySelector(".service-3")
const service_box4 = document.querySelector(".service-4")

const service_para = document.querySelector(".service-box p")

// const service_active=document.querySelector(".service-active")

service_para.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vero sit molestias delectus, autem architecto repudiandae placeat enim rem deleniti praesentium voluptate sequi labore est nihil consequuntur adipisci eum beatae saepe, quas et ullam! Asperiores repudiandae dolorem velit iste. Nisi velit eaque id explicabo odit exercitationem molestiae vel, incidunt, earum aspernatur mollitia cumque expedita "
service_box1.classList.add("service-active")


service_box1.addEventListener("click", () => {
    service_box1.classList.add("service-active")

    service_box2.classList.remove("service-active")
    service_box3.classList.remove("service-active")
    service_box4.classList.remove("service-active")

    service_para.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vero sit molestias delectus, autem architecto repudiandae placeat enim rem deleniti praesentium voluptate sequi labore est nihil consequuntur adipisci eum beatae saepe, quas et ullam! Asperiores repudiandae dolorem velit iste. Nisi velit eaque id explicabo odit exercitationem molestiae vel, incidunt, earum aspernatur mollitia cumque expedita "
})
service_box2.addEventListener("click", () => {
    service_box2.classList.add("service-active")
    service_box1.classList.remove("service-active")
    service_box3.classList.remove("service-active")
    service_box4.classList.remove("service-active")

    service_para.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vero sit molestias delectus, autem architecto repudiandae placeat enim rem deleniti praesentium voluptate sequi labore est nihil consequuntur adipisci eum beatae saepe, quas et ullam! Asperiores repudiandae dolorem velit iste. Nisi velit eaque id explicabo odit exercitationem molestiae vel, incidunt, earum aspernatur mollitia cumque expedita aperiam voluptas repellat reprehenderit ipsa sint ipsam nihil assumenda dolor? Ab iusto id a fuga ea, quae error illo unde quibusdam facere atque quia at quos."
})
service_box3.addEventListener("click", () => {
    service_box3.classList.add("service-active")
    service_box1.classList.remove("service-active")
    service_box2.classList.remove("service-active")
    service_box4.classList.remove("service-active")


    service_para.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vero sit molestias delectus, autem architecto repudiandae placeat enim rem deleniti praesentium voluptate sequi labore est nihil consequuntur adipisci eum beatae saepe, quas et ullam! Asperiores repudiandae dolorem velit iste. Nisi velit eaque id explicabo odit exercitationem molestiae vel, incidunt, earum aspernatur mollitia cumque expedita aperiam voluptas repellat reprehenderit ipsa sint ipsam nihil assumenda dolor? Ab iusto id a fuga ea, quae error illo unde quibusdam facere atque quia at quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vero <br> sit molestias delectus, autem architecto repudiandae placeat enim rem deleniti praesentium voluptate sequi labore est nihil consequuntur adipisci eum beatae saepe, quas et ullam! Asperiores repudiandae dolorem velit iste. Nisi velit eaque id explicabo odit exercitationem molestiae vel, incidunt, earum aspernatur mollitia cumque expedita aperiam voluptas repellat reprehenderit ipsa sint ipsam nihil assumenda dolor? Ab iusto id a fuga ea, quae error illo unde quibusdam facere atque quia at quos."
})
service_box4.addEventListener("click", () => {
    service_box4.classList.add("service-active")
    service_box1.classList.remove("service-active")
    service_box2.classList.remove("service-active")
    service_box3.classList.remove("service-active")

    service_para.textContent = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, vero sit molestias delectus, autem architecto repudiandae placeat enim rem deleniti praesentium voluptate sequi labore est nihil consequuntur adipisci eum beatae saepe, quas et ullam! "
})



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

