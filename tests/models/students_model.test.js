'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const Student = require('../../server/db/student');
const School = require('../../server/db/school');
const { connection } = require('../../server/db/connection');

describe(`The 'Student' model`, () => {
  // Clear db and recreate tables
  before(() => connection.sync({ force: true }));

  // Create an unsaved student instace
  let student;
  beforeEach(() => {
    student = Student.build({
      firstName: 'Justin',
      lastName: 'Cook',
      email: 'j@gmail.com',
      GPA: 3.5,
    });
  });

  // Empty tables after each spec
  afterEach(() => {
    return Promise.all([
      Student.truncate({ cascade: true }),
      School.truncate({ cascade: true }),
    ]);
  });

  describe('attributes definition', () => {
    it('includes `id, `firstName`, `lastName`, `email`, and `GPA` fields', async () => {
      const savedStudent = await student.save();
      // need to check if uuid
      console.log(typeof savedStudent.id);
      // expect(typeof savedStudent.id).to.be.equal('string');
      expect(savedStudent.firstName).to.equal('Justin');
      expect(savedStudent.lastName).to.equal('Cook');
      expect(savedStudent.email).to.equal('j@gmail.com');
      expect(savedStudent.GPA).to.equal(3.5);
    });

    it('requires `firstName`', async () => {
      student.firstName = null;

      let result, error;
      try {
        result = await student.validate();
      } catch (err) {
        error = err;
      }

      if (result) throw Error('validation should fail when firstName is null');

      student.firstName = '';

      let result2, error2;
      try {
        result2 = await student.validate();
      } catch (err) {
        error2 = err;
      }

      if (result2)
        throw Error('validation should fail when firstName is empty');

      expect(error).to.be.an.instanceOf(Error);
      expect(error2).to.be.an.instanceOf(Error);
    });

    it('requires `lastName`', async () => {
      student.lastName = null;

      let result, error;
      try {
        result = await student.validate();
      } catch (err) {
        error = err;
      }

      if (result) throw Error('validation should fail when lastName is null');

      student.lastName = '';

      let result2, error2;
      try {
        result2 = await student.validate();
      } catch (err) {
        error2 = err;
      }

      if (result2) throw Error('validation should fail when lastName is empty');

      expect(error).to.be.an.instanceOf(Error);
      expect(error2).to.be.an.instanceOf(Error);
    });

    it('requires `email`', async () => {
      student.email = null;

      let result, error;
      try {
        result = await student.validate();
      } catch (err) {
        error = err;
      }

      if (result) throw Error('validation should fail when email is null');

      student.email = '';

      let result2, error2;
      try {
        result2 = await student.validate();
      } catch (err) {
        error2 = err;
      }

      if (result2)
        throw Error('validation should fail when email is an empty string');

      expect(error).to.be.an.instanceOf(Error);
      expect(error2).to.be.an.instanceOf(Error);
    });

    it('requires `email` to be a valid email', async () => {
      student.email = 'invalidEmail';

      let result, error;
      try {
        result = await student.validate();
      } catch (err) {
        error = err;
      }

      if (result)
        throw Error('validation should fail when email is not a valid email');

      expect(error).to.be.an.instanceOf(Error);
    });

    it('requires `email` to be unique', async () => {
      await student.save();

      const student2 = Student.build({
        firstName: 'J',
        lastName: 'C',
        email: 'j@gmail.com',
        GPA: 3.4,
      });

      let result, error;
      try {
        result = await student2.save();
      } catch (err) {
        error = err;
      }

      if (result) throw Error('validation should fail if email is not unique');

      expect(error).to.be.an.instanceOf(Error);
    });

    it('requires `GPA`', async () => {
      student.GPA = null;

      let result, error;
      try {
        result = await student.validate();
      } catch (err) {
        error = err;
      }

      if (result) throw Error('validation should fail when GPA is null');

      expect(error).to.be.an.instanceOf(Error);
    });

    it('requires `GPA` to be between 0.0 and 5.0', async () => {
      student.GPA = -0.1;

      let result, error;
      try {
        result = await student.validate();
      } catch (err) {
        error = err;
      }

      if (result)
        throw Error('validation should fail when GPA is less than 0.0');

      student.GPA = 5.1;

      let result2, error2;
      try {
        result2 = await student.validate();
      } catch (err) {
        error = err;
      }

      if (result2)
        throw Error('validation should fail when GPA is more than 5.0');

      expect(error).to.be.an.instanceOf(Error);
      expect(error2).to.be.an.instanceOf(Error);
    });
  });

  describe('associations', () => {
    it("belongs to a user, who is stored as the article's `author`", async () => {
      const creatingStudent = Student.create({
        firstName: 'Justin',
        lastName: 'Cook',
        email: 'j@gmail.com',
        GPA: 3.5,
      });
      const creatingSchool = School.create({ name: 'Cuesta' });

      const [createdStudent, createdSchool] = await Promise.all([
        creatingStudent,
        creatingSchool,
      ]);

      // this method `setAuthor` automatically exists if you set up the association correctly
      await createdStudent.setSchool(createdSchool);

      const foundStudent = await Student.findOne({
        where: { name: 'Justin' },
        include: { model: School },
      });

      expect(foundStudent.school).to.exist; // eslint-disable-line no-unused-expressions
      expect(foundStudent.school.name).to.equal('Cuesta');
    });
  });
});
