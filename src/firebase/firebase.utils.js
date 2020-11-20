import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyB-VPHv2Q4nd13ToHsW4taNCzZ0iXcIYWY',
	authDomain: 'ecommerce-db-cb8c5.firebaseapp.com',
	databaseURL: 'https://ecommerce-db-cb8c5.firebaseio.com',
	projectId: 'ecommerce-db-cb8c5',
	storageBucket: 'ecommerce-db-cb8c5.appspot.com',
	messagingSenderId: '887500628711',
	appId: '1:887500628711:web:1ef4c530fdee54ecfbf842',
	measurementId: 'G-MY9QC0S2SM',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user');
		}
	}
	return userRef;
};

export default firebase;
