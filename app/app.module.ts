import { TreeViewModule  } from '@syncfusion/ej2-angular-navigations';

import { ChartAllModule } from '@syncfusion/ej2-angular-charts';

import { CalendarAllModule, DateRangePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { ScheduleAllModule } from '@syncfusion/ej2-angular-schedule';

import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AutoCompleteAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { NumericTextBoxAllModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { DialogAllModule } from '@syncfusion/ej2-angular-popups';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { TabAllModule } from '@syncfusion/ej2-angular-navigations';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ BrowserModule, NumericTextBoxAllModule, TabAllModule, GridAllModule, DialogAllModule, DatePickerAllModule, DropDownListModule, AutoCompleteAllModule, ScheduleAllModule, RichTextEditorAllModule, UploaderAllModule, CalendarAllModule, DateRangePickerAllModule, ChartAllModule, TreeViewModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
