/* Angular's */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

/* Other's */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTablesModule } from 'angular-datatables';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ChartsModule } from 'ng2-charts';
import { SimplebarAngularModule } from 'simplebar-angular';
import { NgxContentLoadingModule } from 'ngx-content-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

/* Modules */
import { AppRoutingModule } from './app-routing.module';
import { CommonComponentModule } from './common/common-component.module';

/* Components */
import { AppComponent } from './app.component';

/* Services */
import { InterceptorService } from './services/common/interceptor/interceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { TenantComponent } from './tenant/tenant.component';
import { UtilityComponent } from './utility/utility.component';
import { RoleComponent } from './role/role.component';
import { UsersComponent } from './users/users.component';
import { SurveyComponent } from './survey/survey.component';
import { ConsumerComponent } from './consumer_ops/consumer/consumer.component';
import { MeterDataComponent } from './meter-data/meter-data.component';
import { PaymentComponent } from './payment/payment.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { ContractComponent } from './contract/contract.component';
import { SupplierComponent } from './sourcing/supplier/supplier.component';
import { DispatcherComponent } from './dispatcher/dispatcher.component';
import { AssetsComponent } from './assets/assets.component';
import { RequestsComponent } from './requests/requests.component';
import { TenderComponent } from './tender/tender.component';
import { StoreComponent } from './store/store.component';
import { EmployeeComponent } from './employee/employee.component';
import { PayrollComponent } from './payroll/payroll.component';
import { FinanceComponent } from './finance/finance.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { ServicesComponentComponent } from './services-component/services-component.component';

import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';

import { ListViewComponent } from './list-view/list-view.component';
import { SurveyCustomerComponent } from './survey/survey-customer/survey-customer.component';
import { SurveyLocationComponent } from './survey/survey-location/survey-location.component';

import { SalesandmarketingComponent } from './salesandmarketing/salesandmarketing.component';

import { SurveyTypeComponent } from './settings/survey-type/survey-type.component';
import { CampaignTypeComponent } from './settings/campaign-type/campaign-type.component';
import { CampaignFrequencyTypeComponent } from './settings/campaign-frequency-type/campaign-frequency-type.component';
import { AddUserDetailsComponent } from './users/add-user-details/add-user-details.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { SurveyLocationDetailsComponent } from './survey/survey-location/survey-location-details/survey-location-details.component';
import { SurveyCustomerDetailsComponent } from './survey/survey-customer/survey-customer-details/survey-customer-details.component';
import { AddSurveyCustomerComponent } from './survey/survey-customer/add-survey-customer/add-survey-customer.component';
import { AddSurveyLocationComponent } from './survey/survey-location/add-survey-location/add-survey-location.component';

import { CampaignComponent } from './campaign/campaign.component';
import { AddCampaignComponent } from './campaign/add-campaign/add-campaign.component';
import { CampaignDetailsComponent } from './campaign/campaign-details/campaign-details.component';
import { CocomplaintsComponent } from './consumer_ops/cocomplaints/cocomplaints.component';
import { CopaymentsComponent } from './consumer_ops/copayments/copayments.component';
import { CouploadComponent } from './consumer_ops/coupload/coupload.component';
import { MeterdatalistComponent  } from './consumer_ops/meterdatalist/meterdatalist.component';
import { CodispatchviewComponent } from './consumer_ops/codispatchview/codispatchview.component';
import { CovalidationlistComponent } from './consumer_ops/covalidationlist/covalidationlist.component';
import { CovalidationlistconsumerComponent } from './consumer_ops/covalidationlistconsumer/covalidationlistconsumer.component';
// import { OmassetsComponent } from './oandm/assets/omassets/omassets.component';
// import { OmconsumersearchComponent } from './oandm/omconsumersearch/omconsumersearch.component';
// import { OmassetsearchComponent } from './oandm/omassetsearch/omassetsearch.component';

import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { CoservicesComponent } from './consumer_ops/coservices/coservices.component';
import { ConsumerViewComponent } from './consumer_ops/consumer/consumer-view/consumer-view.component';
import { ConsumerViewBillComponent } from './consumer_ops/consumer/consumer-view-bill/consumer-view-bill.component';
import { DialogApproveComponent } from './consumer_ops/coservices/dialog-approve/dialog-approve.component';
import { DialogRejectComponent } from './consumer_ops/coservices/dialog-reject/dialog-reject.component';
import { AddAssetComponent } from './assets/add-asset/add-asset.component';
import { AssetDetailsComponent } from './assets/asset-details/asset-details.component';
import { AddRequestComponent } from './requests/add-request/add-request.component';

import { CopaymentsfilterComponent } from './consumer_ops/copaymentsfilter/copaymentsfilter.component';

