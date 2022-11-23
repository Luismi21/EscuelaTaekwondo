import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnDocentesComponent } from './alumn-docentes/alumn-docentes.component';
import { ContenidoPrincipalComponent } from './contenido-principal/contenido-principal.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: '', component: ContenidoPrincipalComponent, pathMatch: 'full' },
  { path: 'sobreNosotros', component: SobreNosotrosComponent },
  { path: 'AlumnoDocente', component: AlumnDocentesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
