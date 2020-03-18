const supertest = require('supertest');

const app = require('../../../src');

const api = supertest(app);

module.exports = () => {
    it('should return 201 on user creation', async() => {
        const brand = {
            name: 'John',
            logo: 'Louis',
            website: 'gmail.com',
            slug: 'p4ssw0rd',
            verified: 1,
            status: 'Draft',
            countri_id: 1,
        };

        await api
            .post('/api/users')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .send(brand)
            .expect(201);
    });
};