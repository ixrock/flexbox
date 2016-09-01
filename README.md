# Flexbox + autoprefixer = ❤

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
    [.grid(2-12)] /** flex-basis **/
    [.xs(2-12)][.sm(2-12)][.md(2-12)][.lg(2-12)][.xl(2-12)] /** breakpoints */
.flex > .box
    [.first.last.grow.noshrink]
    [.flex-start.center.flex-end.stretch.baseline]  /** align-self **/
    [.auto[.top.bottom.left.right][-left-right-top-bottom]]  /** margin **/
    [.col(2-12)] /** flex-basis **/
    [.xs(0,2-12)][.sm(0,2-12)][.md(0,2-12)][.lg(0,2-12)][.xl(0,2-12)] /** breakpoints */
```

## API docs and live examples
https://ixrock.github.io/flexbox/docs/
