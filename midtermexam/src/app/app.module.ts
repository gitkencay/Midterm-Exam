import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
	AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
