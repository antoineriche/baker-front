import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {

  private message: string;

  constructor(public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any) {
      this.message = 'Message';
      if (data) {
        if (data.message) {
          this.message = data.message;
        }
      }
  }

  ngOnInit(): void {
    console.log('on init');
  }
  
}
