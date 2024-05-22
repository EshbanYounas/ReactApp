import React from 'react'

function UserRecord({value}) {
//   let ar = [1,2,3,4];
//   console.log('Old Array is ', ar)

//    let newAr = ar.reduce(function (value, acc){
//         return value + acc;
//     }, 0)
//     console.log('New Array is ', newAr)
  return (
    <>
        <div className="container">
            <li>{value.title}</li>
        </div>
    </>
  )
}

// function sum(a, b){
//     return a+b;
// }

export default UserRecord