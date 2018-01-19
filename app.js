let http = new httpPal;

//************* GET users ********

// let users = http.get('https://jsonplaceholder.typicode.com/users')
// .then(function(data){
//   console.log(data);
// })
// .catch(function(error){
//   console.log(error)
// });

// ************* User Data **********
const data = {
  name: "Me",
  username: "Go-you2",
  email: "me@you.com"
}

// ************* POST Users **********
// let userPost = http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(function(data){
//   console.log(data);
// })
//   .catch(function(error){
//     console.log(error);
// })


// ************* PUT Users **********
let userUpdate = http.delete('https://jsonplaceholder.typicode.com/users/1')
.then(function(data){
  console.log(data);
})
  .catch(function(error){
    console.log(error);
})

