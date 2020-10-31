
import gsap from "gsap";

export const fadeIn = (Element) => {
    gsap.fromTo(Element, {
      opacity: 0,
      y: -50,
      ease: 'power4',
    },
    {
        opacity: 1,
        y: 0,
        ease: 'power4.out',
        stagger: {
          amount: 0.2
        },
        
    })
  } 

  export const SinglefadeIn = (Element, delay, stagger=0.3, each) => {
    gsap.to(Element, 1, {
      opacity: 1,
      y: 0,
      ease: 'power4.out',
      stagger: {
        amount: stagger,
        each
      },
      delay
    })
  }
  
  export const SinglefadeOut = (element, delay) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -50,
      ease: 'power4.out',
      delay
    })
  }

  export const fadeInHeaderText = (Element) => {
    gsap.fromTo(Element, {
      opacity: 0,
      y: -50,
      ease: 'power4',
    },
    {
        opacity: 1,
        y: 0,
        ease: 'power4.out',
        stagger: {
          amount: 0.4
        },
        delay: 2
    })
  }

