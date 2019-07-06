const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const Student = require('../../server/db/student');
const School = require('../../server/db/school');
const { connection } = require('../../server/db/connection');

describe(`The 'School' model`, () => {
  // Clear db and recreate tables
  before(() => connection.sync({ force: true }));

  // Create an unsaved student instace
  let school;
  beforeEach(() => {
    school = School.build({
      name: 'Cuesta',
      imageURL: require('./cuestaImageUrl'),
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
    it('includes `id, `name`, and `imageURL` fields', async () => {
      const savedSchool = await school.save();
      // need to check if uuid
      console.log(typeof savedSchool.id);
      // expect(typeof savedSchool.id).to.be.equal('string');
      expect(savedSchool.name).to.equal('Cuesta');
      expect(savedSchool.imageURL).to.equal(require('./cuestaImageUrl'));
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
      school.imageURL = null;

      let result, err;
      try {
        result = await school.save();
      } catch (err) {
        error = err;
      }

      if (err) throw Error('School should have a default imageURL');

      expect(result.imageURL).to.be.equal(
        require('../../server/db/defaultSchoolImageURL')
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

      // this method `setAuthor` automatically exists if you set up the association correctly
      await createdStudent.setSchool(createdSchool);

      const foundSchool = await School.findOne({
        where: { name: 'Cuesta' },
        include: { model: Student },
      });

      console.log(foundSchool.dataValues);

      expect(foundSchool.students).to.exist; // eslint-disable-line no-unused-expressions
      expect(foundSchool.students[0]).to.exist; // eslint-disable-line no-unused-expressions
      expect(foundSchool.students[0].name).to.equal('Justin');
    });
  });
});
