import gsap from "gsap";

class Animation {
    constructor(target) {
        this.target = target
    }

    comeIn(tween) {
        tween = tween || gsap.timeline()
        tween.to(this.target,{ duration: 0, display:'none', opacity:0, x:0 , y:40})
        tween.to(this.target,{ duration: 0.5, display:'flex', opacity:1, x:0 , y:0})
    }

    comeOut(tween) {
        tween = tween || gsap.timeline()
        tween.to(this.target,{ duration: 0, display:'flex', opacity:1, x:0 , y:0})
        tween.to(this.target,{ duration: 0.5, display:'none', opacity:0, x:0 , y:-40})
    }
}

const loginAnimation = new Animation('.login')
const registerAnimation = new Animation('.register')
const welcomeAnimation = new Animation('.welcome')

function RegisterToLogin() {
    const tween = gsap.timeline({ delay: 0.1 })
    registerAnimation.comeOut(tween)
    loginAnimation.comeIn(tween)
  }
  
  function LoginToRegister() {
    const tween = gsap.timeline({ delay: 0.1 })
    loginAnimation.comeOut(tween)
    registerAnimation.comeIn(tween)
  }
  
  function LoginToWelcome() {
    const tween = gsap.timeline({ delay: 0.1 })
    loginAnimation.comeOut(tween)
    welcomeAnimation.comeIn(tween)
  }
  
  function WelcomeToLogin() {
    const tween = gsap.timeline({ delay: 0.1 })
    welcomeAnimation.comeOut(tween)
    loginAnimation.comeIn(tween)
  }

  export {RegisterToLogin, LoginToRegister, LoginToWelcome, WelcomeToLogin}