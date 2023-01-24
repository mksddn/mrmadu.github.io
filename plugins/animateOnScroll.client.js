import Vue from 'vue'

const animateOnScrollObserver = new IntersectionObserver(
  (entries, animateOnScrollObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter')
        animateOnScrollObserver.unobserve(entry.target)
      }
    })
  }
)

Vue.directive('animate-fromright', {
  bind: el => {
    el.classList.add('before-fromright')
    animateOnScrollObserver.observe(el)
  }
})

Vue.directive('animate-fromdown', {
  bind: el => {
    el.classList.add('before-fromdown')
    animateOnScrollObserver.observe(el)
  }
})

Vue.directive('animate-fadein', {
  bind: el => {
    el.classList.add('before-fadein')
    animateOnScrollObserver.observe(el)
  }
})