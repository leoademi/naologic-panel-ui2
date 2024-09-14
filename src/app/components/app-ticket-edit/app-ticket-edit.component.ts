import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {PanelHeaderComponent} from "../panel-header/panel-header.component";
import {PanelViewsComponent} from "../panel-views/panel-views.component";
import {SubtasksComponent} from "../subtasks/subtasks.component";

@Component({
  selector: 'app-app-ticket-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, PanelHeaderComponent, PanelViewsComponent, SubtasksComponent],
  templateUrl: './app-ticket-edit.component.html',
  styleUrls: ['./app-ticket-edit.component.css']
})
export class AppTicketEditComponent {
}
