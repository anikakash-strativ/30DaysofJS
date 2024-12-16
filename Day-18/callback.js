//Callback
const doSomething = (callback) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(true, skills)
    }, 2000)
  }
  
  const handelError = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(handelError)

  // promise

  const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

  