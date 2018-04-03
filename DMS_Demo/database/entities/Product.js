const Sequelize = require('sequelize');
const ProductModel = require('../../models/Product');

module.exports = (sequelize) => {
    const Product = sequelize.define('Products', {
        productid: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        productname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.DECIMAL,
            validate: { min: 0 },
        },
        productdescription: {
            type: Sequelize.TEXT
        }
    });

    // Map to application model so we don't have tight coupling 
    // throughout the app with the db implemenation
    Product.prototype.toProductModel = function toProductModel() {
        return new ProductModel(this.productid, this.productname, this.price,this.productdescription);
    };

    return Product;
};

