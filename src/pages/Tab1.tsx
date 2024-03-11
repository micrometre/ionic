import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Camera1Stream from '../components/Camera1Stream';
import AlprStremPlates from '../components/AlprStream';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <Camera1Stream name="Tab 1 page" />
        <AlprStremPlates name="Tab 1 page" />

        <iframe src="http://127.0.0.1:5000/alprd1/mobile" ></iframe>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
