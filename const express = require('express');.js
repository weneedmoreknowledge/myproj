const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// 상품 데이터 저장용 변수
let productsByCategory = {
    all: [],
    top: [],
    btm: [],
    other: []
};

// 제품 등록 API
app.post('/api/products', (req, res) => {
    const product = req.body;
    productsByCategory.all.push(product);
    productsByCategory[product.category].push(product);
    res.status(201).json(product);
});

// 제품 목록 조회 API
app.get('/api/products', (req, res) => {
    const category = req.query.category;
    if (!category || category === 'all') {
        res.json(productsByCategory.all);
    } else {
        res.json(productsByCategory[category] || []);
    }
});

// 제품 상세 정보 조회 API
app.get('/api/products/:name', (req, res) => {
    const name = req.params.name;
    const product = productsByCategory.all.find(product => product.name === name);
    if (product) {
        res.json(product);
    } else {
        res.status(404).send('Product not found.');
    }
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
