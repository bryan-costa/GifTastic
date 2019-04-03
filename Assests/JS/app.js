//starter code from Quinton in class

// 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=dogs'
let toggle = false

const gifGetter = animal => {
    console.log(animal)
    fetch(`https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${animal}&rating=g`)
        .then(r => r.json())
        .then(r => {
            let { url: animated } = r.data.images.fixed_height
            let { url: still } = r.data.images.fixed_height_still
            document.querySelector('#gifDiv').innerHTML = `
        <img class="gifImg" src="${animated}" alt="${animal}Gif" data-still="${still}" data-animated="${animated}">
      `
        })
        .catch(e => console.error(e))
}

const pausePlay = gif => {
    let { animated, still } = gif.dataset
    toggle = !toggle
    gif.setAttribute('src', toggle ? still : animated)
}

document.addEventListener('click', ({ target }) => {
    switch (target.className) {
        case 'gifGetter':
            gifGetter(target.dataset.animal)
            break
        case 'gifImg':
            pausePlay(target)
            break
    }
})
