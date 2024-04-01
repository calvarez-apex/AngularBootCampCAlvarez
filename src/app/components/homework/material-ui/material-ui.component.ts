import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-material-ui',
  templateUrl: './material-ui.component.html',
  styleUrl: './material-ui.component.scss'
})
export class MaterialUIComponent {
  name:string = '';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(NameDialog, {
      data: this.name,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.name = result;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <h2 mat-dialog-title>Hey there!</h2>
  <mat-dialog-content>
    <p>What's your name?</p>
    <mat-form-field>
      <mat-label>Your Name</mat-label>
      <input matInput [(ngModel)]="data">
    </mat-form-field>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button (click)="onNoClick()">No Thanks</button>
    <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Ok</button>
  </mat-dialog-actions>
  `,
  // templateUrl: 'dialog-overview-example-dialog.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class NameDialog {
  constructor(
    public dialogRef: MatDialogRef<NameDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}