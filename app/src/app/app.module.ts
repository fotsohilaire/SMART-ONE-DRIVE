import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';


registerLocaleData(fr);
import { AngularFireModule } from '@angular/fire';
import{ AngularFireAuthModule}from '@angular/fire/auth';
import{AngularFireDatabaseModule}from '@angular/fire/database';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
// For Firebase JS SDK v7.20.from '@angular/fire';0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkYLMOY98eOW0pxsZkrVQLD1-nBvWe1J4",
  authDomain: "sogelec-new-tech-96318.firebaseapp.com",
  projectId: "sogelec-new-tech-96318",
  storageBucket: "sogelec-new-tech-96318.appspot.com",
  messagingSenderId: "524695683077",
  appId: "1:524695683077:web:426b3f14c1306c59cadc6c",
  measurementId: "G-98YZG2M62R"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent,
    
      

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzGridModule,
    NzTabsModule,
    NzTableModule,
    NzCalendarModule,
    NzImageModule,
    NzPaginationModule,




  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
