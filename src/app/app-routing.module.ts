import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnDocentesComponent } from './alumn-docentes/alumn-docentes.component';
import { ContenidoPrincipalComponent } from './contenido-principal/contenido-principal.component';
import { PanelAdminComponent } from './InterfazAlumnDocente/panel-admin/panel-admin.component';
import { RegistrarActividadesComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-actividades/registrar-actividades.component';
import { RegistrarAlumnosComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-alumnos-menu/registrar-alumnos.component';
import { RegistrarNoticiasComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-noticias/registrar-noticias.component';
import { LoginComponent } from './login/login.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  { path: '', component: ContenidoPrincipalComponent, pathMatch: 'full' },
  { path: 'sobreNosotros', component: SobreNosotrosComponent },
  { path: 'AlumnoDocente', component: AlumnDocentesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'PanelAdmin', component: PanelAdminComponent },
  { path: 'RegistrarAlumno', component: RegistrarAlumnosComponent },
  { path: 'RegistroActividades', component: RegistrarActividadesComponent },
  { path: 'RegistrarNoticias', component: RegistrarNoticiasComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
