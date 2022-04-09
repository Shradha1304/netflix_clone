import React, { useContext, useState,useEffect } from 'react';
import { SelectProfileContainer } from './profile';
import { FirebaseContext } from '../context/firebase';
import {Loading,Header} from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function BrowseContainer({slides}){
  const[searchTerm,setSearchTerm]=useState(' ');
    const [profile,setProfile]=useState({});
    const [loading,setLoading]=useState(true);
  const {firebase}=useContext(FirebaseContext);
  const user=firebase.auth().currentUser||{};

  useEffect(()=>{
      setTimeout(()=>{
setLoading(false);
},3000);
  },[profile.displayName]);
    return (
         profile.displayName ?(<>
             {loading?<Loading src={user.photoURL}/>:(<Loading.ReleaseBody/>)}
         )
         <Header src="./public/misc/joker1.jpg" dontShowOnSmallViewPort>
           
           <Header.Frame>
             <Header.Group>
             <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/> 
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}></Header.Search>
              <Header.Profile>
                <Header.Picture src={user.photoURL}/>
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL}/>
                    <Header.TextLink>{user.displayName}</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={()=>firebase.auth.signOut()}>
                      SignOut
                    </Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
           </Header.Frame>
           <Header.Feature>
             <Header.FeatureCallOut>Watch Joker Now!</Header.FeatureCallOut>
             <Header.Text>
               lorcghdfvjihogkfjdhgdhfvbgjkbhgfcsgdhfyhuikjh
             </Header.Text>
           </Header.Feature>
         </Header>
         </>)
         : (<SelectProfileContainer user={user} setProfile={setProfile}/>
    ));
        }