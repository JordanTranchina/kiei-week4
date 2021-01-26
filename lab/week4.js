// Week 4 lab – Similar to last week's lab – but without the help!

// The provided code now goes out to the Internet to get our products data.
// You can visit the provided URL – https://kiei451.com/api/products.json –
// in Chrome to see what the data looks like.

function renderProduct(product) {
  let outputElement = document.querySelector(".products")
  outputElement.insertAdjacentHTML("beforeend",
    `
    <div class="p-4 w-full md:w-1/2 lg:w-1/3">
      <div class="border h-full p-4 flex flex-col">
        <h2 class="text-lg font-bold mb-4">
          ${product.name}
        </h2>
        <div class="mb-4"><img
          src=${product.image}>
        </div>
        <div class="mb-4 text-gray-900">
          ${product.description}
        </div>
        <div class="mt-auto text-purple-500 text-2xl">
          ${product.price}
        </div>
      </div>
    </div>
    `
  )
}
function renderPromotion(promotion) {
  let outputElement = document.querySelector(".products")
  outputElement.insertAdjacentHTML("beforeend",
    `
    <div class="p-4 w-full md:w-1/2 lg:w-1/3">
      <div class="border h-full p-4 flex flex-col">
        <h2 class="text-lg font-bold mb-4">
          ${promotion.type}
        </h2>
        <div class="mb-4 text-gray-900">
          ${promotion.description}
        </div>
      </div>
    </div>
    `
  )
}


async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/products.json')
  let json = await response.json()

  for (let i = 0; i < json.products.length; i++) {
    let product = json.products[i]
    // console.log(product);
    renderProduct(product)
  }

  for (let i = 0; i < json.promotions.length; i++) {
    let promotion = json.promotions[i]
    // console.log(promotion);
    renderPromotion(promotion)
  }

}

window.addEventListener('DOMContentLoaded', pageLoaded)