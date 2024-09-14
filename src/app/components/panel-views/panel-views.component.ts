import {ChangeDetectorRef, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsViewComponent} from "../details-view/details-view.component";
import {PanelHeaderComponent} from "../panel-header/panel-header.component";

@Component({
  selector: 'app-panel-views',
  standalone: true,
  imports: [CommonModule, DetailsViewComponent, PanelHeaderComponent],
  templateUrl: './panel-views.component.html',
  styleUrls: ['./panel-views.component.css']
})
export class PanelViewsComponent {

  public selectedView: number = 1;

  //with Angular 17/18 now we use direct injects example:
  // #cdr = inject(ChangeDetectorRef);
  // # stands for private
  constructor(private cdr: ChangeDetectorRef) {}

  public selectView(viewNumber: number) {
    this.selectedView = viewNumber;
    this.cdr.detectChanges();
  }
}
