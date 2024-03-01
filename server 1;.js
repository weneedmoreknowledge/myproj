const express = require('express');
const app = express();
const port = 3000;

// 각 카테고리에 해당하는 상품 데이터
const products = {
    all: [
        { name: '티셔츠', category: '상의', description: '면 소재 티셔츠', imageURL: 'tshirt.jpg' },
        { name: '청바지', category: '하의', description: '파란색 청바지', imageURL: 'jeans.jpg' },
        { name: '노트북', category: '기타', description: '빈 노트북', imageURL: 'notebook.jpg' }
    ],
    top: [
        { name: '티셔츠', category: '상의', description: '면 소재 티셔츠', imageURL: 'tshirt.jpg' }
    ],
    btm: [
        { name: '청바지', category: '하의', description: '파란색 청바지', imageURL: 'jeans.jpg' }
    ],
    other: [
        { name: '노트북', category: '기타', description: '빈 노트북', imageURL: 'notebook.jpg' }
    ]
};

// 특정 카테고리의 상품 목록을 반환하는 엔드포인트
app.get('/products/:category', (req, res) => {
    const category = req.params.category;
    const categoryProducts = products[category] || [];
    res.json(categoryProducts);
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
