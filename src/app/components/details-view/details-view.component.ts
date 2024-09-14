import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {EditableFieldComponent} from "./components/editable-field/editable-field.component";
import {SubtasksComponent} from "../subtasks/subtasks.component";

@Component({
  selector: 'app-details-view',
  standalone: true,
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css'],
  imports: [CommonModule, ReactiveFormsModule, EditableFieldComponent, SubtasksComponent],
})
export class DetailsViewComponent implements OnInit {
  detailsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.detailsForm = this.fb.group({
      status: [{ value: 'Unpaid', disabled: true }], // Non-editable
      assignee: ['Brian Griffin', [Validators.required]],
      coOwner: ['Peter Griffin', [Validators.required]],
      importance: ['Very Urgent', [Validators.required]],
      customerName: ['Leonard', [Validators.required, Validators.minLength(3)]],
      invoiceId: ['19823190', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  public saveChanges(field: string): void {
    console.log(`Saved ${field}:`, this.detailsForm?.get(field)?.value);
  }
}
