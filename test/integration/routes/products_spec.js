describe('routes: Products', () => {
    const defaultProduct = {
        name: 'Default product',
        description: 'Default description',
        price: 100
    };


    describe('GET /products', () => {
        it('Should return a list of products', done => {
            // Supertest request
            request
                .get('/products')
                .end((err, res) => {
                expect(res.body[0]).to.eql(defaultProduct);
                done(err);
            });
        });
    });
});