import {initializeApp} from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore';

const clientCredentials = {
};

const app = initializeApp(clientCredentials);

export default {
  firebaseApp: app,
  fireStore: getFirestore(app) 
};