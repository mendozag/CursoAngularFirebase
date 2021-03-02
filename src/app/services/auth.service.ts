import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from "firebase/app";

@Injectable({ providedIn: "root" })
export class AuthService {
  public usuario: any = {};

  constructor(public _afAuth: AngularFireAuth) {
    this._afAuth.authState.subscribe(user => {
      console.log("Estado Autorizacion: ", user);

      if (!user) {
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
      this.usuario.email = user.email;
      this.usuario.photoURL = user.photoURL;
    });
  }

  login() {
    this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.usuario = {};
    this._afAuth.auth.signOut();
  }

  isLogged() {
    if (this.usuario.uid) {
      console.log("Bienvenido usuario ", this.usuario.nombre);
      return true;
    } else {
      console.log("No eres usuario logueado");
      return false;
    }
  }
}
