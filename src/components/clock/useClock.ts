import { useState, useEffect }from "react"; 

const UseClock = (initialTime = new Date()) => {
    const [ time, setTime ] = useState(initialTime);
    useEffect(() => {
        const clock = setInterval(() => {
            setTime(() => new Date())
        }, 1000);
        return () => clearInterval(clock);
    });
    return time;
}

export default UseClock;