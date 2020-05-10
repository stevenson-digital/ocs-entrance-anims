import { scrollDebounce } from './scrollDebounce'
import { entranceAnimations } from './entranceAnimations'

const ocsEntranceAnims = () => {
  scrollDebounce.init()
  window.addEventListener('resize', entranceAnimations.resize(), false)
}

module.exports.ocsEntranceAnims = ocsEntranceAnims
