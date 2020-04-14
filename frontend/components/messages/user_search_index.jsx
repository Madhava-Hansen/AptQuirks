import React from "react";
import UserSearchIndexItem from "./user_search_index_item";

export const UserSearchIndex = ({users, handleUserSelection, update}) => {
  const usersArray = users ? Object.keys(users).map(key => users[key]) : [];
  return (
    <div className="UserSearchIndex">
    <div className="UserSearchIndex-contentWrapper">
      <h1>To:</h1>
      <input
        onChange={update}
        className="UserSearchIndex-input"
        placeholder="Enter username..."
      />
    </div>
      <ul className="UserSearchIndex-indexItems">
        {usersArray.map(user => {
          return (
            <UserSearchIndexItem
              user={user}
              key={user.id}
              handleUserSelection={handleUserSelection}
            />
          );
        })}
      </ul>
    </div>
  )
}
