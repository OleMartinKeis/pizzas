const baseURL = "http://localhost/flower-power/wordpress/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");
const perPage = document.querySelector(".per-page-selection");

async function getProducts(url){
    const response = await fetch(url);
    const products = await response.json();
    products.forEach(function(product){
        productContainer.innerHTML += `<div class ="product"><h2>${product.name}</h2>
        <div class="product-image" style="background-image:url("${product.images[0].src}") </div>`
    })
}

getProducts(baseURL);

perPage.onchange = function(event) {
    
    const newUrl = baseurl + `?per_page=${event.target.value}`;
    productContainer.innerHTML = "";
    getProducts(newUrl);
}