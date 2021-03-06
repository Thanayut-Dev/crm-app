import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-board-list-edit-name',
  templateUrl: './board-list-edit-name.component.html',
  styleUrls: ['./board-list-edit-name.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardListEditNameComponent implements OnInit {

  @ViewChild('nameInput') nameInputField;
  @Input() list;
  @Output() listNameChanged: EventEmitter<any>;

  formActive: boolean;
  form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    // Set the defaults
    this.formActive = false;
    this.listNameChanged = new EventEmitter();
  }

  ngOnInit(): void {

  }

  /* Open the form */
  openForm(): void {
    this.form = this._formBuilder.group({
      name: [this.list.name]
    });
    this.formActive = true;
    this.focusNameField();
  }

  /* Close the form */
  closeForm(): void {
    this.formActive = false;
  }

  /* Focus to the name field */
  focusNameField(): void {
    setTimeout(() => {
      this.nameInputField.nativeElement.focus();
    });
  }

  /* On form submit */
  onFormSubmit(): void {
    if (this.form.valid) {
      this.list.name = this.form.getRawValue().name;
      this.listNameChanged.next(this.list.name);
      this.formActive = false;
    }
  }

}
