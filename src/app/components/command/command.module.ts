import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandComponent } from './command.component';
import { CommandFormDialogModule } from './command-form-dialog/command-form-dialog.module';
import { MatButtonModule, MatChipsModule, MatListModule, MatIconModule, MatSnackBarModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter);
dom.watch();

@NgModule({
  declarations: [
    CommandComponent,
  ],
  imports: [
    CommonModule,
    CommandFormDialogModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
  ]
})
export class CommandModule { }
