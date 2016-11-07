# Flexbox + css variables = ❤

Learn flex boxes as is: classes just reflects css-properties!

## Install
`npm install flex.box --save`

## Quick cheatsheet
```css
.flex
    [.inline.auto.column.reverse.wrap.center.fullsize.gaps]
    [.justify-(flex-start|center|flex-end|space-around|space-between)] /** justify-content **/
    [.align-(flex-start|center|flex-end|stretch|baseline)] /** align-items **/
    [.content-(flex-start|center|flex-end|space-around|space-between|stretch)] /** align-content **/

.flex > .box
    [.first.last.grow.nogrow.noshrink]
    [.self-(flex-start|center|flex-end|stretch|baseline)]  /** align-self **/
    [.center.top.bottom.left.right]  /** margin **/
    
.flex[.grid-(1-12).(xl|lg|md|sm|xs)(1-12)] /** grids **/
    [.col-(1-12).(xl|lg|md|sm|xs)(1-12)-(hidden|visible)]
    [.gaps-wrapper > .col-*]
```

## API docs and live examples
https://ixrock.github.io/flexbox/docs/
