import React, { useState, useEffect } from 'react';
import './AlprStream.css'
interface ContainerProps {
  name: string;
}

function AlprStremPlates() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const evtSource = new EventSource("http://127.0.0.1:5000/camera1/camera1sse");
    evtSource.addEventListener("myEventName", (event) => {
      // the event name here must be the same as in the API
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
      <h1>
        {state}
      </h1>
    </div>
  );

}

export default AlprStremPlates;
