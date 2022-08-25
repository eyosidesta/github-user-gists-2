<<<<<<< HEAD
# REST API

NodeJS function running on AWS Lambda using the traditional Serverless Framework. The deployed function does not include any event definitions as well as any kind of persistence (database).

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

After running deploy, you should see output similar to

```bash
Deploying aws-node-project to stage dev (us-east-1)

✔ Service deployed to stack second-option (112s)

functions:
  handler: aws-node-project-dev-hello (1.5 kB)
```

### Invocation

After successful deployment, we can invoke the deployed function by using the following command:

```bash
serverless invoke --function handler
```

Which should result in response similar to the following:

```json

  {
    "url": "https://api.github.com/gists/828e8049f8592420dc3c7a2f34771e7b",
    "forks_url": "https://api.github.com/gists/828e8049f8592420dc3c7a2f34771e7b/forks",
    "commits_url": "https://api.github.com/gists/828e8049f8592420dc3c7a2f34771e7b/commits",
    "id": "828e8049f8592420dc3c7a2f34771e7b",
    "node_id": "G_kwDOAj9GP9oAIDgyOGU4MDQ5Zjg1OTI0MjBkYzNjN2EyZjM0NzcxZTdi",
    "git_pull_url": "https://gist.github.com/828e8049f8592420dc3c7a2f34771e7b.git",
    "git_push_url": "https://gist.github.com/828e8049f8592420dc3c7a2f34771e7b.git",
    "html_url": "https://gist.github.com/828e8049f8592420dc3c7a2f34771e7b",
    "files": {
      "code.py": {
        "filename": "code.py",
        "type": "application/x-python",
        "language": "Python",
        "raw_url": "https://gist.githubusercontent.com/daniEL2371/828e8049f8592420dc3c7a2f34771e7b/raw/600dee32380504b52264db941e16b2b6b607f547/code.py",
        "size": 457
      }
    },
    "public": true,
    "created_at": "2022-08-24T19:01:26Z",
    "updated_at": "2022-08-24T19:01:27Z",
    "description": "",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/828e8049f8592420dc3c7a2f34771e7b/comments",
    "owner": {
      "login": "daniEL2371",
      "id": 37701183,
      "node_id": "MDQ6VXNlcjM3NzAxMTgz",
      "avatar_url": "https://avatars.githubusercontent.com/u/37701183?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/daniEL2371",
      "html_url
      ....

```
=======
# github-user-gists-2
>>>>>>> da45e58 (Initial commit)
