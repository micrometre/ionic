import React, { useState, useEffect } from 'react';

interface ContainerProps {
  name: string;
}

const AlprStremPlates: React.FC<ContainerProps> = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    const evtSource = new EventSource("http://127.0.0.1:5000/alprd1/alprd1");
    evtSource.addEventListener("alprEvent", (event) => {
      const PlatesEvent = JSON.parse(event.data);
      setState(PlatesEvent);
    });
    return () => {
      evtSource.close();
    };
  }, []);
  return (
    <div >
      <h1>Test</h1>
    </div>
  );
};

export default AlprStremPlates;
