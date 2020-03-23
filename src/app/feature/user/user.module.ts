import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user.effects';
import { UserFacade} from './user.facade';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [LoginComponent, UserProfileComponent, UserSettingsComponent],
  imports: [
      CommonModule,
      HttpClientModule,
      UserRoutingModule,
      StoreModule.forFeature('user', reducer),
      EffectsModule.forFeature([UserEffects]),
      MatButtonModule,
      SharedModule,
  ],
  providers: [UserFacade]
})
export class UserModule { }
