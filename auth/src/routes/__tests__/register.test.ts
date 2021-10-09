import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
    return request(app)
        .post('api/users/register')
        .send({
            email: 'test@test.com',
            password: 'p2ssw0rd'
        })
        .expect(201);
});

it('returns a 400 on invalid email', async () => {
    return request(app)
        .post('api/users/register')
        .send({
            email: 'test23est.com',
            password: 'p2ssw0rd'
        })
        .expect(400);
});

it('returns a 400 on invalid password', async () => {
    return request(app)
        .post('api/users/register')
        .send({
            email: 'test23est.com',
            password: '123'
        })
        .expect(400);
});

it('returns a 400 with missing email and password', async () => {
    return request(app)
        .post('api/users/register')
        .send({
            email: '',
            password: ''
        })
        .expect(400);
});

it (' No duplicate emails', async () => {
    await request(app)
        .post('/api/users/register')
        .send({
            email: "test@test.com",
            password: "passsssword"
        })
        .expect(201);

    await request(app)
        .post('/api/users/register')
        .send({
            email: "test@test.com",
            password: "passsssword"
    })
    .expect(400);
});

it('sets a cookie after a signup is succesful', async () => {
    const response = await request(app)
        .post('/api/users/register')
        .send({
            email: "test@test.com",
            password: "passsssword"
        })
        .expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();
});