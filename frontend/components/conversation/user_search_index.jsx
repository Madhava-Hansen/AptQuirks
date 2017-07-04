import React from 'react';
import UserSearchIndexItem from './user_search_index_item';

class UserSearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { users, handleUserSelection, currentUser } = this.props;
    let usersIndex;
    if (users) {
      const usersArray = Object.keys(users).map(key => users[key]);
      usersIndex = usersArray.map((user, idx) => {
        if (user.id === currentUser.id) {
          return;
        } else {
          return (
              <UserSearchIndexItem
                user={user}
                key={idx}
                handleUserSelection={handleUserSelection}
              />
          )
        }

      });

    } else {
      usersIndex = "";
    }
    return (
      <div className="user-search-index">
        <ul>
          {usersIndex}
        </ul>
      </div>
    )
  }
}

export default UserSearchIndex;
