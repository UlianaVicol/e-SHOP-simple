class Product {
  constructor(id,name,image,price) {
      this.id    = id
      this.name  = name
      this.image = image
      this.price = price
  }

  render() {

      let html = `
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card h-100" >
                <img src="${this.image}" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column justify-content-end">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">Price: ${this.price.amount} ${this.price.currency}</p>
                    <a href="#" data-product-id="${this.id}" class="btn btn-primary add-to-cart">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
      return html
  }
}