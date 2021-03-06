import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-board-add-list',
  templateUrl: './board-add-list.component.html',
  styleUrls: ['./board-add-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardAddListComponent implements OnInit {

  @ViewChild('nameInput') nameInputField;
  @Output() listAdded: EventEmitter<any>;

  formActive: boolean;
  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    // Set the defaults
    this.formActive = false;
    this.listAdded = new EventEmitter();
  }
  ngOnInit(): void {

  }

  /* Open form */
  openForm(): void {
    this.form = this._formBuilder.group({
      name: ['']
    });
    this.formActive = true;
    this.focusNameField();
  }


  /* Focus to the name field */
  focusNameField(): void {
    setTimeout(() => {
      this.nameInputField.nativeElement.focus();
    });
  }

  /* Close form */
  closeForm(): void {
    this.formActive = false;
  }

  /* On form submit */
  onFormSubmit(): void {
    if (this.form.valid) {
      this.listAdded.next(this.form.getRawValue().name);
      this.formActive = false;
    }
  }

}
