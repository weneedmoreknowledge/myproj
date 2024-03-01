// 예제 상품 데이터
const products = [
    { id: 1, name: "casual brand product ", price : 7800 },
    { id: 2, name: "street brand product", price: 3870 },
    { id: 3, name: "minimal brand product", price: 5327 }
];

// 상품 목록을 생성하는 함수
function renderProducts() {
    const storeElement = document.getElementById('store');
    storeElement.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        storeElement.appendChild(productElement);
    });
}

// 장바구니에 상품 추가하는 함수
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // 여기에 장바구니에 상품을 추가하는 로직을 추가합니다.
        console.log(`Added ${product.name} to cart.`);
    }
}

// 페이지 로드 시 상품 목록을 렌더링
window.onload = function() {
    renderProducts();
};

