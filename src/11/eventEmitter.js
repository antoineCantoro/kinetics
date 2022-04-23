/* The EventEmitter class is a class that allows you to create an event target and add event listeners
to it. */
class EventEmitter {
    constructor() {
      this.target = new EventTarget();
    }
  
    on(eventName, listener) {
      return this.target.addEventListener(eventName, listener);
    }
    once(eventName, listener) {
      return this.target.addEventListener(eventName, listener, { once: true });
    }
    off(eventName, listener) {
      return this.target.removeEventListener(eventName, listener);
    }
    emit(eventName, detail) {
      return this.target.dispatchEvent(
        new CustomEvent(eventName, { detail, cancelable: true })
      );
    }
  }
  
  /* This is creating a new instance of the EventEmitter class and assigning it to the `globalEvents`
  variable. */
  const globalEvents = new EventEmitter();
  export default globalEvents;