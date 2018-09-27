import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartComponent } from './components/start/start.component';
import { CrudComponent } from './components/crud/crud.component';
import { CreateComponent } from './components/crud/create/create.component';
import { UpdateComponent } from './components/crud/update/update.component';
import { DeleteComponent } from './components/crud/delete/delete.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartComponent,
    CrudComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    FooterComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
