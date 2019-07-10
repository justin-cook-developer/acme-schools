import React, { Fragment } from 'react';

const CardContent = ({ student, studentSchool }) => {
  return (
    <div className="content">
      <p className="is-size-4">
        {student.firstName} {student.lastName}
      </p>
      <p className="is-size-5">GPA: {student.GPA}</p>

      {studentSchool && (
        <Fragment>
          <figure className="image is-3by1">
            <img src={studentSchool.imageURL} alt="School image" />
          </figure>
          <p className="is-size-5">Attends: {studentSchool.name}</p>
        </Fragment>
      )}
      {!studentSchool && <p className="is-size-5">Attends no school</p>}
    </div>
  );
};

export default CardContent;
