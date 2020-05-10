export { entranceAnimations }

const $ = jQuery.noConflict()
const $window = $(window)
let scrollZones = {}

const entranceAnimations = {
  init() {
    if ($('.js-entrance-anim').length && $window.width() > 1024)
      this.getScrollZones()
  },

  resize() {
    if ($('.js-entrance-anim').length && $window.width() > 1024)
      this.getScrollZones()
  },

  getCssAsInt($el, attr) {
    const int = Math.round(parseInt($el.css(attr).replace('px', '')))
    return int
  },

  getScrollZones() {
    // Flush scrollZones so that on resize the data is refreshed instead of added to
    scrollZones = {}

    let trigger = $('.js-entrance-anim')

    trigger.each(function(index, val) {
      const $this = $(this)
      const marginTop = entranceAnimations.getCssAsInt($this, 'margin-top')
      const paddingTop = entranceAnimations.getCssAsInt($this, 'padding-top')
      const defaultOffset = marginTop + paddingTop + 200
      const offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : defaultOffset

      scrollZones[index] = {
        el: $this,
        top: Math.round($this.offset().top + parseInt(offset)),
        animClass: $this.attr('data-anim-class'),
        triggered: false
      }
    })
  },

  triggerAnimations(currentScrollY) {
    if ($('.js-entrance-anim').length < 1 || window.innerWidth <= 1024)
      return
    
    $.each(scrollZones, function(index, val) {
      const thisZone = scrollZones[index]
      
      if (currentScrollY >= (thisZone.top - $window.height()) && !thisZone.triggered) {
        // Trigger animation when top of trigger zones comes in at the bottom of the viewport
        thisZone.el.removeClass('u-anim-hidden').addClass(thisZone.animClass)
        thisZone.triggered = true
      }
    })
  }
}
