
import React, {useEffect} from 'react';
import * as firebase from 'firebase';

const Sair = (props) => {
  
    useEffect(()=>{
        firebase.auth().signOut();
        props.navigation.navigate('Login')
    },[])
  
    return (
      <>
          
      </>
    );
  };
  
  export default Sair;