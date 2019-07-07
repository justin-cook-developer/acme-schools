/* eslint-disable no-unused-expressions */
'use strict';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../server/app');
const agent = request.agent(app);

const { connection, Student, School } = require('../../server/db/index');

describe('/api/students POST route', async () => {
  before(() => {
    return connection.sync({ force: true });
  });

  let student;
  beforeEach(() => {
    student = {
      firstName: 'Justin',
      lastName: 'Cook',
      email: 'j@gmail.com',
      GPA: 3.5,
    };
  });

  afterEach(() => {
    return Promise.all([
      School.truncate({ cascade: true }),
      Student.truncate({ cascade: true }),
    ]);
  });

  after(() => connection.sync({ force: true }));

  describe('sends back errors with sequelize validation errors', async () => {
    it('expects an `errors` key with value obj', async () => {
      student.firstName = null;

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
    });

    it('expects an error message if `firstName` is `null`', async () => {
      student.firstName = null;

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.firstName).to.exist;
      expect(res.body.errors.firstName).to.equal(`FirstName is required.`);
    });

    it('expects an error message if `firstName` is empty', async () => {
      student.firstName = '';

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.firstName).to.exist;
      expect(res.body.errors.firstName).to.equal(`FirstName is required.`);
    });

    it('expects an error message if `lastName` is `null`', async () => {
      student.lastName = null;

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.lastName).to.exist;
      expect(res.body.errors.lastName).to.equal(`LastName is required.`);
    });

    it('expects an error message if `lastName` is empty', async () => {
      student.lastName = '';

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.lastName).to.exist;
      expect(res.body.errors.lastName).to.equal(`LastName is required.`);
    });

    it('expects an error message if `email` is `null`', async () => {
      student.email = null;

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.email).to.exist;
      expect(res.body.errors.email).to.equal(`Email is required.`);
    });

    it('expects an error message if `email` is empty', async () => {
      student.email = '';

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.email).to.exist;
      expect(res.body.errors.email).to.equal(
        `Email is required. Email must be a valid email address.`
      );
    });

    it('expects an error message if `email` is invalid', async () => {
      student.email = 'notanemail';

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.email).to.exist;
      expect(res.body.errors.email).to.equal(
        `Email must be a valid email address.`
      );
    });

    it('expects an error message if `email` is not unique', async () => {
      await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(201);

      const student2 = { ...student, firstName: 'Jeff', GPA: 3.0 };

      const res = await agent
        .post('/api/students')
        .send(student2)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.email).to.exist;
      expect(res.body.errors.email).to.equal(
        `An account is already registered to this email address.`
      );
    });

    it('expects an error message if `GPA` is `null`', async () => {
      student.GPA = null;

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.GPA).to.exist;
      expect(res.body.errors.GPA).to.equal(`GPA is required.`);
    });

    it('expects an error message if `GPA` is less than `0.0`', async () => {
      student.GPA = -0.1;

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.GPA).to.exist;
      expect(res.body.errors.GPA).to.equal(
        `GPA must be greater than 0.0 and less than 5.0.`
      );
    });

    it('expects an error message if `GPA` is more than `5.0`', async () => {
      student.GPA = 5.1;

      const res = await agent
        .post('/api/students')
        .send(student)
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.be.an.instanceOf(Object);
      expect(res.body.errors).to.exist;
      expect(res.body.errors).to.be.an.instanceOf(Object);
      expect(res.body.errors.GPA).to.exist;
      expect(res.body.errors.GPA).to.equal(
        `GPA must be greater than 0.0 and less than 5.0.`
      );
    });
  });
});
