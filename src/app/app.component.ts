import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  productos: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.productos = firestore.collection("productos").valueChanges();
    console.log(this.productos);
  }
}
