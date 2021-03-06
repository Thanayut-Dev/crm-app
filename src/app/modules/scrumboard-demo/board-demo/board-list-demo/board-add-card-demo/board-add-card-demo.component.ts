import { Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-board-add-card-demo',
  templateUrl: './board-add-card-demo.component.html',
  styleUrls: ['./board-add-card-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardAddCardDemoComponent implements OnInit {

  @ViewChild('nameInput') nameInputField;
  @Output() cardAdded: EventEmitter<any>;
  formActive: boolean;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    // Set the defaults
    this.formActive = false;
    this.cardAdded = new EventEmitter();
  }
  ngOnInit(): void {

  }

  /* Open the form */
  openForm(): void {
    this.form = this.formBuilder.group({
      name: ''
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

  /* Close the form */
  closeForm(): void {
    this.formActive = false;
  }

  /* On form submit */
  onFormSubmit(): void {
    if (this.form.valid) {
      const cardName = this.form.getRawValue().name;
      this.cardAdded.next(cardName);
      this.formActive = false;
    }
  }

}
