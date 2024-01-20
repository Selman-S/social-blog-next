
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
import { coloredToast } from '@/lib/sweetalertToast/config';
import useUsersCall from './useUsersCall';

const useAuthCall = () => {
  const dispatch = useDispatch();
  const { createUserInDummyDb } = useUsersCall()
  const router = useRouter();


  useEffect(() => {
    console.log('useAuthCall');

    userObserver();
  }, []);



  const registerWithEmail = async (email: string, password: string, image: string, firstName: string, lastName: string) => {
    try {
      //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
      const regi = await createUserInDummyDb({ firstName, lastName, email })
      console.log(regi);
      if (regi && regi.status === 200 && regi.data.id) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        coloredToast("error", 'Something went wrong')
      }
      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: firstName + '&' + lastName + '#' + (regi?.data?.id ?? ''),
          photoURL: image,
        });
        coloredToast("success", 'Registered successfull')
      } else {
        console.error('No user is currently signed in');
      }


    } catch (error) {
      console.log(error);
      coloredToast("error", (error as Error).message);

    }
  };

  //* https://console.firebase.google.com/
  //* => Authentication => sign-in-method => enable Email/password

  const signIn = async (email: string, password: string) => {
    try {
      //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      coloredToast("success", 'Logged in successfull')

    } catch (error) {
      coloredToast("error", (error as Error).message);
    }
  };

  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {

      if (user) {
        console.log(user);

        const { email, displayName, photoURL } = user;
        const firstName = displayName?.split('&')[0]
        const lastName = displayName?.split('&')[1].split('#')[0]
        const uid = displayName?.split('#')[1]
        const curUser = {
          email,
          firstName: firstName,
          lastName: lastName,
          photoURL,
          uid

        }
        console.log('curUser', curUser);

        dispatch(userSlice.actions.setCurrentUser(curUser))
        router.push('/')
      } else {
        dispatch(userSlice.actions.setCurrentUser(null))
        router.push('/login')
      }
    });
  };

  const logOut = () => {
    console.log('logout');

    signOut(auth);
    coloredToast("success", 'Logged out successfull')
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
        //? kullanıcı profilini güncellemek için kullanılan firebase metodu
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: result.user?.displayName,
            photoURL: result.user?.photoURL,
          });
        } else {
          console.error('No user is currently signed in');
        }
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