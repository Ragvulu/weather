import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from '../common-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {
  constructor(private _dataservice: CommonDataService) { }
  showForm = false;
  userform: FormGroup | any;
  data: any;
  isedit: boolean = false;
  username: any;
  usernameShow: any;
  text: any;


  addmodel() {
    this.isedit = false;
    this.showForm = true
    this.text = "SUBMIT1"
    this.userform.reset();
  }
}