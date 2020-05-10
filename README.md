# Instillation

`npm i ocs-entrance-anims --save`

# Usage (JS)

```
import { ocsEntranceAnims } from 'ocs-entrance-anims'

ocsEntranceAnims()
```

# Usage (HTML)

```
<div
  class="u-anim-hidden js-entrance-anim"
  data-anim-class="a-fade-in-up"
  data-offset="180"
>
  <p>My content</p>
</div>
```

`data-anim-class` Add your own animation class here
`data-offset` Optional setting, is a px offset from element top to delay the trigger (default 200px)