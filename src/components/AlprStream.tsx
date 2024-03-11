import './ExploreContainer.css';
import './AlprStream.css'

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
       <iframe style={{
          color: "#fff",
          border: "1px solid #088413",
          fontSize: 11,
          fontWeight: "bold",
          letterSpacing: 1,
          borderRadius: 4,
          padding: "4px 6px",
          display: "inline-block",
          position: "relative",
          top: -2,
          marginLeft: 10,
          lineHeight: 1,
        
       }} src="http://192.168.1.122:5000/alprd1/mobile" ></iframe> 
    </div>
  );
};

export default ExploreContainer;
