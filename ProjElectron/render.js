const querystring = require('querystring');
let query = querystring.parse(global.location.search);
let data = JSON.parse(query['?data'])
let jsonData = JSON.parse(data)

const element1 = document.getElementById('my-name')
const element2 = document.getElementById('my-age')
const element3 = document.getElementById('my-status')
if(element1) element1.innerText = jsonData ? jsonData.name : null
if(element2) element2.innerText = jsonData ? jsonData.age : null
if(element3) element3.innerText = jsonData ? jsonData.isLookingForJob && 'I need a new job' : null