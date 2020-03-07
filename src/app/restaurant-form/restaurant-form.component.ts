import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { IRestaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss']
})
export class RestaurantFormComponent implements OnInit {

  private restaurantForm: FormGroup;
  
  @Output()
  restaurantPosted = new EventEmitter<IRestaurant>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  /* Init restaurant form. */
  private initForm(): void {
    this.restaurantForm = this.formBuilder.group({ 
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      mailAddress: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    });
  }

  postRestaurant() {
    this.restaurantPosted.emit(this.restaurantForm.value);
  } 
}
