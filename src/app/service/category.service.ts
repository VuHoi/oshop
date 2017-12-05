import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class CategoryService {

  constructor(private db :AngularFireDatabase) { }
getCategory()
{
  return this.db.list('/categories',{
    query:{
      orderByChild :'name'
    }
  });

}
}
