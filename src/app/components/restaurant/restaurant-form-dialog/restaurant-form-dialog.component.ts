import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IRestaurant } from 'src/app/models/restaurant';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './restaurant-form-dialog.component.html',
  styleUrls: ['./restaurant-form-dialog.component.scss']
})
export class RestaurantFormDialogComponent implements OnInit {
  
  private restaurantForm: FormGroup;
  restaurant: IRestaurant;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IRestaurant, 
    public dialogRef: MatDialogRef<RestaurantFormDialogComponent>,
    private formBuilder: FormBuilder) {
    if (data) {
      this.restaurant = data;
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  /* Init restaurant form. */
  private initForm(): void {
    this.restaurantForm = this.formBuilder.group({ 
      id: new FormControl(this.restaurant ? this.restaurant.id : null),
      name: new FormControl(this.restaurant ? this.restaurant.name : '', [Validators.required]),
      address: new FormControl(this.restaurant ? this.restaurant.address : '', [Validators.required]),
      mailAddress: new FormControl(this.restaurant ? this.restaurant.mailAddress : '', [Validators.required]),
      phone: new FormControl(this.restaurant ? this.restaurant.phone : '', [Validators.required]),
      description: new FormControl(this.restaurant ? this.restaurant.description : '', [Validators.required]),
    });
  }

  public isAnUpdate(): boolean {
    return this.restaurant !== undefined && this.restaurant !== null;
  }

  public isACreation(): boolean {
    return !this.isAnUpdate();
  }

  cancel() {
    this.dialogRef.close();
  }

  postRestaurant() {
    this.dialogRef.close(this.restaurantForm.value);
  }
}

