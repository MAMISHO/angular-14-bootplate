import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './modules/auth/auth-guard.service';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './modules/pages/nopagefound/nopagefound.component';
import { UserDevicesComponent } from './modules/pages/user-devices/user-devices.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'devices',
        component: UserDevicesComponent,
        canActivate: [AuthGuard],
      },
      // { path: 'grafica1', component: Grafica1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ],
  },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
