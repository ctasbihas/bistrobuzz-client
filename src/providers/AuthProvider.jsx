import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	TwitterAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const facebookProvider = new FacebookAuthProvider();
	const googleProvider = new GoogleAuthProvider();
	const twitterProvider = new TwitterAuthProvider();

	const register = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const login = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logout = () => {
		setLoading(true);
		return signOut(auth);
	};
	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	const facebookSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, facebookProvider);
	};
	const googleSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};
	const twitterSignIn = () => {
		setLoading(true);
		return signInWithPopup(auth, twitterProvider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			setUser(loggedUser);

			// Axios
			if (loggedUser) {
				axios
					.post(`${import.meta.env.VITE_SERVER_URL}/jwt`, {
						email: loggedUser.email,
					})
					.then((data) => {
						localStorage.setItem("access-token", data.data.token);
						setLoading(false);
					});
			} else {
				localStorage.removeItem("access-token");
			}
		});
		return () => {
			return unsubscribe();
		};
	}, []);
	const authInfo = {
		user,
		loading,
		register,
		login,
		updateUserProfile,
		facebookSignIn,
		googleSignIn,
		twitterSignIn,
		logout,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
