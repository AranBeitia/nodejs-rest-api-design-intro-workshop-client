import firebase from 'firebase/app'
import 'firebase/auth'

if (!firebase.apps.length) {
	// Paste your config object here ⬇️
	const firebaseConfig = {
		apiKey: 'AIzaSyCB1BpfuxIPWgpiTliAb_yKuueobLYuj_I',
		authDomain: 'fir-test-679b4.firebaseapp.com',
		projectId: 'fir-test-679b4',
		storageBucket: 'fir-test-679b4.appspot.com',
		messagingSenderId: '910866846475',
		appId: '1:910866846475:web:bc85695ed1ce4e43ac880e',
	}

	firebase.initializeApp(firebaseConfig)
} else {
	// if already initialized, use that one
	firebase.app()
}

export const auth = firebase.auth()

export function singInWithGoogle() {
	const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

	return auth.signInWithPopup(GoogleAuthProvider)
}

export function singInWithEmailAndPassword(email, password) {
	return auth.signInWithEmailAndPassword(email, password)
}

export function singUpWithEmailAndPassword(email, password) {
	return auth.createUserWithEmailAndPassword(email, password)
}

export function sendPasswordResetEmail(email) {
	return auth.sendPasswordResetEmail(email)
}

export function signOut() {
	return auth.signOut()
}

export function getCurrentUserToken() {
	if (!auth.currentUser) {
		return null
	}

	return auth.currentUser.getIdToken()
}

export function getCurrentUserEmail() {
	if (!auth.currentUser) {
		return null
	}

	return auth.currentUser.email
}
