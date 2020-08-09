import React, {useEffect, useState} from 'react';
import {fetchUsers} from '../../util/conversation_api_util';
import {QuirkIndexItem} from '../quirks/quirk_index_item';
import {Link} from 'react-router-dom';

export const AdminPanel = () => {

  const [totalUsers, setTotalUsers] = useState([]);

  useEffect(() => {
    fetchUsers({user: {username: null}}).then(users => {
      setTotalUsers(users);
    })
  }, [])

  const getFilteredUsers = totalUsers.filter(user => user.email !== 'madhavah@gmail.com');

  return (
    <div className="AdminPanel">
      {(totalUsers && totalUsers.length > 0) ? (
        <>
          <h1 className="AdminPanel-pageTitle">Admin Panel</h1>
          <div className="AdminPanel-usersData">
            <h1 className="AdminPanel-usersDataTitle">Total Users</h1>
            <h2 className="AdminPanel-usersDataTotalUsers">{getFilteredUsers.length}</h2>
          </div>
          {getFilteredUsers.map(user => {
              return (
                <div className="AdminPanel-userIndexItem">
                  <div className="AdminPanel-username">{`Username: ${user.username}`}</div>
                  <div className="AdminPanel-email">{`Email: ${user.email}`}</div>
                  {user.quirks && (
                    <ul className="QuirksIndex-quirksWrapper">
                      {user.quirks.map(quirk => (
                          <li className="QuirkIndexItem">
                            <section className="QuirkIndexItem-userInfo">
                            <img className="QuirkIndexItem-userPic" src={quirk.user_pic}></img>
                            <p className="QuirkIndexItem-username">{quirk.user_name}</p>
                            <p className="QuirkIndexItem-timestamp">{quirk.created_at} ago</p>
                            </section>
                              <section className="QuirkIndexItem-mainContent">
                              {quirk.apt_number && (
                                <p className="QuirkIndexItem-apartmentNumber">Apt {quirk.apt_number}</p>
                              )}
                              <p className="QuirkIndexItem-bodyText">{quirk.body}</p>
                              {!!quirk.starRating && (
                                <div className="QuirkIndexItem-starRating">
                                  <StarRatings 
                                    rating={quirk.starRating}
                                    starRatedColor="#192841"
                                    numberOfStars={5}
                                    starDimension="20px"
                                    starSpacing="3px"
                                    name="Overall Rating"
                                  />
                                </div>
                              )}
                            </section>
                          </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
          })}
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
