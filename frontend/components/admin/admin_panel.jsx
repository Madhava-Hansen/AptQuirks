import React, {useEffect, useState} from 'react';
import {fetchUsers} from '../../util/conversation_api_util';

export const AdminPanel = () => {

  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchUsers({user: {username: null}}).then(users => {
      setTotalUsers(users);
    })
  }, [])

  return (
    <div className="AdminPanel">
      <h1 className="AdminPanel-pageTitle">Admin Panel</h1>
      <div className="AdminPanel-usersData">
        <h1 className="AdminPanel-usersDataTitle">Total Users</h1>
        <h2 className="AdminPanel-usersDataTotalUsers">{totalUsers.length}</h2>
      </div>
    </div>
  )
}
