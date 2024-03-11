import React, { useState, useEffect } from 'react';
import './AlprStream.css'
interface ContainerProps {
  name: string;
}

function AlprStremPlates() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const evtSource = new EventSource("http://192.168.1.122:5000/alprd1/alprd1");
    evtSource.addEventListener("myEventName", (event) => {
      const myEvent = JSON.parse(event.data);
      console.log(myEvent);
      setState(myEvent);
      console.log(JSON.parse(event.data));
    });

    evtSource.onmessage = (event) => {
      const myEvent = JSON.parse(event.data);
      console.log(myEvent);
      setState(myEvent);
    };

    evtSource.onopen = (event) => {
      console.log(event);
    };

    evtSource.onerror = () => {
      evtSource.close();
    };

    return () => {
      evtSource.close();
    };
  }, []);

  return (
    <div className='stream'>
      <h1>ALPR STREAM</h1>
      <h1>
        {state}
      </h1>
    </div>
  );

}

export default AlprStremPlates;
