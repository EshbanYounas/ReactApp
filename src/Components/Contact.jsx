import React, { useEffect, useState } from 'react'
import UserRecord from './UserRecord';

function Contact() {

    const [data, setData] = useState([]);
    useEffect(function()     {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(function(json) {setData(json)})
    },[])
    console.log('old Data',data)
    const nerData = data.map((value) => {
      let user = {}
      user.name = value.username;
      user.email = value.email;
      user.phone = value.phone;
      return user
    })
    console.log('New Data',nerData)
  return (
    <>
    <h2>Contact Page for the usersers</h2>

<ul id='abc'>
  {data.map(user => {
    return (
      <li key={user.id}>
        {user.username} 
      </li>
      // <UserRecord value={user} />
    );
  })}
</ul>
            
    </>
  )
}

export default Contact