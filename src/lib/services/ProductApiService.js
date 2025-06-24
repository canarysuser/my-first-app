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
        //[10,20,30,40] 
        //reduce((sum, no)=> sum + no, initialValue: 0)
        //(sum:0, no:10) => 0 + 10 
        //(sum:10, no:20) => 10 + 20
        //(sum:30, no:30) => 30 + 30
        //(sum:60, no:40) => 60 + 40
        //returns 60;
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
