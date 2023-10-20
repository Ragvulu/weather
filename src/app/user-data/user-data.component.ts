import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../common-data.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  showForm = false;
  users: any;
  constructor(private mobileservice: CommonDataService, private ref1: FormBuilder) { }
  ngOnInit(): void {
     /* this.getAllUsers(); */
  }


  ref = this.ref1.group({
    firstname: ['', [Validators.required, Validators.minLength(2)]],


  })
  /*

  submitForm() {
    var type = this.ref.value.firstname == null ? 'add' : 'update';
    console.log(this.ref.value)
    this.mobileservice.AddupdateUser(this.ref.value, type).subscribe(data => {
      if (type == 'Add') {
        alert("Added")
      }
      else{
        alert
      }
      alert('Form submitted.');
      this.ref.reset();
      console.log(this.ref.value);
      this.showForm = false;
      this.getAllUsers();


    })
  }
  open() {
    this.showForm = true;
  }

  getAllUsers() {
    console.log(this.ref.value)
    this.mobileservice.getallusers().subscribe(data => {
      console.log("users", data);
      this.users = data;
    })
  }
  deleteuserbyid(id: any) {
    console.log(this.ref.value)
    this.mobileservice.deletebyuser(id).subscribe(data => {
      alert("user deleted")
      this.getAllUsers();

    })
  }

  closeForm() {
    this.showForm = false;

  }

  getuserByID(id: any) {
    console.log(this.ref.value)
    this.mobileservice.userupdate(id).subscribe(data => {
      alert("user data done")
      console.log("user", data)
      this.ref.patchValue({
        firstname: data.firstname
      })
    })
  }
  */
}
