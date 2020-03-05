import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ICommand } from '../models/command';

@Component({
  selector: 'app-command-form',
  templateUrl: './command-form.component.html',
  styleUrls: ['./command-form.component.scss']
})
export class CommandFormComponent implements OnInit {

  private commandForm: FormGroup;

  @Output()
  commandPosted = new EventEmitter<ICommand>();

  @Input()
  readonly restaurants: any[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  /* Init restaurant form. */
  private initForm(): void {
    this.commandForm = this.formBuilder.group({ 
      restaurantId: new FormControl('', [Validators.required]),
      count: new FormControl(0, [Validators.required]),
      date: new FormControl('', [Validators.required])
    });
  }

  postCommand() {
    this.commandPosted.emit(this.commandForm.value);
  }

  onRestaurantSelected(event: any) {
    this.commandForm.value['restaurantId'] = event.target.value;
  }

}
