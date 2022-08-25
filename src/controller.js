const public_api = process.env['PUBLIC_GITHUB_USERS_API'];
export const getGistsByUserName = async (username) => {
    // search for gists
    let data = await fs.readSync("./data/gists.json");
    const resp = await axios.get(
        `${public_api}/${username}/gists`,
        {
          headers: {
            Accept: "application/vnd.github+json",
          },
        }
    );
    return resp;
}