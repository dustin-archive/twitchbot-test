const tmi = require('tmi.js')

const client = new tmi.client({
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: '',
    password: ''
  },
  channels: ['#']
})

// Connect the client to the server..
client.connect()

client.on('message', (channel, userstate, message, self) => {
  // Don't listen to my own messages..
  if (self) return

  // Handle different message types..
  if (userstate['message-type'] === 'chat') {
    client.say('whaaaley', 'SELF BOT SAYS HI')
  }

  // switch(userstate['message-type']) {
  //   case 'action':
  //     // This is an action message..
  //     break;
  //   case 'chat':
  //     // This is a chat message..
  //     break;
  //   case 'whisper':
  //     // This is a whisper..
  //     break
  //   default:
  //     // Something else ?
  //     break
  // }
})
