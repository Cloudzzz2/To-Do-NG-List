import { Component, inject, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DxAutocompleteModule, DxButtonModule, DxCheckBoxModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { IIconItem } from 'src/app/entities/interfaces/icon-item.interface';
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
  private readonly _formBuilderService: FormBuilderService = inject(FormBuilderService);

  @Input({required:true})
  public dataSourceForSelectBox: IIconItem[] = [];

  @Input({required:true})
  public formControlForSelectBox: FormControl<number | null> = this._formBuilderService.сontrol;

  @Input({required:true})
  public labelName: string = '';

  @Input({required:true})
  public className: string = '';

  protected readonly LIcon: typeof LIcon = LIcon;
}
