const events = new Map();
// code to create a global bus this allows us to use custom global event listeners on our app as long as we import this document. 
// gets rid of the need to bubble emits to root vue or parent vue
export default{
    $on(eventName, fn){
        if(!events.has(eventName)){
            events.set(eventName,[]);
        }
        events.get(eventName).push(fn);
    },
    $off(eventName, fn){
        throw {message:'Not Implemented'}
    },
    $emit(eventName, data) {
        if(events.has(eventName)){
            events.get(eventName).forEach(fn=> fn(data));
        }
    }
};