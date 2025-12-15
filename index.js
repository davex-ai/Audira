gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 6,
    effects: true
})