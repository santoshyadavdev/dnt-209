import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
// import { PhotosComponent } from './todos/photos/photos.component';
import { ApiInterceptor } from './api.interceptor';
import { FormControlDemoComponent } from './employee/form-control-demo/form-control-demo.component';
import { EmployeeOnboardingComponent } from './employee/employee-onboarding/employee-onboarding.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodosModule } from './todos/todos.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginComponent } from './login/login.component';
import { APP_CONFIG, APP_VALUE } from './valueProvider/config.service';
import { WelcomePipe } from './pipes/welcome.pipe';
import { PricefilterPipe } from './pipes/pricefilter.pipe';
import { HoverDirective } from './directives/hover.directive';
import { Dtn209Module } from 'dtn209';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,

    DepartmentComponent,
    ProductComponent,
    ProductListComponent,
    HeaderComponent,
    ContainerComponent,
    MainNavComponent,
    PagenotfoundComponent,
    LoginComponent,
    WelcomePipe,
    PricefilterPipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // TodosModule,
    EmployeeModule,
    AppRoutingModule,
    Dtn209Module,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: APP_CONFIG, useValue: APP_VALUE }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
