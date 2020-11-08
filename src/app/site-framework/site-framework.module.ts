import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, SideBarComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports:
  [
  HeaderComponent,
  SideBarComponent,
  FooterComponent]
})
export class SiteFrameworkModule { }
