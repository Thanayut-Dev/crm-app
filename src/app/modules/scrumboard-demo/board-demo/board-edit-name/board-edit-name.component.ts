import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-board-edit-name',
  templateUrl: './board-edit-name.component.html',
  styleUrls: ['./board-edit-name.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardEditNameComponent implements OnInit {

  @ViewChild('nameInput') nameInputField;
  @Input() board;
  @Output() boardNameChanged: EventEmitter<any>;

  formActive: boolean;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    // Set the defaults
    this.formActive = false;
    this.boardNameChanged = new EventEmitter();
  }
  ngOnInit(): void {

  }

  /* Open form */
  openForm(): void {
    this.form = this.formBuilder.group({
      name: [this.board.name]
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
      this.board.name = this.form.getRawValue().name;
      this.board.uri = encodeURIComponent(this.board.name).replace(/%20/g, '-').toLowerCase();

      this.boardNameChanged.next(this.board.name);
      this.formActive = false;
    }
  }

}
