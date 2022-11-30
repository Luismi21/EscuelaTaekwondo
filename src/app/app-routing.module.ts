import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnDocentesComponent } from './admin-alumn-docentes-menu/alumn-docentes.component';
import { ContenidoPrincipalComponent } from './contenido-principal-noticias/contenido-principal.component';
import { FormAgregarAlumnoComponent } from './InterfazAlumnDocente/FormulariosRegistro/form-agregar-alumno/form-agregar-alumno.component';
import { TableVerAlumnosComponent } from './InterfazAlumnDocente/FormulariosRegistro/table-ver-alumnos/table-ver-alumnos.component';
import { PanelAdminComponent } from './InterfazAlumnDocente/panel-admin-Bienvenida/panel-admin.component';

import { RegistrarActividadesComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-actividades-menu/registrar-actividades.component';
import { RegistrarAlumnosComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-alumnos-menu/registrar-alumnos.component';
import { RegistrarNoticiasComponent } from './InterfazAlumnDocente/RegistrarAlumnos/registrar-noticias-menu/registrar-noticias.component';
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
  {path: 'FormSgregarAlumno', component: FormAgregarAlumnoComponent},
  {path: 'FormVerAlumno', component: TableVerAlumnosComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
