import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoForm !: FormGroup;
  tasks : any [] = [];
  inprogress : any [] = [];
  done : any [] = [];

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item : ['', Validators.required]
    })
  }

}
