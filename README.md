# Promise + Anime.js

Simple wrapper around [Anime.js](https://github.com/juliangarnier/anime), that resolves Promise when animation is complete.


## Install

> Note: this package include animejs as peer dependency, so you must install it manually

```shell
$ npm install -S animejs @exah/promise-animejs
```


## Why?

It can help chain animation, i.e. animate multiple dom nodes in order:

```js
import promiseAnime from '@exah/promise-animejs'

const $nodes = document.querySelectorAll('.class-to-animate')

const animations = Array.from($nodes).reduce(
  (promise, $el) => promise.then(() => 
    promiseAnime({
      targets: $el,
      opacity: [0, 1],
      easing: 'easeOutCirc'
    })
  ),
  Promise.resolve()
)

/* All animations is finished */
animations
  .then(() => console.log('complete'))
```


## Usage

### API

```js
promiseAnime(
  { /* anime options */ }, 
  function (animation) { /* control animation */ }
)
.then(animation => /* animation complete */)
```

### Example

Simply pass [Anime.js options](https://github.com/juliangarnier/anime#api) to `promiseAnime` function.

```js
// before
anime({
  targets: 'div',
  opacity: [0, 1],
  easing: 'easeOutCirc',
  complete(animation) {
    console.log('complete')
  }
})

// after
promiseAnime({
  targets: 'div',
  opacity: [0, 1],
  easing: 'easeOutCirc'
})
.then(animation => console.log('complete'))
``` 


Since wrapper returns Promise, to access animation instance simply pass handler as second argument.

```js
promiseAnime({ /* options */ }, animation => {
  animation.pause() // pause animation
})
.then(animation => console.log('complete'))
```


---
[MIT License](LICENSE.md). © 2017 [John Grishin](https://twitter.com/exah).
