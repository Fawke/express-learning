# Sample Expressjs CRUD API

### Steps to run

`npm install`
`npm start`

### API Reference
|Route         | HTTP Verb   |Description         |
|--------------|:-----------:|:------------------:|
|/api/bears    |GET          |Get all the bears   |
|/api/bears    |POST         |Create a new bear   |
|/api/bears/:id|PUT          |Modify a bear       |
|/api/bears/:id|DELETE       |Delete a bear       |

### Use POSTMAN to test the API

For example, to get GET route, send a GET request to http://localhost:3000/api/bears

## NOTE

First send a POST request with following json as a body parameter, otherwise it'll throw an error

  `{
      "id": "1",
      "name": "teddy"
    }`
