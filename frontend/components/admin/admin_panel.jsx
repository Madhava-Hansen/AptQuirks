import React, {useEffect, useState} from 'react';
import {fetchUsers} from '../../util/conversation_api_util';
import {Link} from 'react-router-dom';

export const AdminPanel = () => {

  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchUsers({user: {username: null}}).then(users => {
      setTotalUsers(users);
    })
  }, [])

  return (
    <div className="AdminPanel">
      {(totalUsers && totalUsers.length > 0) ? (
        <>
          <h1 className="AdminPanel-pageTitle">Admin Panel</h1>
          <div className="AdminPanel-usersData">
            <h1 className="AdminPanel-usersDataTitle">Total Users</h1>
            <h2 className="AdminPanel-usersDataTotalUsers">{totalUsers.length}</h2>
          </div>
        </>
      ) : (
        <>
          <div>You don't have permission to view this page.</div>
          <Link style={{color: 'steelblue', marginTop: '12px'}} to="/home">Home</Link>
        </>
      )}
    </div>
  )
}
