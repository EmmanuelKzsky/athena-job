import React from 'react';

export const SearchUser = ({ onSearchUser }) => (
  <div className="col-md-12 my-4">
    <input type="text" className="form-control"
           placeholder="Search for User"
           name="searchUser" onChange={(ev) => onSearchUser(ev.target.value)}/>

  </div>
);

