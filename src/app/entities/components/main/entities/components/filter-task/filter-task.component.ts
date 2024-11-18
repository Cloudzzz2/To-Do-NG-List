import { Component, inject } from '@angular/core';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppLib } from 'src/app/entities/libs/app.lib';
import { DxAutocompleteModule, DxButtonModule, DxCheckBoxModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';


@Component({
  selector: 'app-filter-task',
  standalone: true,
  imports: [
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxTextBoxModule,
    ReactiveFormsModule
  ],
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.scss']
})
export class FilterTaskComponent {
  private readonly _formBuilderService = inject(FormBuilderService);
  
  public filtersForm: FormGroup = this._formBuilderService.filtersForm;
  public priorityFilter = AppLib.priorityFilterVariants;
  public prioritySelect = AppLib.priorityVariants;
  public dateSelect = AppLib.dateSortVariants;
  public prioritySortSelect = AppLib.prioritySortVariants; 
}
