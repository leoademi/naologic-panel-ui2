import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SubtaskCreationComponent} from "./components/subtask-creation/subtask-creation.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ProgressBarModule} from "primeng/progressbar";

@Component({
  selector: 'app-subtasks',
  templateUrl: './subtasks.component.html',
  standalone: true,
  imports: [
    SubtaskCreationComponent,
    ReactiveFormsModule,
    NgForOf,
    NgIf,
    ProgressBarModule,
    NgClass,
    FormsModule
  ],
  styleUrls: ['./subtasks.component.css']
})
export class SubtasksComponent {
  public subtasksForm: FormGroup;
  public subtasks: FormArray;

  public maxSubtasks: number = 4;

  public editIndex: number | null = null;

  public isEditing = false;

  public tempName = '';


  // Reference to SubtaskCreationComponent
  @ViewChild(SubtaskCreationComponent) subtaskCreationComponent!: SubtaskCreationComponent;


  constructor(private fb: FormBuilder) {
    this.subtasksForm = this.fb.group({
      progress: [0],
      subtasks: this.fb.array([])
    });
    this.subtasks = this.subtasksForm.get('subtasks') as FormArray;
    this.tempName = this.subtasksForm.get('name')?.value;
  }

  get progress(): number {
    return this.subtasksForm.get('progress')?.value || 0;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }


  public addSubtask(name: string): void {
    this.subtasks.push(this.fb.group({
      name: [name],
      completed: [false]
    }));
    this.updateProgress();
    this.subtaskCreationComponent.focusInput();

  }

  public removeSubtask(index: number): void {
    this.subtasks.removeAt(index);
    this.updateProgress();
    this.editIndex = null;
  }

  public isNewSubtask(control: FormGroup): boolean {
    return !control.get('id')?.value;
  }

  editTask(index: number): void {
    this.editIndex = index; // Enter edit mode for the selected task
  }

  saveTask(index: number): void {
    this.editIndex = null;
  }

  public isFormGroup(control: AbstractControl): control is FormGroup {
    return control instanceof FormGroup;
  }

  public updateProgress(): void {
    const totalSubtasks = this.subtasks.length;
    const progressPercentage = (totalSubtasks / this.maxSubtasks) * 100;
    this.subtasksForm.patchValue({ progress: progressPercentage });
  }

  public isMaxSubtasks(): boolean {
    return this.subtasks.length >= this.maxSubtasks;
  }

  public toggleCompletion(control: FormGroup): void {
    const completed = control.get('completed')?.value;
    control.patchValue({ completed: !completed });
  }

  protected readonly FormGroup = FormGroup;
}


