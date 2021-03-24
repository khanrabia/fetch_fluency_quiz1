const fetch = require('node-fetch');

function getPost(ID){
  const url = fetch(`https://jsonplaceholder.typicode.com/posts/${ID}`)
  .then(response =>  response.json());
  return url;
}

function getUsers(){
  const url = fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => data.map(user => user.name))
  return url;
}

function getAddresses(){
  const url = fetch("https://jsonplaceholder.typicode.com/users")
  .then(resposne => resposne.json())
  .then(data => {
    data.map(userAddress => {
      `${userAddress.address.street}, ${userAddress.address.suite}, ${userAddress.address.city}`
    })
  })
  return url;
}

function shortestPost(){
  const url = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(resposne =>{
    return resposne.json()
  })
  .then(data => {
    data.reduce((a,b) => {
      if(a.body.length > b.body.length){
        return a = b;
      }
    })
  })
  return url;
}

function numCompleted(){
  let count = 0;
  
  const url = fetch("https://jsonplaceholder.typicode.com/todos")
  .then(resposne =>{
    return resposne.json();
  })
  .then(data => {
    data.forEach(task => {
      if(task.completed === true){
        count++;

      }
      return count;
    })
  })
  return url;
}

function searchPosts(searchWord){
  const url = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => data.filter(post => {
    body = post.body
    if(body.includes(searchWord)){
      return post;
    }
  }))
  return url;

}


module.exports = {
  getPost,
  getUsers,
  getAddresses,
  shortestPost,
  numCompleted,
  searchPosts,
};