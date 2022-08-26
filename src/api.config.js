const fs = require('fs');
export const newUserGists = (public_api, username) => {
    const resp = await axios.get(
      `${public_api}/${username}/gists`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );
    fs.appendFile("./data/gists.json", {'username': username, 'lastseen': new Date()} , function (err) {
        if (err) throw err;
        console.log('new username and last time date appended successfully');
     });
    return resp;
  }
  
export const visitedUserGists = (public_api, username, lastseen) => {
    const resp = await axios.get(
      `${public_api}/${username}/gists?since=${lastseen}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );
    return resp;
  }