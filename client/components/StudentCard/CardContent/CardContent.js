import React, { Fragment } from 'react';

const defualtImgage = `https://secure.img2-fg.wfcdn.com/im/38890190/resize-h800-w800%5Ecompr-r85/4574/45742247/24+Piece+Beer+Pong+Set.jpg`;

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
      {!studentSchool && (
        <Fragment>
          <figure className="image is-3by1">
            <img src={defualtImgage} alt="School image" />
          </figure>
          <p className="is-size-5">Attends: No School</p>
        </Fragment>
      )}
    </div>
  );
};

export default CardContent;
