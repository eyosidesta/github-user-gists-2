const public_api = process.env.PUBLIC_GITHUB_USERS_API;
const fs = require("fs");
const { newUserGists } = require('./api.config');
const { visitedUserGists } = require('./api.config');
export const getGistsByUserName = async (username) => {
    // search for gists
    let data = await JSON.parse(fs.readFileSync("./data/gists.json", 'utf-8'));
    let isUserVisitedBefore = 0;
    let lastseen = new Date();
    for(let i = 0; i < data.length; i++) {
      if(data[i][username] === username) {
        isUserVisitedBefore = 1;
        lastseen = data[i][lastseen];
        data[i][lastseen] = new Date();
        fs.writeFileSync(data, JSON.stringify(data));
      }
    }
    if(!isUserVisitedBefore) {
      newUserGists(public_api, username);
      isUserVisitedBefore = 0;
    } else {
      visitedUserGists(public_api, username, lastseen);
    }
}