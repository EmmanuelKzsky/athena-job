// @flow
import './App.scss';
import React, { Component } from 'react';

import { Person } from './Components/Users/Person';
import { UserCard } from './Components/Users/UserCard/UserCard';
import { SearchUser } from './Components/Users/SearchUser/SearchUser';

type Props = {
  getPeople: Function,
};
type State = {
  userSelected: { [string_key: string]: string },
  usersList: Array<{}>,
  usersListFiltered: Array<{}>,
};

class App extends Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = {
      userSelected: undefined,
      usersList: [],
      usersListFiltered: [],
    };
    this.selectUser = this.selectUser.bind(this);
    this.onSearchUser = this.onSearchUser.bind(this);
  }

  componentDidMount (): void {
    this.props.getPeople();
  }

  componentWillReceiveProps (next): void {
    if (next.people.message === 'GET_PEOPLE_SUCCESS') {
      this.setState({
        usersList: next.people.list,
        usersListFiltered: next.people.list,
      });
    }
  }

  selectUser (persona: Object, index: number): void {
    persona.index = index;
    this.setState({
      userSelected: persona,
    });
  }

  onSearchUser (textToSearch: string): void {
    let filteredPeople = this.state.usersList;
    const filteredPeopleMatch = filteredPeople.filter((people) => {
      const peopleName = people.name.first.toLowerCase() + people.name.last.toLowerCase();
      return peopleName.indexOf(textToSearch.toLowerCase()) !== -1;
    });
    this.setState({
      usersListFiltered:filteredPeopleMatch
    });
  }

  render () {
    let userSelected = this.state.userSelected? this.state.userSelected.index : undefined;
    return (
      <div className="container">
        <div className="row mt-5">
          <div className={this.state.userSelected? "col-md-6 col-sm-6 mt-3": "col-md-12 col-sm-12 mt-3"}>
            <div className="row mx-1">
              <h5 className="title-section">Users</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                delectus eveniet ex in magni voluptatem voluptates?
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h6 className=" label-select-user" >Select a group of Users</h6>
              </div>
              <div className="col-md-6">
                <select name="" id="" className="form-control">
                  <option value="">Select a group</option>
                </select>
              </div>
            </div>
            <div className="row">
              <SearchUser onSearchUser={this.onSearchUser}/>
            </div>
            <div className="row mt-3">
              {
                this.state.usersListFiltered &&
                this.state.usersListFiltered.map((person, index) => (
                  <div className="col-md-12 col-lg-6" key={person.id.value+index.toString()}>
                    <Person firstName={person.name.first}
                            lastName={person.name.last}
                            image={person.picture.thumbnail}
                            person={person}
                            id={index}
                            userSelected={userSelected}
                            onPress={this.selectUser}

                    />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mt-3">
            {
              this.state.userSelected &&
              <UserCard
                photo={this.state.userSelected.picture.large}
                firstName={this.state.userSelected.name.first}
                lastName={this.state.userSelected.name.last}
                {...this.state.userSelected}/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
