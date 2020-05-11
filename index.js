import { scrollDebounce } from './scrollDebounce'
import { entranceAnimations } from './entranceAnimations'

const ocsEntranceAnims = () => {
  entranceAnimations.init()
  scrollDebounce.init()
  window.addEventListener('resize', entranceAnimations.resize)
}

export { ocsEntranceAnims }
