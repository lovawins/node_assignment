
const lowdb = require("lowdb");
const fileSync = require("lowdb/adapters/FileSync");
const adapter = new fileSync("db.json");
const db = lowdb(adapter);

// GET PRODUCTS
const getProducts = async () =>   {
    return await db.get("products");
    };

// GET CART
const getCart = async () =>   {
    return await db.get("cart");
    };

// // ADD TO CART
// const addToCart = async test => {
//     // const response = await db

//     return response;
//   };

  // REMOVE FROM CART
  const removeFromCart = async () => {
  }


 //check if the product exists 
 const hasProduct =  async id => {
    return await db
    .get('products')
    .find({id: id})
    .value();
}

  // check if the product is already in the cart
  const hasProductInCart =  async id => {
      return await db
      .get('cart')
      .find({id: id})
      .value();
  }

module.exports = {
    getProducts,
    // addToCart,
    getCart,
    removeFromCart,
    hasProductInCart,
    hasProduct
};