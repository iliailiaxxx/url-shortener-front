import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FormaComponent } from './components/forma/forma.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ObjectsComponent } from './components/objects/objects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcellDummyComponent } from './components/excell-dummy/excell-dummy.component';
import { ExcelService } from "./components/excell-dummy/excel.service"
import { ExcelArrayService } from './components/excell-dummy/excel-array.service';
import { ModalComponent } from './components/modal/modal.component';
import { ContentTemplateComponent } from './components/content-template/content-template.component';

 
@NgModule({
  declarations: [
    NewComponentComponent,
    FilterPipe,
    FormaComponent,
    ParentComponentComponent,
    ObjectsComponent,
    ExcellDummyComponent,
    ModalComponent,
    ContentTemplateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [ParentComponentComponent],
  providers: [ExcelService,ExcelArrayService]
})
export class SomeModule { }
