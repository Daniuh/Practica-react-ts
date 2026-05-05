const ironman = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }
}

//const spiderman = {...ironman};

const spiderman = structuredClone(ironman);

spiderman.firstName = 'Peter';
spiderman.lastName  = 'Parker';
spiderman.age       = 22;


console.log(ironman, spiderman);

//Practica

type Product = {
    id: number,
    name: string,
    price: number,
    stock: number
}

const product1: Product = {
    id: 6,
    name: 'Galletas',
    price: 99,
    stock: 3
}
 
const product2: Product = {
    id: 8,
    name: 'Chocolate',
    price: 80,
    stock: 5
}

type Order = {
    id: number,
    products: Product[]
}

const order1: Order = {
    id: 3,
    products: [{ id: 1, name: 'Tostadas', price: 16, stock: 5 },
        { id: 2, name: 'Pollo', price: 100, stock: 6 },
        { id: 3, name: 'Arroz', price: 150, stock: 4 },
    ]
}

function calculateTotal(order: Order): number {
    let total: number = 0;
    const discount: number = 20;
    order.products.forEach(element => {
        total += element.price * element.stock;
    });
    if(total > 200) {
           total = total - (total * (discount / 100));
    }  

    return total;
}

console.log(calculateTotal(order1));

function productsExpensive(product: Product[]): Product[] {
    return product.filter(p => p.price > 100);
}

console.log(productsExpensive(order1.products));

function thereStock(product: Product): boolean {
    return product.stock > 0;
}

console.log(thereStock(product2));

function addProduct(order: Order, product: Product): Order {
    return {
        ...order,
        products: [...order.products, product]
    };
}

console.log(addProduct(order1, product1));

function productMoreExpensive(product: Product[]): Product | null {
    if(product.length ===0 ) return null;
    let mostExpansive = product[0];

    product.forEach(element => {
        if(element.price > mostExpansive.price){
            mostExpansive = element ;
        }
    });

    return mostExpansive;
}

console.log(productMoreExpensive(order1.products));


