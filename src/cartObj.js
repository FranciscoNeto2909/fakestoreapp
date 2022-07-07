export let cart = []

export function setToCart (elem) {
    if (!cart.includes(elem)) {
        cart.push(elem)
    }
}
export function remToCart(elem) {
    cart = cart.filter(prod => prod !== elem)
}