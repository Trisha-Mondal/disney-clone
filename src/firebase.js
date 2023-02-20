import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import 'firebase/compat/storage'


function MyComponent() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    };

    return ( <
        button onClick = { signInWithGoogle } > Sign in with Google < /button>
    );
}
const firebaseConfig = {
    apiKey: "AIzaSyADVLMYnbasXAGQ9VU7AbQhx-vHOBB_ITE",
    authDomain: "disney-clone-7c01f.firebaseapp.com",
    projectId: "disney-clone-7c01f",
    storageBucket: "disney-clone-7c01f.appspot.com",
    messagingSenderId: "384140799635",
    appId: "1:384140799635:web:c187e214fbb36439a5e766",
    measurementId: "G-BPTC6B9HPG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { db, auth, provider, storage };

export default db;




//export default firebase;