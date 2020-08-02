let pressedKeys = []
const easterEgg = 'vainco'

window.addEventListener('keyup', (e) => {
    //push the key to the array
    pressedKeys.push(e.key)
    //we want our array to be fixed size as our easterEgg and the old letters of array will be removed
    pressedKeys.splice(-easterEgg.length - 1, pressedKeys.length - easterEgg.length)
    if (pressedKeys.join('') === easterEgg) {
        cornify_add();
    }
    console.log(pressedKeys)
})