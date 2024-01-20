
import { useEffect } from 'react';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from '@/auth/firebase/firebase';
import { useDispatch } from 'react-redux';
import { userSlice } from '@/lib/redux/slices/userSlice';
import { useRouter } from 'next/navigation';

const useAuthCall = () => {
  const dispatch = useDispatch();

  const router = useRouter();


  useEffect(() => {
    console.log('useAuthCall');

    userObserver();
  }, []);

  const registerWithEmail = async (email: string, password: string, displayName: string) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: displayName,
        });
      } else {
        console.error('No user is currently signed in');
      }

      // dispatch(userSlice.actions.setCurrentUser(auth.currentUser))
      // router.push('/')


      // console.log(userCredential);
      // navigate("/");
      // toastSuccessNotify("Registered successfully!");
    } catch (error) {
      console.log(error);
      // toastErrorNotify(error.message);
    }
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password
  //! Email/password ile girişi enable yap
  const signIn = async (email: string, password: string) => {
    try {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(userCredential);
      // navigate("/");
      // toastSuccessNotify("Logged in successfully!");
      // router.push('/')
    } catch (error) {
      console.log(error);
      // toastErrorNotify(error.message);
    }
  };

  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);

        const { email, displayName, photoURL } = user;
        const curUser = {
          email,
          displayName,
          photoURL,
        }
        dispatch(userSlice.actions.setCurrentUser(curUser))
        router.push('/')
      } else {
        // User is signed out
        // setCurrentUser(false);
        dispatch(userSlice.actions.setCurrentUser(null))
        // sessionStorage.removeItem("user");
      }
    });
  };

  const logOut = () => {
    console.log('logout');

    signOut(auth);
    // toastSuccessNotify("Logged out successfully");
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Google
  //! Google ile girişi enable yap
  //* => Authentication => settings => Authorized domains => add domain
  //! Projeyi deploy ettikten sonra google sign-in çalışması için domain listesine deploy linkini ekle
  const signUpWithGoogle = () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        // navigate("/");
        // toastSuccessNotify("Logged in successfully");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  const forgotPassword = (email: string) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // toastSuccessNotify("Please check your email");
      })
      .catch((error) => {
        // toastErrorNotify(error.message);
      });
  };


  return { registerWithEmail, logOut, userObserver, signIn, signUpWithGoogle, forgotPassword }
}

export default useAuthCall