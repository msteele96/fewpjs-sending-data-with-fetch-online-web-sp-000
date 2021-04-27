// Add your code here
function submitData( name, email ){
<<<<<<< HEAD
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify( {
      name,
      email
    } )
  }
    return fetch('http://localhost:3000/users', configObj)
    .then( function ( resp ) {
      return resp.json()
    })
    .then(function(object) {
      document.body.innerHTML = object["id"]
    } )
    .catch( function ( error ) {
      document.body.innerHTML = error.message
    } )
};
=======
    return fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        name,
        email
      } )
    })
    .then( function ( resp ) {
      return resp.json()
    })
    // .then(function(object) {
    //   document.body.innerHTML = object["id"]
    // } )
};

const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify( {
    name,
    email
  } )
}

//
// function submitData(name, email) {
//   return fetch( 'http://localhost:3000/users', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify({
//         name,
//         email
//       })
//     })
//     .then(function(response){
//       return response.json()
//     })
// //     .then( function ( object ) {
// //       document.body.innerHTML = object[ "id" ]
// //     } )
// //     .catch( function ( error ) {
// //       document.body.innerHTML = error.message
// //     } )
// }
>>>>>>> da8e0cd87dd25f65c8f36d0e896117a898384e12
