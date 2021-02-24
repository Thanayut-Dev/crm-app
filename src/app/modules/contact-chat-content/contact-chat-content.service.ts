import { NgZone } from '@angular/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { SseService } from '../../shared/services/sse.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactChatContentService implements Resolve<any> {

  private onDataChanged$ = new BehaviorSubject<any[]>([]);
  public onDataChangedObservable$ = this.onDataChanged$.asObservable();

  // url: string = 'http://localhost:3001/events';

  constructor(
    private zone: NgZone,
    private ssService: SseService,
    private http: HttpClient
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('resolve');
    // this.getUsersData();
    // this.getServerEventSource();
    // return;
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
      }
    ]
    // return this.onDataChanged$.next(body);
    return body;
  }

  getServerEventSource(url: string) {
    return Observable.create(observer => {
      const eventSource = this.ssService.getEventSource(url);
      // console.log(eventSource);

      // eventSource.onopen = open => {
      //   console.log(open);
      //   this.zone.run(() => {
      //     observer.next(open);
      //   });
      // };

      eventSource.addEventListener("chat", event => {
        // console.log(event);
        this.zone.run(() => {
          observer.next(event);
        });
      })

      // eventSource.addEventListener("init", function (e) {
      //   console.log("Timestamp event Received.Ready State is " + e);
      // })

      eventSource.onmessage = event => {
        // console.log(event);
        this.zone.run(() => {
          observer.next(event);
        });
      };

      eventSource.onerror = error => {
        // console.log(error);
        this.zone.run(() => {
          observer.error(error);
        });
      };

    })
  }

  createData(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3001/sentevents', body).subscribe((res: any) => {
        resolve(res.data);
      }, reject);
    })
  }

}
