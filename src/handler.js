'use strict'
const { getGistsByUserName } = require('./controller');

 
exports.handler = async (event) => {
    let gists = [];
    if (event.queryStringParameters && event.queryStringParameters.username) {
        console.log("Received username: " + event.queryStringParameters.username);
        // Search for public gists using provided username
        gists = await getGistsByUserName(username);
    }
    
    if (event.body) {
        let body = JSON.parse(event.body)
        if (body.time) 
            time = body.time;
    }
 
    let responseBody = {
        gists
    };
    
    let response = {
        statusCode: responseCode,
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};