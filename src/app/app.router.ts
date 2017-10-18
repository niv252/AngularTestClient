import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {RegistrationComponent} from "./RegistrationComponent/registration.component";
import {NotFoundComponent} from "./NotFoundComponent/notFound.component";
import {HomeComponent} from "./HomeComponent/home.component";
import {ShowUsersComponent} from "./ShowUsersComponent/showUsers.component";

export const router: Routes = [
  {path: '', component : HomeComponent},
  {path:'Registration', component: RegistrationComponent},
  {path:'ShowUsers', component: ShowUsersComponent},
  {path:'**', component: NotFoundComponent}
];

export  const routes: ModuleWithProviders = RouterModule.forRoot(router);
