import React from 'react';

import '../../../styles/UserCard.scss';

export const UserCard = ({photo , firstName, lastName, phone, email}) => (
  <div className="user-card">
    <div className="card-cover" >
      <svg id="svg-filter">
        <filter id="svg-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
        </filter>
      </svg>
      <img src={photo}
           alt="Person Selected" className="background"/>
      <div className="person-identifier">
        <img src={photo}
             alt="Person Selected" className="img-thumbnail thumbnail "/>
        <label className="name-cover">{firstName} {lastName}</label>
        <span className="type-cover">Student</span>
      </div>
    </div>
    <div className="card-description">
      <div className="mt-4 mx-4">
        <label className="label-card">Short Bio</label>
        <span className="text-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eius, illum, totam? Alias architecto aut autem consectetur,
                dolores excepturi exercitationem explicabo harum in,
                laudantium libero maxime, nulla odit quia ullam veniam.</span>
      </div>
      <div className="mt-4 mx-4">
        <label className="label-card">The direction of the profession</label>
        <span className="text-card">Toruism</span>
      </div>
      <div className="mt-4 mx-4">
        <label className="label-card">Email Address</label>
        <span className="text-card">{email}</span>
      </div>
      <div className="mt-4 mx-4 mb-3">
        <label className="label-card">Phone Number</label>
        <span className="text-card">{phone}</span>
      </div>
    </div>
  </div>
);

