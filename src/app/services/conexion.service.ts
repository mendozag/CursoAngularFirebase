import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Producto } from "../interfaces/producto";
//import { map } from "rxjs/operator/map";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ConexionService {
  private productosCollection: AngularFirestoreCollection<Producto>;
  productos: Observable<Producto[]>;

  //Esto se utiliza para el metodo deleteProducto
  private productDoc: AngularFirestoreDocument<Producto>;

  constructor(private _afs: AngularFirestore) {
    this.productosCollection = _afs.collection<Producto>("productos");
    //this.productos = this.productosCollection.valueChanges();
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  listaProductos() {
    return this.productos;
  }

  addProducto(producto: Producto) {
    this.productosCollection.add(producto);
  }

  deleteProducto(producto) {
    this.productDoc = this._afs.doc<Producto>(`productos/${producto.id}`);
    this.productDoc.delete();
  }

  editProducto(producto) {
    console.log("Producto en editProducto: ", producto);

    this.productDoc = this._afs.doc<Producto>(`productos/${producto.id}`);
    this.productDoc.update(producto);
  }
}
