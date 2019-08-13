// Object Property Shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
    name, // this one
    age: userAge,
    location: 'Philadelphia'
}

console.log(user);

//Object destructuring 

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.5
}

// const label = product.label;
// const stock = product.stock;

// const {label:productLabel, stock, rating = 5} =  product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, {label, stock}) =>{
    //const {label} = myProduct;
    console.log(type, label, stock);
}

transaction('order', product)