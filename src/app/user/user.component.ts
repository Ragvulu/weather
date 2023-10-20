import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonDataService } from '../common-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {


  //variables
  showForm = false;
  userform: FormGroup | any;
  data: any;
  isedit: boolean = false;
  username: any;
  usernameShow: any;
  text: any;
  userdata: any;
  submitted1 = false;
  p: number = 1;
  collection: any;
  userSearch: any;
  formstatus: any


  constructor(private userservice: CommonDataService) { }

  // user FormGroup
  ngOnInit(): void {
    this.userform = new FormGroup({
      'name': new FormControl('', [Validators.required, this.nameCheck, Validators.minLength(2)]),
      'email': new FormControl('', [Validators.required, this.emailValidation]),
      'phone': new FormControl('', [this.mobileNumber, Validators.maxLength(10), Validators.required],),
      'city': new FormControl('', [Validators.required, this.nameCheck, Validators.minLength(2)]),
    })
    this.getdata();
  }

  // All user data
  getdata() {
    this.userservice.getdata().subscribe(res => {
      this.data = res;
    })
  }

  //posting user data
  sendata(userform: FormGroup) {
    this.username = this.userform.value.name;
    if (this.userform.invalid) {
      this.submitted1 = true;
      this.userform.reset()
    } else {
      this.submitted1 = false;
      this.userservice.postdata(this.userform.value).subscribe(res => {
        this.data.unshift(this.userform.value);
        this.showForm = false;
        this.getdata();
        this.showSuccess();

      })
      this.userform.reset()

    }

  }

  //updateing user data
  update(user: any) {
    this.userform.id = user.id;
    if (this.userform.invalid) {
      this.submitted1 = true;
      this.userform.reset()
    } else {
      this.submitted1 = false;
      this.userservice.update(this.userform.id, this.userform.value).subscribe(res => {
        this.showInfo();
        this.getdata();
        this.showForm = false;

      })
    }

  }
  // display user form
  addmodel() {
    this.isedit = false;
    this.showForm = true;
    this.text = "Submit"
    this.formstatus = "Add New User"
    this.userform.reset();
  }
  // editing user data
  edit(i: any, user: any) {
    this.text = "Update"
    this.formstatus = "Edit User Data"
    this.isedit = true;
    this.userform.id = user.id;
    this.userform.setValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.city
    })
    this.showForm = true;

  }
  // deleteing user data

  delete(index: number, user: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.userform.id = user.id;
        this.userservice.delete(this.userform.id, user).subscribe(res => {
          this.data.splice(index, 1);
          this.getdata();
          Swal.fire(
            'Deleted!',
            'User id (' + this.userform.id + ') Data Has Successfully  deleted.',
            'success'
          )

        })
      }
    })
  }



  // cancle button
  cancle() {
    this.showForm = false;
  }

  //update alert
  public showInfo(): void {
    Swal.fire({
      icon: 'success',
      title: 'User (' + this.userform.value.name + ') Data Has Successfully Updated',

    })
  }
  //user data saved alert
  public showSuccess(): void {
    Swal.fire({
      icon: 'success',
      title: 'User Saved Successfully',

    })
  }


  // ...............input field's Validators............ //

  // name  Validators
  nameCheck(c: any) {
    let pattern = /^[a-zA-Z][a-zA-Z\\s]+$/
    if (pattern.test(c.value)) {
      return null;
    }
    return { 'nameCheck': true }

  }
  // mobile number Validators
  mobileNumber(c: any) {
    let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (pattern.test(c.value)) {
      return null;
    }
    return { 'mobileNumberCheck': true }

  }
  /* custom validation for  email */
  emailValidation(c: any) {
    let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
    if (pattern.test(c.value)) {
      return null;
    }
    return { 'emailCheck': true }

  }



}