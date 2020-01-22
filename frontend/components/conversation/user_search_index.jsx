import React from 'react';
import UserSearchIndexItem from './user_search_index_item';

class UserSearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {users, handleUserSelection, update} = this.props;
    const usersArray = users ? Object.keys(users).map(key => users[key]) : [];
    return (
      <form autoComplete="off" onSubmit={handleUserSelection} className="UserSearchIndex">
        <input
          onChange={update}
          className="UserSearchIndex-input"
          placeholder="Enter username..."
        />
        <ul className="UserSearchIndex-indexItems">
          {usersArray.map((user, idx) => {
            return (
              <UserSearchIndexItem
                user={user}
                key={idx}
                handleUserSelection={handleUserSelection}
              />
            )
            })
          }
        </ul>
      </form>
    )
  }
}

export default UserSearchIndex;
