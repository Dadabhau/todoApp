import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoUserService } from 'src/app/app-services/todo-user.service';
import { TodoUser } from 'src/app/interfaces/todouser';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnChanges, OnInit {
  allList: TodoUser[] = [];
  error = null;
  filteredUsers: any[] = [];
  constructor(private toDoList: TodoUserService) {}
  ngOnInit(): void {
    this.fetchAllProduct();
  }
  ngOnChanges() {
    this.filterStatusAll();
  }
  identify(index: number, item: any) {
    return item.id;
  }
  // Get All Product call
  fetchAllProduct() {
    this.toDoList.getAllList().subscribe(
      (resp: TodoUser[]) => {
        this.allList = resp;
        this.filteredUsers = [...this.allList];
        console.log(this.allList);
      },
      (error: any) => {
        this.error = error;
        console.log(this.error);
      }
    );
  }
  filterStatusCom() {
    this.filteredUsers = [
      ...this.allList.filter((user) => user.completed === true),
    ];
    console.log(this.filteredUsers);
  }
  filterStatusNotCom() {
    this.filteredUsers = [
      ...this.allList.filter((user) => user.completed === false),
    ];
    console.log(this.filteredUsers);
  }
  filterStatusAll() {
    this.filteredUsers = this.allList;
    console.log(this.filteredUsers);
  }
}
