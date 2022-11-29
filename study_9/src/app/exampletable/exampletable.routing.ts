import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./pages/create/create.component";
import { ExampletableComponent } from "./pages/list/exampletable.component";
import { UpdateComponent } from "./pages/update/update.component";


const routes: Routes = [
  { path: '', component: ExampletableComponent },
  { path: 'create', component: CreateComponent },
  { path: 'update/:id', component: UpdateComponent },

];

export const ExampleTableRoutes = RouterModule.forChild(routes);