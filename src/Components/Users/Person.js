import React from 'react';

import '../../styles/Person.scss';

// I concatenate the id with the first name because the API was returning same values
export const Person = ({image , firstName, lastName, onPress, person, userSelected, id}) => (
  <div className={userSelected === id ?
    "person-item person-item__active":"person-item"}
       onClick={() => onPress(person, id)}>
    <img src={image}
         alt="Person" className="img-thumbnail rounded"/>
    <label>{firstName} {lastName}</label>
  </div>
);