import { StoreDetailsComponent } from './store/store-details/store-details.component';
import { ConsumerServicesComponent } from './consumer_ops/consumer/consumer-services/consumer-services.component';
import { ConsumerComplaintComponent } from './consumer_ops/consumer/consumer-complaint/consumer-complaint.component';
import { ConsumerOutageComponent } from './consumer_ops/consumer/consumer-outage/consumer-outage.component';
import { SourcingComponent } from './sourcing/sourcing.component';
import { ContractsComponent } from './sourcing/contracts/contracts.component';
import { AddContractsComponent } from './sourcing/contracts/add-contracts/add-contracts.component';
import { ContractsDetailsComponent } from './sourcing/contracts/contracts-details/contracts-details.component';
import { ConsumerAdjustbillComponent } from './consumer_ops/consumer/consumer-adjustbill/consumer-adjustbill.component';
import { ConsumerPaymentsComponent } from './consumer_ops/consumer/consumer-payments/consumer-payments.component';
import { ConsumerRefundcreditComponent } from './consumer_ops/consumer/consumer-refundcredit/consumer-refundcredit.component';
import { SmconsumerComponent } from './smconsumer/smconsumer.component';
import { SmconsumerViewComponent } from './smconsumer/smconsumer-view/smconsumer-view.component';
import { TenderDetailsComponent } from './tender/tender-details/tender-details.component';
import { MeterdataComponent } from './consumer_ops/meterdata/meterdata.component';
import { DispatchComponent } from './consumer_ops/meterdata/dispatch/dispatch.component';
import { ValidationComponent } from './consumer_ops/meterdata/validation/validation.component';
import { ValidationConsumerComponent } from './consumer_ops/meterdata/validation/validation-consumer/validation-consumer.component';
import { DispatchDetailsComponent } from './consumer_ops/meterdata/dispatch/dispatch-details/dispatch-details.component';
import { ValidationDetailsComponent } from './consumer_ops/meterdata/validation/validation-details/validation-details.component';
import { BillingComponent } from './consumer_ops/billing/billing.component';
import { RunBillComponent } from './consumer_ops/billing/run-bill/run-bill.component';
import { PrintBillComponent } from './consumer_ops/billing/print-bill/print-bill.component';
import { ConsumerCareComponent } from './consumer-care/consumer-care.component';
import { ConsumerCareDetailsComponent } from './consumer-care/consumer-care-details/consumer-care-details.component';
import { ConsumerCareServicesComponent } from './consumer-care/consumer-care-services/consumer-care-services.component';
import { TenantDetailsComponent } from './tenant/tenant-details/tenant-details.component';
import { AddTenantComponent } from './tenant/add-tenant/add-tenant.component';
import { AddSupplierComponent } from './sourcing/supplier/add-supplier/add-supplier.component';
import { SupplierViewComponent } from './sourcing/supplier/supplier-view/supplier-view.component';
import { WorkOrderComponent } from './oandm/work-order/work-order.component';
import { AddWorkOrderComponent } from './oandm/work-order/add-work-order/add-work-order.component';
import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';
import { WorkOrderDetailsComponent } from './oandm/work-order/work-order-details/work-order-details.component';
import { ResourceDetailsComponent } from './oandm/work-order/resource-details/resource-details.component';
import { AdminComponent } from './admin/admin.component';
import { PlansComponent } from './admin/utility-master/plans/plans.component';
import { DepartmentsComponent } from './admin/system-config/departments/departments.component';
import { PaymentsComponent } from './admin/system-config/payments/payments.component';
import { SystemContractsComponent } from './admin/system-config/contracts/contracts.component';
import { UtilitiesComponent } from './admin/utility-master/utilities/utilities.component';
import { TenantsListComponent } from './admin/tenants/tenants-list/tenants-list.component';
import { TenantsAddComponent } from './admin/tenants/tenants-add/tenants-add.component';
import { TenantsDetailsComponent } from './admin/tenants/tenants-details/tenants-details.component';
import { LabelsComponent } from './admin/system-config/labels/labels.component';
import { DashboardSnmComponent } from './Dashboards/dashboard-snm/dashboard-snm.component';
import { DashboardConsumerCareComponent } from './Dashboards/dashboard-consumer-care/dashboard-consumer-care.component';
import { DashboardConsumerOpsComponent } from './Dashboards/dashboard-consumer-ops/dashboard-consumer-ops.component';
import { DashboardGasManagementComponent } from './Dashboards/dashboard-gas-management/dashboard-gas-management.component';
import { DashboardWorkOrderComponent } from './Dashboards/dashboard-work-order/dashboard-work-order.component';
import { DashboardNetworkComponent } from './Dashboards/dashboard-network/dashboard-network.component';
import { DashboardSpendComponent } from './Dashboards/dashboard-spend/dashboard-spend.component';
import { DashboardHcmComponent } from './Dashboards/dashboard-hcm/dashboard-hcm.component';
import { DashboardFinanceComponent } from './Dashboards/dashboard-finance/dashboard-finance.component';
import { EmailConfigComponent } from './admin/system-config/email-config/email-config.component';
import { StateConfigComponent } from './admin/system-config/state-config/state-config.component';
import { TerretoryComponent } from './admin/utility-config/terretory/terretory.component';
import { SchemesComponent } from './admin/utility-config/schemes/schemes.component';
import { MetersDataComponent } from './admin/utility-config/meters-data/meters-data.component';
import { DashboardNewComponent } from './Dashboards/dashboard-new/dashboard-new.component';
import { DashboardOldComponent } from './Dashboards/dashboard-old/dashboard-old.component';
import { NotificationsComponent } from './admin/system-config/notifications/notifications.component';
import { TimeZoneComponent } from './admin/system-config/time-zone/time-zone.component';
import { TemplateConfigComponent } from './admin/system-config/template-config/template-config.component';
import { ConsumerPlansComponent } from './consumer_ops/consumer/consumer-plans/consumer-plans.component';
import { RegistrationComponent } from './admin/utility-config/registration/registration.component';
import { PaymentConfigComponent } from './admin/utility-config/payment-config/payment-config.component';
import { UserConfigComponent } from './admin/utility-config/user-config/user-config.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddConsumerComponent } from './consumer_ops/consumer/add-consumer/add-consumer.component';
import { LogsComponent } from './consumer_ops/consumer/logs/logs.component';
import { DisconnectionComponent } from './consumer_ops/consumer/disconnection/disconnection.component';
import { ConnectComponent } from './consumer_ops/consumer/connect/connect.component';
import { TransferComponent } from './consumer_ops/consumer/transfer/transfer.component';
import { AddUtilityComponent } from './admin/utility-master/utilities/add-utility/add-utility.component';
import { AssetConfigComponent } from './admin/utility-config/asset-config/asset-config.component';
import { CampaignConfigComponent } from './admin/utility-config/campaign-config/campaign-config.component';
import { NumFormatConfigComponent } from './admin/utility-config/num-format-config/num-format-config.component';
import { RoleConfigComponent } from './admin/utility-config/role-config/role-config.component';
import { SurveyConfigComponent } from './admin/utility-config/survey-config/survey-config.component';
import { BillingConfigComponent } from './admin/utility-config/billing-config/billing-config.component';
import { ServiceConfigComponent } from './admin/utility-config/service-config/service-config.component';
import { ConsumerConfigComponent } from './admin/utility-config/consumer-config/consumer-config.component';
import { ComplaintConfigComponent } from './admin/utility-config/complaint-config/complaint-config.component';
import { ProductConfigComponent } from './admin/utility-config/product-config/product-config.component';
import { TenderConfigComponent } from './admin/utility-config/tender-config/tender-config.component';
import { OrderConfigComponent } from './admin/utility-config/order-config/order-config.component';
import { HcmConfigComponent } from './admin/utility-config/hcm-config/hcm-config.component';
import { FinanceConfigComponent } from './admin/utility-config/finance-config/finance-config.component';
import { ServiceRequestConfigComponent } from './admin/utility-config/service-request-config/service-request-config.component';
import { WorkOrderConfigComponent } from './admin/utility-config/work-order-config/work-order-config.component';
import { SupplierConfigComponent } from './admin/utility-config/supplier-config/supplier-config.component';
import { StoreConfigComponent } from './admin/utility-config/store-config/store-config.component';
import { ContractConfigComponent } from './admin/utility-config/contract-config/contract-config.component';
import { OrderComponent } from './order/order.component';
import {PlansComponentOld} from './admin/utility-master/plans/plans-old.component';
import { ChangeDataTableCSSComponent } from './change-data-table-css/change-data-table-css.component';
import { SelectService } from './admin/utility-master/plans/select.service';
import { NgCascadingDropdownLibModule } from 'ng-cascading-dropdown-lib';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    NoPageFoundComponent,
    CampaignComponent,
    TenantComponent,
    UtilityComponent,
    RoleComponent,
    UsersComponent,
    SurveyComponent,
    ConsumerComponent,
    MeterDataComponent,
    PaymentComponent,
    ComplaintsComponent,
    ContractComponent,
    SupplierComponent,
    DispatcherComponent,
    AssetsComponent,
    RequestsComponent,
    TenderComponent,
    StoreComponent,
    EmployeeComponent,
    PayrollComponent,
    FinanceComponent,
    LoginLogoutComponent,
    ReportsComponent,
    SettingsComponent,
    ServicesComponentComponent,
    ApplicantDetailsComponent,
    ListViewComponent,
    ApplicantDetailsComponent,
    ListViewComponent,
    SurveyCustomerComponent,
    SurveyLocationComponent,
    SalesandmarketingComponent,
    SurveyTypeComponent,
    CampaignTypeComponent,
    CampaignFrequencyTypeComponent,
    AddUserDetailsComponent,
    UserDetailsComponent,
    SurveyLocationDetailsComponent,
    SurveyCustomerDetailsComponent,
    AddSurveyCustomerComponent,
    AddSurveyLocationComponent,
    AddCampaignComponent,
    CampaignDetailsComponent,
    CocomplaintsComponent,
    CopaymentsComponent,
    CouploadComponent,
    MeterdatalistComponent,
    CodispatchviewComponent,
    CovalidationlistComponent,
    CovalidationlistconsumerComponent,
    SchemesComponent,
    AppointmentDetailsComponent,
    CoservicesComponent,
    ConsumerViewComponent,
    ConsumerViewBillComponent,
    DialogApproveComponent,
    DialogRejectComponent,
    AddRequestComponent,
    CopaymentsfilterComponent,
    StoreDetailsComponent,
    AddAssetComponent,
    AssetDetailsComponent,
    AddRequestComponent,
    ConsumerServicesComponent,
    ConsumerComplaintComponent,
    ConsumerOutageComponent,
    SourcingComponent,
    ContractsComponent,
    AddContractsComponent,
    ContractsDetailsComponent,
    ConsumerAdjustbillComponent,
    ConsumerPaymentsComponent,
    ConsumerRefundcreditComponent,
    SmconsumerComponent,
    SmconsumerViewComponent,
    TenderDetailsComponent,
    MeterdataComponent,
    DispatchComponent,
    ValidationComponent,
    ValidationConsumerComponent,
    DispatchDetailsComponent,
    ValidationDetailsComponent,
    BillingComponent,
    RunBillComponent,
    PrintBillComponent,
    ConsumerCareComponent,
    ConsumerCareDetailsComponent,
    ConsumerCareServicesComponent,
    TenantDetailsComponent,
    AddTenantComponent,
    AddSupplierComponent,
    SupplierViewComponent,
    WorkOrderComponent,
    AddWorkOrderComponent,
    ProductComponent,
    ServicesComponent,
    WorkOrderDetailsComponent,
    ResourceDetailsComponent,
    AdminComponent,
    PlansComponent,
    DepartmentsComponent,
    PaymentsComponent,
    SystemContractsComponent,
    UtilitiesComponent,
    TenantsListComponent,
    TenantsAddComponent,
    TenantsDetailsComponent,
    LabelsComponent,
    DashboardSnmComponent,
    DashboardConsumerCareComponent,
    DashboardConsumerOpsComponent,
    DashboardGasManagementComponent,
    DashboardWorkOrderComponent,
    DashboardNetworkComponent,
    DashboardSpendComponent,
    DashboardHcmComponent,
    DashboardFinanceComponent,
    EmailConfigComponent,
    StateConfigComponent,
    TerretoryComponent,
    MetersDataComponent,
    DashboardNewComponent,
    DashboardOldComponent,
    NotificationsComponent,
    TimeZoneComponent,
    TemplateConfigComponent,
    ConsumerPlansComponent,
    RegistrationComponent,
    PaymentConfigComponent,
    UserConfigComponent,
    AddConsumerComponent,
    LogsComponent,
    DisconnectionComponent,
    ConnectComponent,
    TransferComponent,
    AddUtilityComponent,
    AssetConfigComponent,
    CampaignConfigComponent,
    NumFormatConfigComponent,
    RoleConfigComponent,
    SurveyConfigComponent,
    BillingConfigComponent,
    ServiceConfigComponent,
    ConsumerConfigComponent,
    ComplaintConfigComponent,
    ProductConfigComponent,
    TenderConfigComponent,
    OrderConfigComponent,
    HcmConfigComponent,
    FinanceConfigComponent,
    ServiceRequestConfigComponent,
    WorkOrderConfigComponent,
    SupplierConfigComponent,
    StoreConfigComponent,
    ContractConfigComponent,
    OrderComponent,
    ChangeDataTableCSSComponent,
    PlansComponentOld,
  ],
  imports: [
    BrowserModule,
    CommonComponentModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    DataTablesModule,
    NgxDropzoneModule,
    ChartsModule,
    SimplebarAngularModule,
    NgxContentLoadingModule,
    BrowserAnimationsModule,
    NgCascadingDropdownLibModule,
    NgxDaterangepickerMd.forRoot(),
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [
    SelectService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
