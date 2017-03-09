# Flexbox + css variables = ❤

Learn flex boxes as is: classes just reflects css-properties!

Super small & easy: only **~3Kb** (minified version).

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
    [.first.last.grow[-fixed].nogrow.noshrink]
    [.self-(flex-start|center|flex-end|stretch|baseline)]  /** align-self **/
    [.center.top.bottom.left.right]  /** margin **/
    
.flex[.grid-(1-12)] /** grid size **/
    > [.col-(1-12)] /** column size */
```

## API docs and live examples
https://ixrock.github.io/flexbox/docs/
