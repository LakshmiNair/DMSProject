// @flow

/**
 * This is the app Model it is decoupled from 
 * the Entities used for the databse
 */
class Product {


    constructor(productid, productname, price, productdescription) {
        this.productid = productid;
        this.productname = productname;
        this.price = price;
        this.productdescription = productdescription;
    }
}

module.exports = Product;
