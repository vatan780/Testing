//Import events module
var events=require('events');
//create an eventEmitter Object
var eventEmitter=new events.EventEmitter();

//create an event handler as follow
var connectionHandler=function connected(){
    console.log("connected successfully");
    
    //fire the dataReceived element
    // eventEmitter.emit("data_received");
}

//bind the connection event with the handler
eventEmitter.on('connection',connectionHandler)

//bind the data_received event with the anonymous function

eventEmitter.on('data_received',function(){
    //some operation performed
    console.log('data-received successfully');
})

eventEmitter.on('data_received',()=>{
    console.log("new event attach");
})
  
//check how many listeners connceted to connection events
// console.log(eventEmitter.listeners("connection"))

//check how many listeners connceted to data_received events
console.log(eventEmitter.listeners("data_received"))
eventEmitter.emit('connection')

//remove listeners for connections
eventEmitter.removeListener('connection',connectionHandler)

console.log(eventEmitter.listeners('connection'))

eventEmitter.emit('connection')
eventEmitter.emit("data_received");

