import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//Componentes
import { HomeComponent } from "./components/home/home.component";
import { AdministracionComponent } from "./components/administracion/administracion.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./services/auth-guard.service";

//Definir las rutas
const appRoutes: Routes = [
  //cuando la ruta está vacía
  { path: "", component: HomeComponent },
  //cuando se pone el nombre del componente en la ruta
  { path: "home", component: HomeComponent },
  {
    path: "administracion",
    component: AdministracionComponent,
    canActivate: [AuthGuard]
  },
  { path: "login", component: LoginComponent },
  //Cuando que no existe
  { path: "**", component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
