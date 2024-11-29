import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DxAutocompleteModule, DxButtonModule, DxCheckBoxModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { IIconItem } from 'src/app/entities/interfaces/icon-item.interface';
import { LFilterForm } from 'src/app/entities/labels/filter-form.label';
import { LIcon } from 'src/app/entities/labels/icon.labels';
import { FormBuilderService } from 'src/app/entities/services/form-builder.service';

@Component({
  selector: 'app-custom-field-select-box',
  standalone: true,
  imports: [
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxTextBoxModule,
    ReactiveFormsModule
  ],
  templateUrl: './custom-field-select-box.html',
  styleUrls: ['./custom-field-select-box.scss']
})
export class CustomFieldSelectBoxComponent {
  @Input({required:true})
  public dataSourceForSelectBox: IIconItem[] = [];

  @Input({required:true})
  public formControlNameForSelectBox: LFilterForm = <LFilterForm>{};

  @Input({required:true})
  public labelName: string = '';

  @Input({required:true})
  public className: string = '';

  private readonly _formBuilderService: FormBuilderService = inject(FormBuilderService);
  
  public filtersForm = this._formBuilderService.filtersForm;

  protected readonly LIcon: typeof LIcon = LIcon;
}
