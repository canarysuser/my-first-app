import { Product } from "../definitions";

const products=[
   {productId: 101, productName: "Chai", unitPrice: 18.0, unitsInStock: 89, categoryId: 1, discontinued: true},
    {productId: 102, productName: "Coffee", unitPrice: 28.0, unitsInStock: 79, categoryId: 2, discontinued: false},
    {productId: 103, productName: "Biscuits", unitPrice: 38.0, unitsInStock: 69, categoryId: 3, discontinued: true},
    {productId: 104, productName: "Snacks", unitPrice: 48.0, unitsInStock: 59, categoryId: 2, discontinued: false},
    {productId: 105, productName: "Sweets", unitPrice: 58.0, unitsInStock: 49, categoryId: 1, discontinued: true}
    //new Product(101, "Chai", 18.0, 89, 1, true),
]

export function getProducts() {
    return products;
}
export function getProductById(id) {
    return products.find(p => p.productId === id);
}

export function updateProduct(product) {
    const index = products.findIndex(p => p.productId === product.productId);
    if (index !== -1) {
       products.splice(index, 1, product);
     
    }
    return products;
}