class Restaurant {
  #orders = [];

  constructor(name, domain) {
    [this.name, this.domain] = [name, domain];
    this.catalog = ['shrimp', 'fish', 'rice', 'noodles', 'turkey'];
  }

  placeOrder(items, customer) {
    const _ = new Order(items, customer);
    this.#orders.push(_);
    return _;
  }

  processOrders() {
    for (const order of this.#orders) {
      order.status = 'delivered';
    }
  }
  removeFromCatalog(foodName){

  }
  addToCatalog(foodName,price){

  }
}
class Food{
    constructor(name,price){
        [this.name,this.price]=[name,price]
    }
}
class Customer {
  #orders = [];

  #cart = [];

  constructor(name, dateJoined, restaurant) {
    [this.name, this.dateJoined, this.restaurant] = [name, dateJoined, restaurant];
    this.cart = [];
    this.latestOrder = undefined;
  }

  addToCart(index) {
    this.#cart.push(this.restaurant.catalog[index]);
  }

  submitOrder() {
    const _ = this.restaurant.placeOrder(this.cart, this);
    this.#orders.push(_);
    this.latestOrder = _;
    this.cart = [];
  }

  getCart() {
    return [...this.#cart];
  }
}

class Order {
  constructor(items, customer) {
    [this.items, this.customer] = [items, customer];
    this.order_num = `${Math.random() * 1000000}`.split('.')[0];
    this.status = 'pending';
  }
}

const theBestBuffet = new Restaurant('theBestBuffet', 'theBB.com');

const rachel = new Customer('rachel', 'today', theBestBuffet);

theBestBuffet.catalog.forEach((item, index) => rachel.addToCart(index));

console.log(rachel.getCart());

rachel.submitOrder();

theBestBuffet.processOrders();

console.log(rachel.latestOrder.status);

class Recursive{
    constructor(){
        console.log('hi')
        this.rec = new Recursive()
    }
}
new Recursive()