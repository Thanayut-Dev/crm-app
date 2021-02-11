import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactChatContentService implements Resolve<any> {

  private onDataChanged$ = new BehaviorSubject<any[]>([]);
  public onDataChangedObservable$ = this.onDataChanged$.asObservable();

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log("resolve");
    this.getUsersData();
    return;
  }

  getUsersData() {

    let body = [
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "pet",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "lex",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
      {
        "createby": "Theerasak Tubrit",
        "updateby": "Theerasak Tubrit",
        "_id": "60117256f8fdce329c904b0e",
        "contactName": "stam",
        "contactImage": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        "contactCompany": "601171a8f8fdce329c904b0d",
        "contactPhoneNo": "099-77555558",
        "contactEmail": "test220@gmail.com",
        "contactLineId": "Pet_20",
        "contactAddress": "467/4",
        "created": "2021-01-27T14:01:58.152Z",
        "__v": 0,
        "id": "60117256f8fdce329c904b0e",
        "updated": "2021-01-27T14:04:53.059Z",
        "layout": "chats"
      },
    ]
    // return this.onDataChanged$.next(body);
    return body;
  }

}
