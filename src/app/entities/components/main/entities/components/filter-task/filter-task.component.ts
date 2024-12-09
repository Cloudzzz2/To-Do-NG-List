import { Component, inject } from '@angular/core';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppLib } from 'src/app/entities/libs/app.lib';
import { DxAutocompleteModule, DxButtonModule, DxCheckBoxModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { LFilterForm } from 'src/app/entities/labels/filter-form.label';
import { IItem } from 'src/app/entities/interfaces/item.interface';
import { IIconItem } from 'src/app/entities/interfaces/icon-item.interface';
import { LIcon } from 'src/app/entities/labels/icon.labels';
import { CustomFieldSelectBoxComponent } from './entities/components/custom-field-select-box/custom-field-select-box';


@Component({
  selector: 'app-filter-task',
  standalone: true,
  imports: [
    CustomFieldSelectBoxComponent,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxTextBoxModule,
    ReactiveFormsModule,
  ],
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.scss']
})
export class FilterTaskComponent {
  private readonly _formBuilderService: FormBuilderService = inject(FormBuilderService);
  
  public filtersForm = this._formBuilderService.filtersForm;
  public prioritiesFilter: IItem[] = AppLib.priorityFilterVariants;
  public dates: IIconItem[] = AppLib.dateSortVariants;
  public prioritiesSortSelect: IIconItem[] = AppLib.prioritySortVariants; 

  protected readonly LFilterForm: typeof LFilterForm = LFilterForm;
  protected readonly LIcon: typeof LIcon = LIcon;
}
