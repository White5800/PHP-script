const telegram = require('telegram-bot-api');
const request = require('request');
const apiKey = '7130866739:AAHzCDivxW7B6znphCcxAuw3k6oJkbpx9YI';
const apiSecret = '7130866739:AAHzCDivxW7B6znphCcxAuw3k6oJkbpx9YI';
const token = '7130866739:AAHzCDivxW7B6znphCcxAuw3k6oJkbpx9YI';
const phoneNumber = '+243830673538';
const apiUrl = `https://api.telegram.org/bot${token}/getUpdates`;
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    offset: 0,
    limit: 100,
    hash: phoneNumber
  })
};
request(apiUrl, options, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  const updates = JSON.parse(body);
  updates.forEach(update => {
    const message = update.message;
    const chat = update.chat;
    const text = message.text;
    const username = chat.username;
    const text = message.text;
    const text = message.text;
    const text = message.text;
    const text = message.text;
    const text = message.text;
    const text = message.text;
    const text

