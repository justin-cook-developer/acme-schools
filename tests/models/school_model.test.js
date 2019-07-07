const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const { School, Student, connection } = require('../../server/db/index');

describe(`The 'School' model`, () => {
  // Clear db and recreate tables
  before(() => connection.sync({ force: true }));

  // Create an unsaved student instace
  let school;
  beforeEach(() => {
    school = School.build({
      name: 'Cuesta',
      imageURL:
        'https://upload.wikimedia.org/wikipedia/en/a/a1/Cuestacollege.png',
    });
  });

  // Empty tables after each spec
  afterEach(() => {
    return Promise.all([
      Student.truncate({ cascade: true }),
      School.truncate({ cascade: true }),
    ]);
  });

  after(() => connection.sync({ force: true }));

  describe('attributes definition', () => {
    it('includes `id`, `name`, and `imageURL` fields', async () => {
      const savedSchool = await school.save();
      expect(typeof savedSchool.id).to.be.equal('string');
      expect(savedSchool.name).to.equal('Cuesta');
      expect(savedSchool.imageURL).to.equal(
        'https://upload.wikimedia.org/wikipedia/en/a/a1/Cuestacollege.png'
      );
    });

    it('requires `name`', async () => {
      school.name = null;

      let result, error;
      try {
        result = await school.validate();
      } catch (err) {
        error = err;
      }

      if (result) throw Error('validation should fail when name is null');

      school.name = '';

      let result2, error2;
      try {
        result2 = await school.validate();
      } catch (err) {
        error2 = err;
      }

      if (result2) throw Error('validation should fail when name is empty');

      expect(error).to.be.an.instanceOf(Error);
      expect(error2).to.be.an.instanceOf(Error);
    });

    it('requires `imageURL`', async () => {
      school.imageURL = null;

      let result, error;
      try {
        result = await school.validate();
      } catch (err) {
        error = err;
      }

      if (result) throw Error('validation should fail when imageURL is null');

      school.imageURL = '';

      let result2, error2;
      try {
        result2 = await school.validate();
      } catch (err) {
        error2 = err;
      }

      if (result2) throw Error('validation should fail when imageURL is empty');

      expect(error).to.be.an.instanceOf(Error);
      expect(error2).to.be.an.instanceOf(Error);
    });

    it('provides a default `imageURL`', async () => {
      let result, err;
      try {
        result = await School.create({
          name: 'Cuesta',
        });
      } catch (error) {
        err = error;
      }

      if (err) throw Error('School should have a default imageURL');

      expect(result.imageURL).to.be.equal(
        `http://beaconenglishdayschool.com/img/school-default.jpg`
      );
    });

    it('requires `imageURL` to be a valid url', async () => {
      school.imageURL = 'invalidimageURL';

      let result, error;
      try {
        result = await school.validate();
      } catch (err) {
        error = err;
      }

      if (result)
        throw Error(
          'validation should fail when imageURL is not a valid imageURL'
        );

      expect(error).to.be.an.instanceOf(Error);
    });
  });

  describe('associations', () => {
    it('has many students who belong to it as `students`', async () => {
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

      await createdStudent.setSchool(createdSchool);

      const foundSchool = await School.findOne({
        where: { name: 'Cuesta' },
        include: { model: Student },
      });

      expect(foundSchool.students).to.exist; // eslint-disable-line no-unused-expressions
      expect(foundSchool.students[0]).to.exist; // eslint-disable-line no-unused-expressions
      expect(foundSchool.students[0].firstName).to.equal('Justin');
    });
  });
});
