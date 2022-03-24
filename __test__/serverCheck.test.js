import {app} from '../src/server/app'; // Link to your server file
//const app = require('../src/server/app')
const supertest = require('supertest')
const request = supertest(app) 
describe("Testing the server", () => {
    test("Testing that the request return success code 200", async() => {
        const res = await request.get('/');
        expect(res.body.msg).toBe("server test");
    })
});