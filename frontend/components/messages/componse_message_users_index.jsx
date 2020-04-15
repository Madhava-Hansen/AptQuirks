import React from "react";
import {ComposeMessageUsersIndexItem} from "./compose_message_users_index_item";

export const ComposeMessageUsersIndex = ({users, handleUserSelection, update}) => {
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
        {users.map(user => {
          return (
            <ComposeMessageUsersIndexItem
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
