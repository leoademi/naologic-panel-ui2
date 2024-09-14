import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-editable-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.css']
})
export class EditableFieldComponent {
  @Input() formGroup: FormGroup | undefined;
  @Input() fieldName: string = '';
  @Input() label: string = '';
  @Input() icon: string = '';
  @Output() save = new EventEmitter<string>();

  //Also with Angular 17/18 now we have Signals Input
  // Example:
  // public fieldName = input<string>('');
  // we can also make it required or non required

  public isEditing = false;

  get formControl(): FormControl {
    const control = this.formGroup?.get(this.fieldName) as FormControl | undefined;
    if (control === undefined || control === null) {
      throw new Error(`Control for ${this.fieldName} not found.`);
    }
    return control;
  }
  public toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.save.emit(this.fieldName);
    }
  }

  public saveChanges(): void {
    this.isEditing = false;
    this.save.emit(this.fieldName);
  }
}
