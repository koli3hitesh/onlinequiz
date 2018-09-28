import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartComponent } from './components/start/start.component';
import { CrudComponent } from './components/crud/crud.component';
import { CreateComponent } from './components/crud/create/create.component';

import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ModifyComponent } from './components/crud/modify/modify.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartComponent,
    CrudComponent,
    CreateComponent,
  
    FooterComponent,
    CategoryComponent,
    ModifyComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
