// DOMAIN LAYER
// Has the userRepository as a dependency. The UserService does not know
// nor does it care where the user models came from. This is abstracted away
// by the implementation of the repositories. It just calls the needed repositories
// gets the results and usually applies some business logic on them.

function create(productRepository) {
    async function getAllProducts() {
        const products = await productRepository.getAll();
        return products;
    }

    async function createProduct(product) {
        // TODO: catch possible errors here and rethrow a custom error you defined instead
        await productRepository.add(product);
    }

    return {
        createProduct,
        getAllProducts,
    };
}

module.exports.create = create;
