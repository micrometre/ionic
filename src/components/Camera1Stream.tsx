import './Camera1Stream.css'

interface ContainerProps {
  name: string;
}

const Camera1Stream: React.FC<ContainerProps> = () => {
  return (
    <div >
      <img  src="http://192.168.1.120:8080/video" width="375" height="281"></img>
    </div>
  );
};

export default Camera1Stream;
