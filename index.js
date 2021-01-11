// // const { driver } = require('@rocket.chat/sdk');
// // // customize the following with your server and BOT account information
// // const HOST = 'myserver.com';
// // const USER = 'mysuer';
// // const PASS = 'mypassword';
// // const BOTNAME = 'easybot';  // name  bot response to
// // const SSL = true;  // server uses https ?
// // const ROOMS = ['GENERAL', 'myroom1'];

// // var myuserid;
// // // this simple bot does not handle errors, different message types, server resets 
// // // and other production situations 

// // const runbot = async () => {
// //     const conn = await driver.connect( { host: HOST, useSsl: SSL})
// //     myuserid = await driver.login({username: USER, password: PASS});
// //     const roomsJoined = await driver.joinRooms(ROOMS);
// //     console.log('joined rooms');

// //     // set up subscriptions - rooms we are interested in listening to
// //     const subscribed = await driver.subscribeToMessages();
// //     console.log('subscribed');

// //     // connect the processMessages callback
// //     const msgloop = await driver.reactToMessages( processMessages );
// //     console.log('connected and waiting for messages');

// //     // when a message is created in one of the ROOMS, we 
// //     // receive it in the processMesssages callback

// //     // greets from the first room in ROOMS 
// //     const sent = await driver.sendToRoom( BOTNAME + ' is listening ...',ROOMS[0]);
// //     console.log('Greeting message sent');
// // }

// // // callback for incoming messages filter and processing
// // const processMessages = async(err, message, messageOptions) => {
// //   if (!err) {
// //     // filter our own message
// //     if (message.u._id === myuserid) return;
// //     // can filter further based on message.rid
// //     const roomname = await driver.getRoomName(message.rid);
// //     if (message.msg.toLowerCase().startsWith(BOTNAME)) {
// //       const response = message.u.username + 
// //             ', how can ' + BOTNAME + ' help you with ' +
// //             message.msg.substr(BOTNAME.length + 1);
// //       const sentmsg = await driver.sendToRoom(response, roomname);
// //     }
// //   }
// // }

// // runbot()


// // const rocketchat = require('rocketchat-sdk')

// // rocketchat.driver.connect({ host: 'localhost:3000' }, function (err, asteroid) {
// //   if (err) console.error(err)
// //   else console.log('connected', asteroid)
// // })


// const dialogflow = require('dialogflow');
// const uuid = require('uuid');
 
// /**
//  * Send a query to the dialogflow agent, and return the query result.
//  * @param {string} projectId The project to be used
//  */
// async function runSample(projectId = 'logixbot-olng') {
//   // A unique identifier for the given session
//   const sessionId = uuid.v4();
 
//   // Create a new session
//   const sessionClient = new dialogflow.SessionsClient();
//   const sessionPath = sessionClient.sessionPath(projectId, sessionId);
 
//   // The text query request.
//   const request = {
//     session: sessionPath,
//     queryInput: {
//       text: {
//         // The query to send to the dialogflow agent
//         text: 'hello',
//         // The language used by the client (en-US)
//         languageCode: 'en-US',
//       },
//     },
//   };
 
//   // Send request and log result
//   const responses = await sessionClient.detectIntent(request);
//   console.log('Detected intent');
//   const result = responses[0].queryResult;
//   console.log(`  Query: ${result.queryText}`);
//   console.log(`  Response: ${result.fulfillmentText}`);
//   if (result.intent) {
//     console.log(`  Intent: ${result.intent.displayName}`);
//   } else {
//     console.log(`  No intent matched.`);
//   }
 
// }
// // let result1 =  runSample('logixbot-olng');
// // console.log("result",result1);
// // const functions = require('firebase-functions');

//   runSample();

var moment = require('moment');
var date = "2020-12-29 17:50:16"
let day =moment(date).utc();
let time = moment('"2020-12-29 11:48:00.018"').format('hh:mm:ss');
let today = moment().utc().get();
console.log("today",time);
var isafter = moment(day).isAfter(moment().utc()); // true
if(isafter == true){
    console.log('is after true');
} else {
    console.log('is after is false');
}
console.log(day,today);

