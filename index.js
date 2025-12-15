gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 6,
    effects: true
})

ScrollTrigger.matchMedia({
    "(min-width: 991px)": function () {
        gsap.to('#headset', {
            scrollTrigger: {
                trigger: '#section2',
                start: 'top bottom',
                end: 'center center',
                scrub: true
            },
            y: '140%',
            x: '70%',
            width: '32vw',
            rotate: 90,
            ease: 'power1.inOut',
            immediatelyRender: true
        });


        gsap.to('#headset', {
            scrollTrigger: {
                trigger: '#section3',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true
            },
            y: '340%',
            x: '0%',
            width: '35vw',
            rotate: 35,
            ease: 'power1.inOut',
            immediatelyRender: true
        });

        gsap.to('#headset', {
            scrollTrigger: {
                trigger: '#section4',
                start: 'top bottom',
                end: 'center center',
                scrub: true
            },
            y: '400%',
            width: '42vw',
            rotate: 35,
            ease: 'power1.inOut',
            immediatelyRender: true
        });
        
        
        gsap.to('#headset', {
            scrollTrigger: {
                trigger: '#section5',
                start: 'top bottom',
                end: 'center bottom',
                scrub: true
            },
            y: '680%',
            width: '28vw', 
            ease: 'power1.inOut',
            immediatelyRender: true
        });
       
        gsap.to('#headset', {
            scrollTrigger: {
                trigger: '#section5',
                start: 'center bottom',
                end: 'bottom bottom',
                scrub: true
            },
            y: '1094%',
            width: '21vw', 
            ease: 'power1.inOut',
            immediatelyRender: true
        });
        gsap.from('#section2 .content-wrapper', {
             scrollTrigger: {
                trigger: '#section2',
                start: '-50% bottom',
                end: 'center center',
                scrub: true
            },
            y: '140%',
            ease: 'power1.inOut',
        });
        
        gsap.from('#section3 .heading', {
             scrollTrigger: {
                trigger: '#section3',
                start: 'top bottom',
                end: 'center center',
                scrub: true
            },
            y: '140%',
            ease: 'power1.inOut',
        });
       
        gsap.from('#section4 img', {
             scrollTrigger: {
                trigger: '#section4',
                start: 'top bottom',
                end: 'center center',
                scrub: true
            },
            width: 0,
            opacity: 0,
            ease: 'power1.inOut',
        });

        gsap.from('#section6 .content-wrapper', {
             scrollTrigger: {
                trigger: '#section6',
                start: 'top bottom',
                end: 'center center',
                scrub: true
            },
            y: '40%',
            duration: 5,
            ease: 'power1.inOut',
        });

        let split = SplitText.create('#section1 .heading', {
            type: 'chars, words, lines',
            mask: 'lines'
        });

        gsap.from(split.chars, {
            yPercent: () => gsap.utils.random(-100, 30),
            rotation: () => gsap.utils.random(-30, 100),
            autoAlpha: 0,
            ease: 'back.out(1.5)',
            stagger: {
                amount: 0.5,
                from: 'random'
            },
            duration: 1.5
        })

        gsap.from('#headset', {
            opacity: 0,
            scale: 0,
            duration: 1,
            delay: 1,
            ease: 'power1.inOut '
        })

    }

})