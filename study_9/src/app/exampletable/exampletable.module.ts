import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ExampleTableRoutes } from './exampletable.routing';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ExampletableComponent } from './pages/list/exampletable.component';
import { CreateComponent } from './pages/create/create.component';
import { ExampletableFormComponent } from './componets/exampletable-form/exampletable-form.component';
import { UpdateComponent } from './pages/update/update.component';
import { NzCardModule } from 'ng-zorro-antd/card'; 

@NgModule({
    declarations: [
        ExampletableComponent,
        CreateComponent,
        ExampletableFormComponent,
        UpdateComponent
    ],
    imports: [
        CommonModule,
        NzTableModule,
        NzButtonModule,
        ExampleTableRoutes,
        NzFormModule,
        FormsModule,
        ReactiveFormsModule,
        NzSelectModule,
        NzCardModule
    ]
})
export class ExampletableModule { }
