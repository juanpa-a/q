import Scan from "./scan"
import Wait from "./wait"

export default () => {
    const userIsEnqueued = true
    return userIsEnqueued 
        ? <Wait />
        : <Scan /> 
};
