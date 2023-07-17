import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-post',
  templateUrl: './dialog-post.component.html',
  styleUrls: ['./dialog-post.component.css']
})
export class DialogPostComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  edit(){
    alert('hi')
  }
}
