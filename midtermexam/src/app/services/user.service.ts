import { Injectable } from '@angular/core';
import { AngularFireStore, AngularFireStoreCollection, AngularFirestormDocument },
from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { User } from  '../models/User';
@Injectable()
export class UserService {

itemsCollection: AngularFireStoreCollection<User>;
items: Observable<User[]>;
constructor(public midtermexam: MidtermExam) { 
this.users = this.midtermexam.collection('users').valueChanges(); 
}
getUsers(){
return this.users;
}
}


