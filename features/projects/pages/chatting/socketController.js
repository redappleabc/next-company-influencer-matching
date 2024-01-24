const controller = (socket) => {
    console.log('run',socket);
    socket.on('message',(msg) => {
        console.log(msg);
    })
}
export default controller;