import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyA0GLlurLvufeXwj7_b1WjUpsJ_MSbNmgE",
  authDomain: "linkedin-clone-b0d40.firebaseapp.com",
  projectId: "linkedin-clone-b0d40",
  storageBucket: "linkedin-clone-b0d40.appspot.com",
  messagingSenderId: "778223915544",
  appId: "1:778223915544:web:993cde672f1561cf96696d"
};




const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
 


export {db}


