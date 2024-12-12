import { Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilderService } from '../../../../../services/form-builder.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AppLib } from 'src/app/entities/libs/app.lib';
import { DxAutocompleteModule, DxButtonModule, DxCheckBoxModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { LFilterForm } from 'src/app/entities/labels/filter-form.label';
import { IItem } from 'src/app/entities/interfaces/item.interface';
import { IIconItem } from 'src/app/entities/interfaces/icon-item.interface';
import { LIcon } from 'src/app/entities/labels/icon.labels';
import { CustomFieldSelectBoxComponent } from './entities/components/custom-field-select-box/custom-field-select-box';
import { IFilterForm } from 'src/app/entities/interfaces/filter-form.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


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
    ReactiveFormsModule
  ],
  templateUrl: './filter-task.component.html',
  styleUrls: ['./filter-task.component.scss']
})
export class FilterTaskComponent implements OnInit {
  private readonly _formBuilderService: FormBuilderService = inject(FormBuilderService);
  private readonly _destroyRef: DestroyRef = inject(DestroyRef);


  @Output()
  public filtersFormData: EventEmitter<IFilterForm> = new EventEmitter();

  public filtersForm = this._formBuilderService.filtersForm;
  public prioritiesFilter: IItem[] = AppLib.priorityFilterVariants;
  public dates: IIconItem[] = AppLib.dateSortVariants;
  public priorities: IIconItem[] = AppLib.prioritySortVariants; 

  protected readonly LFilterForm: typeof LFilterForm = LFilterForm;
  protected readonly LIcon: typeof LIcon = LIcon;

  public ngOnInit(): void {
    this.filtersForm.valueChanges.pipe(
      takeUntilDestroyed(this._destroyRef)
    ).subscribe(() => {
      this.filtersFormData.emit(this.filtersForm.getRawValue());
  });
  }
}
