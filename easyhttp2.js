/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Jozef Woroniecki
 * @license Private
 * 
 *
 **/


class httpPal{

  // ******* make an HTTP GET request **********
  get(url){
    return new Promise((resolve,reject)=>{
      fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch( error => reject(error))
      
    });
  }
  
  // ********* make an HTTP POST request ********
  post(url,data){
    return new Promise(function(resolve,reject){
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response=>response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
    })
  }

  // ********* make an HTTP PUT/UPDATE request ********
  put(url,data){
    return new Promise(function(resolve,reject){
      fetch(url,{
        method: 'PUT',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(response=>response.json())
      .then(data => resolve(data))
      .catch(error => reject(error))
    })
  }
  // ********* make an HTTP DELETE request ********
  delete(url){
    return new Promise(function(resolve,reject){
      fetch(url,{
        method: 'DELETE',
        headers: {
          'Content-type':'application/json'
        }
      })
      .then(response => response.json())
      .then(data => resolve("User deleted..."))
      .catch(error => reject(error))
    })
  }

}



