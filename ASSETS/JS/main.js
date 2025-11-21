// --- Productos ---
const products = [
    {
        id: 1,
        name: "Dark Ritual",
        desc: "Instantaneo, obtiene 3 de mana negro",
        img: "ASSETS/img/mmq-129-dark-ritual.jpg"
    },
    {
        id: 2,
        name: "Black Lotus",
        desc: "La carta más icónica de Magic.",
        img: "ASSETS/img/BlackLotus__90485.jpg"
    },
    {
        id: 3,
        name: "Iroh Grand Lotus",
        desc: "Usa al tio más querido de los monos animados para ganar",
        img: "ASSETS/img/IrohGrandLotus349__39310.jpg"
    }
];

// DOM
const productList = document.getElementById("product-list");
const homeSection = document.getElementById("home-section");
const detailSection = document.getElementById("detail-section");
const cartSection = document.getElementById("cart-section");

const detailImg = document.getElementById("detail-img");
const detailName = document.getElementById("detail-name");
const detailDesc = document.getElementById("detail-desc");

let cartCount = 0;

// Renderizar productos
function renderProducts() {
    productList.innerHTML = "";

    products.forEach(p => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-4 mb-3";

        col.innerHTML = `
            <div class="card card-product p-2">
                <img src="${p.img}" class="card-img-top" alt="${p.name}">
                <div class="card-body">
                    <h5 class="card-title">${p.name}</h5>
                    <p class="card-text">${p.desc}</p>
                    <button class="btn btn-primary w-100" onclick="showDetail(${p.id})">
                        Ver más
                    </button>
                </div>
            </div>
        `;

        productList.appendChild(col);
    });
}

window.showDetail = function(id) {
    const p = products.find(prod => prod.id === id);

    detailImg.src = p.img;
    detailName.textContent = p.name;
    detailDesc.textContent = p.desc;

    homeSection.classList.add("d-none");
    detailSection.classList.remove("d-none");
};

// Volver
document.getElementById("back-btn").onclick = () => {
    detailSection.classList.add("d-none");
    homeSection.classList.remove("d-none");
};

// AGREGAR AL CARRITO
document.getElementById("add-cart-btn").onclick = () => {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
};

// Iniciar
renderProducts();
