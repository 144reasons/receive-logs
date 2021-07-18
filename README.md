# receive-logs

This is a simple NodeJS Express api to send info to a Discord Webhook. Wrapper coming soon.

## Installation

Current release: 1.0.0

`$ npm install` or `$ yarn install`

## Configuring

Rename config.json.example to config.json

Go to the settings of the channel you want to send the logs to, go to `Integrations`, `Webhooks`, and `New Webhook`. Name it anything you want and if you want you can even add a profile picture. 
Copy the URL, and find the wbID and the wbToken.

The wbID should look something like this: `866314856606860811`

The wbToken should look something like this: `VReXaMpLeqFzXoSlIYOuQ2owNFw92ABwHbgbyI7S1uOwz-P0Hp18T6kd7pDm4nYoCZZw`

Set the wbID and wbToken in the appropriate spaces inside of the config.json.

To get the token for your api, either you can create it yourself, or you can use `node generatetoken.js`, and either copy the output from the console or the newly created file named `savetoken.txt`, and paste it into the appropriate space inside of the config.json.

## Usage

The api starts on port 3000. On its own it only can be accessed via localhost, but if you implement it to something like NGINX, you can probably be able to access it through the internet. The available endpoints are: `/error`, `/log`, and `/successful`. 
A valid request should look like this:
```json
{
    "auth": "TOKEN",
    "log": "CONTENT TO BE LOGGED"
}
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)