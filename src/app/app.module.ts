import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemopagePageModule } from './demopage/demopage.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailPage } from './employee-detail/employee-detail.page';
import { EmployeeDetailPageModule } from './employee-detail/employee-detail.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [EmployeeDetailPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    DemopagePageModule,
    HttpClientModule,
    EmployeeDetailPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
