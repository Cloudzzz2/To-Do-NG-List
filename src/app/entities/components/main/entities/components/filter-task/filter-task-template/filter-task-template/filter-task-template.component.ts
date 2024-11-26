import { Component, inject, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DxAutocompleteModule, DxButtonModule, DxCheckBoxModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { IIconItem } from 'src/app/entities/interfaces/icon-item.interface';
import { LIcon } from 'src/app/entities/labels/icon.labels';
import { FormBuilderService } from 'src/app/entities/services/form-builder.service';

@Component({
  selector: 'app-filter-task-template',
  standalone: true,
  imports: [
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxButtonModule,
    DxAutocompleteModule,
    DxTextBoxModule,
    ReactiveFormsModule
  ],
  templateUrl: './filter-task-template.component.html',
  styleUrls: ['./filter-task-template.component.scss']
})
export class FilterTaskTemplateComponent {
  @Input({required:true})
  public dataSourceForSelectBox: IIconItem[] = [];

  @Input({required:true})
  public formControlNameForSelectBox: string = '';

  @Input({required:true})
  public labelName: string = '';

  @Input({required:true})
  public className: string = '';

  private readonly _formBuilderService: FormBuilderService = inject(FormBuilderService);
  
  public filtersForm = this._formBuilderService.filtersForm;

  protected readonly LIcon: typeof LIcon = LIcon;
}
