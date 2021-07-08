const catalog = [
    new Product(1, "Skate", "img/skate-prod.jpg", {
        amount: 50,
        currency: "MDL"
    }),
    new Product(2, "Skate", "img/skate-prod.jpg", {
        amount: 50,
        currency: "MDL"
    }),
    new Product(3, "Skate", "img/skate-prod.jpg", {
        amount: 50,
        currency: "MDL"
    })
]

const renderCatalog = (rootID) => {
    let root = document.getElementById(rootID)
    root.innerHTML = ``
    catalog.forEach(product => root.innerHTML +=product.render())
    let btns = Array.from(document.querySelectorAll(`.add-to-cart`))
    btns.forEach(btn=>btn.addEventListener(`click`,cart.inCartProducts.bind(cart)))
}
