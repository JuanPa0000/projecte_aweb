const body = document.querySelector("body");

//PRODUCT DETAILS CARD
const productDetailsCard = document.querySelector(".productDetails");
const infoButtonList = document.getElementsByClassName("infoButton");

for(let i=0; i<infoButtonList.length; i++) { // Activar el product details card
    infoButtonList[i].addEventListener("click", () => {

        body.style.overflow = "hidden";
        productDetailsCard.style.display = "flex";
        document.querySelector(".productDetailsBackground").style.display = "flex";

        // Variables de articulos de productos
        const title = document.getElementsByClassName("product-infoContainer-title")[i];
        const price = document.getElementsByClassName("product-infoContainer-price")[i];
        const img = document.getElementsByClassName("product-img")[i];
        const description = document.getElementsByClassName("product-productDescription")[i];

        document.querySelector(".productDetails-title").innerText = title.textContent;
        document.querySelector(".productDetails-img").attributes.src.value = img.attributes.src.value;
        document.querySelector(".productDetails-description").innerText = description.textContent;  
    })
}

const productDetailsCloseButton = document.querySelector(".productDetails-closeButton");
productDetailsCloseButton.addEventListener("click", () => { // Cerrar el product details card
    body.style.overflow="scroll";
    productDetailsCard.style.display="none";
    document.querySelector(".productDetailsBackground").style.display = "none";
})

//CART
//Acutalizar totalPrice
let totalPrice=0
function updateTotalPrice(price) {
    const totalPriceBox = document.querySelector(".cartSection-buyBox-totalPrice");
    if(price==0) {
        totalPriceBox.innerText=0;
    } else {
        totalPrice+=parseInt(price.textContent.slice(1));
        totalPriceBox.innerText=totalPrice;
    }
}

//Cerrar carrito function
const closeCartButton = document.querySelector(".closeCartButton");
const cartSection = document.querySelector(".cartSection");
closeCartButton.addEventListener("click", () => {
    cartSection.style.right = '-30rem';
})

//Abrir carrito function
function openCart() {
    cartSection.style.right = '0';
}

//Añadir al carrito
const addToCartButtons = document.querySelectorAll(".product-cartButton");
for(let i=0; i<addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", () => {
        // Variables de articulos de productos
        const title = document.getElementsByClassName("product-infoContainer-title")[i];
        const price = document.getElementsByClassName("product-infoContainer-price")[i];
        const img = document.getElementsByClassName("product-img")[i];
        const productBox = document.querySelector(".cartSection-productsBox");

        // Guardar en el carrito
        productBox.innerHTML+=`<div class="cartSection-product">
                <img class="cartSection-product-img" src="${img.attributes.src.value}"></img>
                <div class="cartSection-productInformation">
                    <p class="cartSection-product-name">${title.textContent}</p>
                    <p class="cartSection-product-price">${price.textContent}</p>
                    <input type="number" value="1" class="cartSection-product-stock">
                </div>
                <button class="cartSection-deleteProduct-button"><i class="fa-solid fa-xmark"></i></button>
            </div>`;
        
        updateTotalPrice(price);
        openCart();
})}

// Eliminar del carrito
const productBox = document.querySelector(".cartSection-productsBox");

productBox.addEventListener("click", (e) => {
    if (e.target.closest(".cartSection-deleteProduct-button")) {
        const productDiv = e.target.closest(".cartSection-product");
        productDiv.remove();
    }
});


updateTotalPrice(0); //Tener 0 por default al abrir el carrito
document.querySelector(".header-actionMenu-cartButton").addEventListener("click", () => {
    openCart(); // Abrir carrito al tocar el icono del header
})


//MENU RESPONSIVE HEADER

const headerMenuActiveButton = document.querySelector('.headerMenuActiveButton');
const headerResponsiveMenu = document.querySelector(".header-responsiveMenu");
const headerResponsiveMenuCloseButton = document.querySelector(".header-responsiveMenu-closeButton");

//Abrir menu
headerMenuActiveButton.addEventListener("click", () => {
    headerResponsiveMenu.style.display = "flex";
})

//Cerrar Menu
headerResponsiveMenuCloseButton.addEventListener("click", () => {
    headerResponsiveMenu.style.display = "none";
})

