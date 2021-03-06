import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './modules/auth/auth.interceptor';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { DevicesListComponent } from './modules/components/device/devices-list/devices-list.component';
import { DevicesComponent } from './modules/components/device/devices/devices.component';
import { BreadcrumbComponent } from './modules/layout/breadcrumb/breadcrumb.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { NavigationComponent } from './modules/layout/nav/navigation.component';
import { SidebarComponent } from './modules/layout/sidebar/sidebar.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { NopagefoundComponent } from './modules/pages/nopagefound/nopagefound.component';
import { UserDevicesComponent } from './modules/pages/user-devices/user-devices.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
    NavigationComponent,
    SidebarComponent,
    BreadcrumbComponent,
    DashboardComponent,
    NopagefoundComponent,
    DevicesComponent,
    DevicesListComponent,
    UserDevicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // PerfectScrollbarModule
    NgbModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    /*{
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          dronRemoteGraph: {
            cache: new InMemoryCache(),
            link: httpLink.create({
              uri: 'http://localhost:1337/graphqlsdl',
            }),
          },
        };
      },
      deps: [HttpLink],
    },*/
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
