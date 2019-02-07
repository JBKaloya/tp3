import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profil from './components/Profil';
import Id from './components/Profil'


//Here I will define a user const containing static values
const user = {
   info: {
         forname: "JB",
         name: "Kaloya",
         birth: "08/12/1997" 
     },
    assets :{
     src: "https://scontent-cdt1-1.cdninstagram.com/vp/4333f7eb67dddd6cc7bcf1f18138c863/5CC741D9/t51.2885-15/e35/47010483_300633277225274_7317252971327124091_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com",
     alt: "Hype"
   },
      
    post: {
     content:"Hi I am a social media post ..........",
     interaction: "Vincent"
   }
 }


class App extends Component {
  render() {
    return (
      <div className="fbctn">
         <Users name={user.info.forname} />
         <Post item={user.post} />
       </div>
    );
  }
}

export default App;
