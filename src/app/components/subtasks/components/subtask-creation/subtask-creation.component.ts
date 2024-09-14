import {AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-subtask-creation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './subtask-creation.component.html',
  styleUrls: ['./subtask-creation.component.css']
})
export class SubtaskCreationComponent implements AfterViewInit{
  subtaskForm: FormGroup;
  subtasks: string[] = [];


  @Output() addSubtask = new EventEmitter<string>();
  @ViewChild('subtaskInput') subtaskInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder) {
    this.subtaskForm = this.fb.group({
      name: ['']
    });
  }

  ngAfterViewInit() {
    this.focusInput();
  }

  submit(): void {
    if (this.subtaskForm.valid) {
      const subtaskName = this.subtaskForm.get('name')?.value;
      if (subtaskName) {
        this.subtasks.push(subtaskName);
        this.addSubtask.emit(subtaskName);
        this.subtaskForm.reset();
      }
    }
  }

  focusInput() {
    if (this.subtaskInput) {
      this.subtaskInput.nativeElement.focus();
    }
  }
}
