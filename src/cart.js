class Cart {
  constructor(id) {
      this.id = id
      this.items = []
  }

  render(rootID) {
      let root = document.getElementById(rootID)
      root.innerHTML = ``

      let count = this.items.length
      let li = ``
      this.items.forEach(item=>{
        li += `
        <img src="${item.image}" class="card-img-top" alt="...">
        <li><a class="dropdown-item" href="#">${item.name}</a>
        </li>
        
       `
      })
        let html = `
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${count?` 
            <i class="bi bi-cart4 icon1"></i><span class="badge"><span>${count}</span></span>`:`<i class="bi bi-cart4 icon1"></i><span class="badge">0<span></span></span>`}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            ${li}
          </ul>
         </li>
        </ul>
        `
        root.innerHTML = html
    }
    inCartProducts(e) {
      this.items.push(catalog.find(item => item.id == e.target.dataset.productId))
      this.render("shopCart")
      
  }
} 