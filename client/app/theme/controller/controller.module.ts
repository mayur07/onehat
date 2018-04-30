import { NgModule } from '@angular/core';
import { DataTableModule } from 'primeng/datatable';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import {StepsModule} from 'primeng/steps';
import {FileUploadModule} from 'primeng/fileupload';


@NgModule({
    declarations: [
        
    ],
    exports: [
        DataTableModule,
        EditorModule,
        FormsModule,
        MultiSelectModule,
        StepsModule,
        FileUploadModule,
        
    ],
    imports: [
        DataTableModule,
        EditorModule,
        FormsModule,
        MultiSelectModule,
        StepsModule,
        FileUploadModule,
        
    ]
})
export class ControllerModule {
}