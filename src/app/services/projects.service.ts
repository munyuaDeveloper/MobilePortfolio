import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor( private firestore: AngularFirestore) { }

  create_project(record) {
    return this.firestore.collection('my_projects').add(record);
  }

  read_project() {
    return this.firestore.collection('my_projects').snapshotChanges();
  }

  update_project(recordID, record) {
    this.firestore.doc('my_projects/' + recordID).update(record);
  }

  // tslint:disable-next-line: variable-name
  delete_project(record_id) {
    this.firestore.doc('my_projects/' + record_id).delete();
  }
}
