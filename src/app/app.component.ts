import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface User {
  name: string,
  age: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks!: User[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3000/data').subscribe(data => {
      this.tasks = data;
    });
  }
  //comment
  addNewData() {
    this.http.put<User[]>('http://localhost:3000/data', { name: 'Alice', age: 20 })
      .subscribe(data => {
        this.tasks = data;
      });
  }

}
