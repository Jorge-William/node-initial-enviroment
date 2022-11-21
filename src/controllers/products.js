class ProductController {
    get(req, res) {
        return res.send(
            [
                {
                    name: 'Default product',
                    description: 'Default description',
                    price: 100
                }
            ]
        )

    }
}

export default ProductController;