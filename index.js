const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Discord = require('discord.js');
const config = require('./config.json');

const webhookClient = new Discord.WebhookClient(config.webhookID, config.webhookToken);

webhookClient.send('Started logging in this channel!')

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send({
        'creator': 'ICodeInAssembly',
        'creators_discord': 'ICodeInAssembly#7117',
    })
})

app.get('/error', function(req, res) {
    res.send('You need to create a POST request!')
})

app.post('/error', async function(req, res) {
    var body = req.body;

    if(!body.auth) return res.send({ 'Unauthorized': 'You have logged in incorrectly!'})

    if(body.auth !== config.apiToken) return res.send({ 'Unauthorized': 'You used an invalid api token!'})

    const embed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle('Error')
                    .setDescription(`Logged this error:\n\n\`\`\`${body.log}\`\`\``)

    res.send({ 'Logged to discord the error': '' });
    webhookClient.send(embed)
});

app.post('/log', async function(req, res) {
    var body = req.body;

    if(!body.auth) return res.send({ 'Unauthorized': 'You have logged in incorrectly!'})

    if(body.auth !== config.apiToken) return res.send({ 'Unauthorized': 'You used an invalid api token!'})

    const embed = new Discord.MessageEmbed()
                    .setColor('LIGHT_GREY')
                    .setTitle('Log')
                    .setDescription(`Logged:\n\n\`\`\`${body.log}\`\`\``)

    res.send({ 'Logged to discord': '' });
    webhookClient.send(embed)
});

app.post('/success', async function(req, res) {
    var body = req.body;

    if(!body.auth) return res.send({ 'Unauthorized': 'You have logged in incorrectly!'})

    if(body.auth !== config.apiToken) return res.send({ 'Unauthorized': 'You used an invalid api token!'})

    const embed = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('Success')
                    .setDescription(`\`\`\`${body.log}\`\`\``)

    res.send({ 'Logged to discord': '' });
    webhookClient.send(embed)
});

app.listen(config.port, function() {
    console.log(`Server is listening on port ${config.port}...`);
});