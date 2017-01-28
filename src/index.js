import anime from 'animejs'

const isFn = el => typeof el === 'function'

export function promiseAnime (options, handleIntance) {
  return new Promise(resolve => {
    const { complete } = options

    const animeInstance = anime({
      ...options,
      complete (animation) {
        if (isFn(complete)) complete(animation)
        resolve(animation)
      }
    })

    if (isFn(handleIntance)) handleIntance(animeInstance)
  })
}

export default promiseAnime
