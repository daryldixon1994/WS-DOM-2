let incBtns = document.querySelectorAll(".plus-btn");
let decBtns = document.querySelectorAll(".minus-btn");
let delBtns = document.querySelectorAll(".fa-trash-alt");
let favBtns = document.querySelectorAll(".fa-heart");

//Increase and decrease quantity
for (let i = 0; i < incBtns.length; i++) {
    incBtns[i].addEventListener("click", function () {
        incBtns[i].nextElementSibling.innerHTML++;
        Total();
    });
    decBtns[i].addEventListener("click", function () {
        if (decBtns[i].previousElementSibling.innerHTML > 0) {
            decBtns[i].previousElementSibling.innerHTML--;
        }
        Total();
    });
}
//Delete Card
for (let delBtn of delBtns) {
    delBtn.addEventListener("click", function () {
        delBtn.parentElement.parentElement.parentElement.remove();
        Total();
    });
}

//Add to favourite

for (let favBtn of favBtns) {
    // let test = false;
    favBtn.addEventListener("click", function () {
        // if (!test) {
        //     favBtn.style.color = "red";
        //     test = true;
        // } else {
        //     favBtn.style.color = "black";
        //     test = false;
        // }
        favBtn.classList.toggle("toggleHeart");
    });
}

function Total() {
    let itemPrices = document.getElementsByClassName("unit-price");
    let itemQties = document.getElementsByClassName("qte");
    let totalPrice = document.querySelector(".total-price");
    let total = 0;
    for (let i = 0; i < itemPrices.length; i++) {
        total += itemPrices[i].innerHTML * itemQties[i].innerHTML;
    }
    return (totalPrice.innerHTML = total);
}
