import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private firebaseAnalytics: FirebaseAnalytics) {

  }
  firebaseAnalytic(){
    this.firebaseAnalytics.logEvent('Firebase_analytics', {page: "dashboard"})
    .then((res: any)=>{
        console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })

    this.firebaseAnalytics.setCurrentScreen('Firebase Analytics')
    .then((res)=>{
      console.log("Sucessful", res)
    })
    .catch((err)=>{
      console.log('Error', err);
    })

    this.firebaseAnalytics.setUserId("12345")
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

}
