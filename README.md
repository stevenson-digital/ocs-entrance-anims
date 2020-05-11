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

# Usage (SCSS)

You must add this class rule to your base:
```
.u-anim-hidden {
  visibility: hidden;
  
  @media (max-width: 1024px) {
    visibility: visible;
  }
}
```

Use custom scss animation classes to acheive your desired entrances. These should not apply below 1024px for mobile UX and performance. The opacity should always start at 0 and then be forced back to 1 for below 1024px. An example class can be seen below:

```
.a-fade-in-up {
  opacity: 0;
  animation: fadeInUp 500ms 0s cubic-bezier(0.19,1,0.22,1) forwards;
	
  @media (max-width: 1024) {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0,30px,0);
  }
  100% {
    opacity: 1;
    transform: none
  }
}
```
