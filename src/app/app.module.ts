import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

// Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// App Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealsComponent } from './deals/deals.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DealsTableComponent } from './deals/components/deals-table/deals-table.component';
import { NewDealDialogComponent } from './deals/components/new-deal-dialog/new-deal-dialog.component';
import { RemoveDealDialogComponent } from './deals/components/remove-deal-dialog/remove-deal-dialog.component';

//  NgxMask Configuration
const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    NavbarComponent,
    DealsTableComponent,
    NewDealDialogComponent,
    RemoveDealDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxMaskModule.forRoot(maskConfig),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
