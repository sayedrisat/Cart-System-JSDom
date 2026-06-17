let popup = document.querySelector(".popup")
let closetxt = document.querySelector(".closetxt")
let createbtn = document.querySelector(".createbtn")
let form = document.querySelector(".formFill")
let cardBox = document.querySelector(".cardsbox")

let productsArr = JSON.parse(localStorage.getItem("products")) || [];


let updateIndex = null;

let Ui = () => {
    cardBox.innerHTML = "";

    productsArr.forEach(element => {
        cardBox.innerHTML += `<div class="card">
                <div class="image">
                    <img src="${element.productImg}" alt="">
                </div>
                <div class="Details">
                    <h3>Name: ${element.productName}</h3>
                    <h4><span>Price:</span> ${element.productPrice} ৳</h4>
                </div>
                <div class="actions">
                    <button onclick="editMe('${element.productName}')" class="edit acbtn">Edit</button>
                    <button onclick="deleteMe('${element.productName}')" class="delete acbtn">Delete</button>
                </div>
            </div>`
    });

}

Ui();

function saveToLocal() {
    localStorage.setItem("products", JSON.stringify(productsArr));
}

closetxt.addEventListener("click", () => {
    popup.style.display = "none";
})

createbtn.addEventListener("click", () => {
    popup.style.display = "flex";
})

form.addEventListener("submit", (ele) => {
    ele.preventDefault()
    popup.style.display = "none";

    let productName = ele.target[0].value.trim()
    let productPrice = ele.target[1].value
    let productImg = ele.target[2].value

    if(productName.trim() === "" || productPrice === "" || productImg === ""){
        alert("Please fill the all feild")
        return;
    }

    let obj = {
        productName,
        productPrice,
        productImg,
    }

    if(updateIndex !== null){
       productsArr[updateIndex] = obj
    }else{
        productsArr.push(obj)

    }
    saveToLocal();
    Ui()

    form.reset()
    console.log(productsArr)
})


// edit button work

editMe = (name) => {
    popup.style.display = "flex";
    
    let targetP = productsArr.find((elem) => elem.productName === name)
    updateIndex = productsArr.findIndex((elem) => elem.productName === name)

    form[0].value = targetP.productName
    form[1].value = targetP.productPrice
    form[2].value = targetP.productImg

}

// delete work

deleteMe = (Dname) => {
    let deleteIndex = productsArr.findIndex((elem) => elem.productName === Dname)
    productsArr.splice(deleteIndex, 1)
    saveToLocal();
    Ui();
}

