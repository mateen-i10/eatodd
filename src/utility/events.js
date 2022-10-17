const subscribe = (eventName, listener) => {
    document.addEventListener(eventName, listener)
}

const unSubscribe = (eventName, listener) => {
    document.removeEventListener(eventName, listener)
}

const publish = (eventName, data) => {
    const event = new CustomEvent(eventName, {detail: data})
    document.dispatchEvent(event)
}

export {publish, unSubscribe, subscribe}