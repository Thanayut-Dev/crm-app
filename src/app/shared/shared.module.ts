import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTooltipModule } from '@angular/material/tooltip';





import { DirectivesModule } from './directives/directive.module';
import { PipesModule } from './pipes/pipe.module';
import { FormbaseComponent } from './components/formbase/formbase.component';
import { TablebaseComponent } from './components/formbase/tablebase.component';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { FakeDbService } from '../fake-db/fake-db.service';
// import { FormbaseComponent } from './components/formbase/formbase.component';
// import { TablebaseComponent } from './components/formbase/tablebase.component';






@NgModule({
  declarations: [FormbaseComponent, TablebaseComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatTooltipModule,

    DirectivesModule,
    PipesModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatTooltipModule,

    DirectivesModule,
    PipesModule,


    FormbaseComponent,
    TablebaseComponent
  ]
})
export class SharedModule { }
