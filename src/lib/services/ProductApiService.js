var productsUrl = "http://localhost:5000/products";
export async function getProducts() {
    let response = await fetch(productsUrl);
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    let data = await response.json();
    return data;
}
export function getProductById(id) {
    return fetch(`${productsUrl}/?productId=${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok " + response.statusText);
            }
            return response.json();
        }).then(data => {
            console.log("Product fetched by ID: ", data);
            return data[0]
});
}

export async function upsertProduct(product) {
   
    let headers = {
        'Content-Type': 'application/json'
    }
    let method = 'POST'; //inserting a new product
    let url=productsUrl;
    if(product.productId>0) {
        method="PUT"; //updating an existing product
        url=`${productsUrl}/${product.productId}`;
    } else {
        let items = await getProducts();
        let lastId = items.reduce((max, item) => item.productId > max ? item.productId : max, 0);
        console.log(lastId)
        product.productId = lastId + 1; //assign a new ID
        product.id = lastId + 1; //assign a new ID
    }
    let body = JSON.stringify(product);
    let response = await fetch(url, {
            method: method,
            headers: headers,
            body: body
        });
    if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
    }
    let data= await response.json();
    return data;
}
