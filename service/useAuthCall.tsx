
import { useEffect } from 'react';

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
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
  console.log('useAuthCall')
  const dispatch = useDispatch();
  const { createUserInDummyDb, getUserById } = useUsersCall()
  const router = useRouter();


  useEffect(() => {
    console.log('useAuthCall');

    userObserver();
  }, []);



  const registerWithEmail = async (email: string, password: string, firstName: string, lastName: string) => {


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

        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            displayName: firstName + '&' + lastName + '#' + (regi?.data?.id ?? ''),
          });
          coloredToast("success", 'Registered successfull')
        } else {
          console.error('No user is currently signed in');
        }
      } else {
        coloredToast("error", 'Something went wrong')
      }

      console.log(auth.currentUser);

      //? kullanıcı profilini güncellemek için kullanılan firebase metodu
      // if (auth.currentUser) {
      //   await updateProfile(auth.currentUser, {
      //     displayName: firstName + '&' + lastName + '#' + (regi?.data?.id ?? ''),
      //     photoURL: picture,
      //   });
      //   coloredToast("success", 'Registered successfull')
      // } else {
      //   console.error('No user is currently signed in');
      // }


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
      router.push('/')
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
        let firstName = ''
        let lastName = ''
        let uid = '60d0fe4f5311236168a109ca'
        if (displayName?.includes('&')) {
          firstName = displayName?.split('&')[0]
          lastName = displayName?.split('&')[1].split('#')[0]
          uid = displayName?.split('#')[1]

        }
        const curUser = {
          email,
          firstName: firstName,
          lastName: lastName,
          photoURL,
          uid

        }

        console.log("observer updated displaya name", curUser);

        document.cookie = `uid=${uid}; path=/; max-age=3600;`;
        document.cookie = `firstName=${firstName}; path=/; max-age=3600;`;
        document.cookie = `lastName=${lastName}; path=/; max-age=3600;`;
        document.cookie = `email=${email}; path=/; max-age=3600;`;
        document.cookie = `photoURL=${photoURL}; path=/; max-age=3600;`;


        dispatch(userSlice.actions.setCurrentUser(curUser))

      } else {
        dispatch(userSlice.actions.setCurrentUser(null))

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


  const signUpWithGoogle = async () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    try {
      const signGoogle = await signInWithPopup(auth, provider)
      console.log("signGoogle", signGoogle);
      if (auth.currentUser && auth.currentUser.displayName?.includes('#')) {
        const uid = auth.currentUser.displayName?.split('#')[1]
        const loginDummy = await getUserById(uid)
        console.log("loginDummy", loginDummy);
      } else {
        const createDummyLogin = await createUserInDummyDb({ firstName: signGoogle.user?.displayName || '', lastName: signGoogle.user?.displayName || '', email: signGoogle.user?.email || '' })
        console.log("createDummyLogin", createDummyLogin);

        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: signGoogle.user?.displayName + '&' + signGoogle.user?.displayName + '#' + (createDummyLogin?.data?.id ?? ''),
          });
        }

      }

      //   //? kullanıcı profilini güncellemek için kullanılan firebase metodu
    } catch (error) {

    }
    // .then((result) => {
    //   console.log("google", result);
    //   console.log("google", auth.currentUser);


    //   if (auth.currentUser) {
    //     updateProfile(auth.currentUser, {
    //       displayName: result.user?.displayName,
    //       photoURL: result.user?.photoURL,
    //     });
    //   } else {
    //     console.error('No user is currently signed in');
    //   }
    // })
    // .catch((error) => {
    //   // Handle Errors here.
    //   console.log(error);
    // });
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

  const deleteUserFirebase = async () => {
    if (auth.currentUser) {
      deleteUser(auth.currentUser).then(() => {

        coloredToast("success", 'User deleted successfull')
      }).catch((error) => {

        coloredToast("error", (error as Error).message)
      });
    }
  }


  return { registerWithEmail, logOut, userObserver, signIn, signUpWithGoogle, forgotPassword, deleteUserFirebase }
}

export default useAuthCall