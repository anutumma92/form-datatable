import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
//import { of } from 'rxjs/observable/of';

import { Users } from './profile-editor-data';

import { DataTable, DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    userName: ['', Validators.required],
    email: ['', Validators.required],
    fullName: ['', Validators.required],
    other_details: this.fb.group({
      country: ['', Validators.required],
      telephone_number: ['', Validators.required],
      dob: ['', Validators.required]
    })
  });


  users_arr = [];
  yearLimit = 1999;
    userResource = new DataTableResource(this.users_arr);
    users = [];
    userCount = 0;

    @ViewChild(DataTable) usersTable: DataTable;
    constructor(private fb: FormBuilder) { 
        this.rowColors = this.rowColors.bind(this);
        this.userResource.count().then(count => this.userCount = count);

    }

    reloadUsers(params) {
    console.log(params);
        this.userResource.query(params).then(users => this.users = users);
        console.log(this.users);
    }

    // custom features:
    userClicked(user) {
        alert(user.model);
    }

    rowColors(user) {
        if (user.year >= this.yearLimit) {
          return 'rgb(255, 255, 197)';
        }
    }
  

  /*updateProfile() {
    this.profileForm.patchValue({
      userName: 'Nancy',
      other_details: {
        street: '123 Drew Street'
      }
    });
  }*/

  /*addAlias() {
    this.aliases.push(this.fb.control(''));
  }*/

  onSubmit() {
  
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    console.warn(this.profileForm.value.other_details);
    console.warn(this.profileForm.value.other_details.country);
    

    var temp_arr = {
      userName: this.profileForm.value.userName,
      email: this.profileForm.value.email,
      fullName: this.profileForm.value.fullName,
      country: this.profileForm.value.other_details.country,
      telephone_number: this.profileForm.value.other_details.telephone_number,
      dob: this.profileForm.value.other_details.dob
    };

    this.users_arr.push(temp_arr);

    var params = {
    limit:2,
    offset:0
    };
    this.reloadUsers(params);
    this.profileForm.reset();

  }
}
