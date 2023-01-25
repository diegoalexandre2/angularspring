import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialos',
  templateUrl: './error-dialos.component.html',
  styleUrls: ['./error-dialos.component.scss']
})
export class ErrorDialosComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

}
