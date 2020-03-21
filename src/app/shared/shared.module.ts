import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SnackbarMessageComponent } from './components/snack-message/snackbar-message.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SnackbarMessageComponent,
    AvatarComponent,
  ],
  entryComponents: [SnackbarMessageComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        RouterModule,
    ],
    exports: [
        NotFoundComponent,
        HeaderComponent,
        FooterComponent,
        SnackbarMessageComponent,
        CommonModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        AvatarComponent,
    ],
})
export class SharedModule { }
