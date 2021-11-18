import React, { useEffect } from 'react';
import router from 'next/router';
import firebase from 'firebase/app';
import {getAuth} from 'firebase/auth';
import initFirebase from '../config';

initFirebase();
// const auth = firebase.auth();

const withAuth = Component => props => {
  useEffect(() => {
    getAuth().onAuthStateChanged(authUser => {
      if (!authUser) {
        router.push('/signin');
      }
    });
  }, []);

  return (
    <div>
      <Component {...props} />
    </div>
  )
};

export default withAuth;