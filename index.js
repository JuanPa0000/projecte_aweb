const body = document.querySelector("body");

const productDetailsCard = document.querySelector(".productDetails");
const infoButtonList = document.getElementsByClassName("infoButton");

for(let i=0; i<infoButtonList.length; i++) {
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