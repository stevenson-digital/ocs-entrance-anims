export { entranceAnimations }

const $ = jQuery.noConflict()
let scrollZones = {}

const entranceAnimations = {
  init() {
    if (document.querySelector('.js-entrance-anim') && window.innerWidth > 1024)
      entranceAnimations.getScrollZones()
  },

  resize() {
    if (document.querySelector('.js-entrance-anim') && window.innerWidth > 1024)
      entranceAnimations.getScrollZones()
  },

  getCssAsInt($el, attr) {
    const styles = getComputedStyle($el)
    const int = Math.round(parseInt(styles[attr].replace('px', '')))
    return int
  },

  getScrollZones() {
    // Flush scrollZones so that on resize the data is refreshed instead of added to
    scrollZones = {}

    let triggers = document.querySelectorAll('.js-entrance-anim')

    triggers.forEach(($trigger, index) => {
      const marginTop = entranceAnimations.getCssAsInt($trigger, 'margin-top')
      const paddingTop = entranceAnimations.getCssAsInt($trigger, 'padding-top')
      const defaultOffset = marginTop + paddingTop + 200
      const offset = ($trigger.getAttribute('data-offset')) ? $trigger.getAttribute('data-offset') : defaultOffset

      scrollZones[index] = {
        el: $trigger,
        top: Math.round($trigger.offsetTop + parseInt(offset)),
        animClass: $trigger.getAttribute('data-anim-class'),
        triggered: false
      }
    })
  },

  triggerAnimations(currentScrollY) {
    if ($('.js-entrance-anim').length < 1 || window.innerWidth <= 1024)
      return
    
    $.each(scrollZones, function(index, val) {
      const thisZone = scrollZones[index]
      
      if (currentScrollY >= (thisZone.top - window.innerHeight) && !thisZone.triggered) {
        // Trigger animation when top of trigger zones comes in at the bottom of the viewport
        thisZone.el.removeClass('u-anim-hidden').addClass(thisZone.animClass)
        thisZone.triggered = true
      }
    })
  }
}
