export default socket => store => next => action => {
    if (action.meta && action.meta.remote) {
    console.log(action, store)
    socket.emit('action', action);
    }
    return next(action);
}