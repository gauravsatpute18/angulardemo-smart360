import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SideNavSnmComponent } from './side-nav-snm/side-nav-snm.component';
import { SideNavConscareComponent } from './side-nav-conscare/side-nav-conscare.component';
import { SideNavConsopsComponent } from './side-nav-consops/side-nav-consops.component';
import { SideNavSourcingComponent } from './side-nav-sourcing/side-nav-sourcing.component';
import { SideNavOnmComponent } from './side-nav-onm/side-nav-onm.component';
import { SideNavAssetsComponent } from './side-nav-assets/side-nav-assets.component';
import { SideNavPurchaseComponent } from './side-nav-purchase/side-nav-purchase.component';
import { SideNavHcmComponent } from './side-nav-hcm/side-nav-hcm.component';
import { SideNavFinanceComponent } from './side-nav-finance/side-nav-finance.component';
import { SideNavAdminComponent } from './side-nav-admin/side-nav-admin.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    SideNavComponent, 
    FooterComponent, 
    SideNavSnmComponent, 
    SideNavConscareComponent, 
    SideNavConsopsComponent, 
    SideNavSourcingComponent, 
    SideNavOnmComponent, 
    SideNavAssetsComponent, 
    SideNavPurchaseComponent, 
    SideNavHcmComponent, 
    SideNavFinanceComponent, 
    SideNavAdminComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    SimplebarAngularModule,
    NgbModule
  ],
  exports: [
    HeaderComponent, 
    SideNavComponent, 
    FooterComponent, 
    SideNavSnmComponent, 
    SideNavConscareComponent, 
    SideNavConsopsComponent, 
    SideNavSourcingComponent, 
    SideNavOnmComponent, 
    SideNavAssetsComponent, 
    SideNavPurchaseComponent, 
    SideNavHcmComponent, 
    SideNavFinanceComponent, 
    SideNavAdminComponent,
    NgbModule
  ]
})
export class CommonComponentModule { }
