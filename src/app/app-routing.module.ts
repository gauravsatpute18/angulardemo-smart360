import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RegisterComponent } from './register/register.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { ListViewComponent } from './list-view/list-view.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyLocationComponent } from './survey/survey-location/survey-location.component';
import { SurveyCustomerComponent } from './survey/survey-customer/survey-customer.component';

import { from } from 'rxjs';
import { SurveyTypeComponent } from './settings/survey-type/survey-type.component';
import { CampaignTypeComponent } from './settings/campaign-type/campaign-type.component';
import { CampaignFrequencyTypeComponent } from './settings/campaign-frequency-type/campaign-frequency-type.component';

import { SalesandmarketingComponent } from './salesandmarketing/salesandmarketing.component';

import { CampaignComponent } from './campaign/campaign.component';
import { AddCampaignComponent } from './campaign/add-campaign/add-campaign.component';
import { CampaignDetailsComponent } from './campaign/campaign-details/campaign-details.component';

import { UsersComponent } from './users/users.component';
import { AddUserDetailsComponent } from './users/add-user-details/add-user-details.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { SurveyCustomerDetailsComponent } from './survey/survey-customer/survey-customer-details/survey-customer-details.component';
import { SurveyLocationDetailsComponent } from './survey/survey-location/survey-location-details/survey-location-details.component';
import { AddSurveyLocationComponent } from './survey/survey-location/add-survey-location/add-survey-location.component';
import { AddSurveyCustomerComponent } from './survey/survey-customer/add-survey-customer/add-survey-customer.component';
import { CocomplaintsComponent } from './consumer_ops/cocomplaints/cocomplaints.component';
import { CopaymentsComponent } from './consumer_ops/copayments/copayments.component';
import { CouploadComponent } from './consumer_ops/coupload/coupload.component';
import { MeterdatalistComponent } from './consumer_ops/meterdatalist/meterdatalist.component';
import { CodispatchviewComponent } from './consumer_ops/codispatchview/codispatchview.component';
import { CovalidationlistComponent } from './consumer_ops/covalidationlist/covalidationlist.component';
import { CovalidationlistconsumerComponent } from './consumer_ops/covalidationlistconsumer/covalidationlistconsumer.component';

import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { CoservicesComponent } from './consumer_ops/coservices/coservices.component';
import { AssetsComponent } from './assets/assets.component';
import { AddAssetComponent } from './assets/add-asset/add-asset.component';
import { AssetDetailsComponent } from './assets/asset-details/asset-details.component'
import { RequestsComponent } from './requests/requests.component';
import { AddRequestComponent } from './requests/add-request/add-request.component';

import { ConsumerComponent } from './consumer_ops/consumer/consumer.component'
import { ConsumerViewComponent } from './consumer_ops/consumer/consumer-view/consumer-view.component'
import { ConsumerViewBillComponent } from './consumer_ops/consumer/consumer-view-bill/consumer-view-bill.component'
import { CopaymentsfilterComponent } from './consumer_ops/copaymentsfilter/copaymentsfilter.component';

import { StoreComponent } from './store/store.component';
import { StoreDetailsComponent } from './store/store-details/store-details.component';

import { ConsumerAdjustbillComponent } from './consumer_ops/consumer/consumer-adjustbill/consumer-adjustbill.component';
import { ConsumerServicesComponent } from './consumer_ops/consumer/consumer-services/consumer-services.component';
import { ConsumerPlansComponent } from './consumer_ops/consumer/consumer-plans/consumer-plans.component';
import { ConsumerComplaintComponent } from './consumer_ops/consumer/consumer-complaint/consumer-complaint.component';
import { ConsumerOutageComponent } from './consumer_ops/consumer/consumer-outage/consumer-outage.component';
import { ConsumerRefundcreditComponent } from './consumer_ops/consumer/consumer-refundcredit/consumer-refundcredit.component';
import { ConsumerPaymentsComponent } from './consumer_ops/consumer/consumer-payments/consumer-payments.component';

import { MeterdataComponent } from './consumer_ops/meterdata/meterdata.component';
import { DispatchComponent } from './consumer_ops/meterdata/dispatch/dispatch.component';
import { DispatchDetailsComponent } from './consumer_ops/meterdata/dispatch/dispatch-details/dispatch-details.component';
import { ValidationComponent } from './consumer_ops/meterdata/validation/validation.component';
import { ValidationConsumerComponent } from './consumer_ops/meterdata/validation/validation-consumer/validation-consumer.component';
import { ValidationDetailsComponent } from './consumer_ops/meterdata/validation/validation-details/validation-details.component';

import { BillingComponent } from './consumer_ops/billing/billing.component';
import { RunBillComponent } from './consumer_ops/billing/run-bill/run-bill.component';
import { PrintBillComponent } from './consumer_ops/billing/print-bill/print-bill.component';

import { ContractsComponent } from './sourcing/contracts/contracts.component';
import { SourcingComponent } from './sourcing/sourcing.component';
import { AddContractsComponent } from './sourcing/contracts/add-contracts/add-contracts.component';
import { ContractsDetailsComponent } from './sourcing/contracts/contracts-details/contracts-details.component';
import { SmconsumerComponent } from './smconsumer/smconsumer.component';
import { SmconsumerViewComponent } from './smconsumer/smconsumer-view/smconsumer-view.component';

import { TenderComponent } from './tender/tender.component';
import { TenderDetailsComponent } from './tender/tender-details/tender-details.component';

import { ConsumerCareComponent } from './consumer-care/consumer-care.component';
import { ConsumerCareDetailsComponent } from './consumer-care/consumer-care-details/consumer-care-details.component';
import { ConsumerCareServicesComponent } from './consumer-care/consumer-care-services/consumer-care-services.component';

import { TenantComponent } from './tenant/tenant.component';
import { AddTenantComponent } from './tenant/add-tenant/add-tenant.component';

import { SupplierComponent } from './sourcing/supplier/supplier.component';
import { AddSupplierComponent } from './sourcing/supplier/add-supplier/add-supplier.component';

import { SupplierViewComponent } from './sourcing/supplier/supplier-view/supplier-view.component';

import { WorkOrderComponent } from './oandm/work-order/work-order.component';
import { AddWorkOrderComponent } from './oandm/work-order/add-work-order/add-work-order.component';
import { WorkOrderDetailsComponent } from './oandm/work-order/work-order-details/work-order-details.component';
import { ResourceDetailsComponent } from './oandm/work-order/resource-details/resource-details.component';

import { ProductComponent } from './product/product.component';
import { ServicesComponent } from './services/services.component';

import { AdminComponent } from './admin/admin.component';
import { UtilitiesComponent } from './admin/utility-master/utilities/utilities.component';
import { PlansComponent } from './admin/utility-master/plans/plans.component';
import { DepartmentsComponent } from './admin/system-config/departments/departments.component';
import { PaymentsComponent } from './admin/system-config/payments/payments.component';
import { SystemContractsComponent } from './admin/system-config/contracts/contracts.component';
import { TenantsListComponent } from './admin/tenants/tenants-list/tenants-list.component';
import { TenantsAddComponent } from './admin/tenants/tenants-add/tenants-add.component';
import { TenantsDetailsComponent } from './admin/tenants/tenants-details/tenants-details.component';
import { TerretoryComponent } from './admin/utility-config/terretory/terretory.component';
import { LoginLogoutComponent } from './login-logout/login-logout.component';
import { LabelsComponent } from './admin/system-config/labels/labels.component';
import { NotificationsComponent } from './admin/system-config/notifications/notifications.component';
import { PlansComponentOld } from './admin/utility-master/plans/plans-old.component';

// Dashboard Of All Modules by Priyanka
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
import { SchemesComponent } from './admin/utility-config/schemes/schemes.component';
import { MetersDataComponent } from './admin/utility-config/meters-data/meters-data.component';
import { TimeZoneComponent } from './admin/system-config/time-zone/time-zone.component';
import { TemplateConfigComponent } from './admin/system-config/template-config/template-config.component';
import { RegistrationComponent } from './admin/utility-config/registration/registration.component';
import { PaymentConfigComponent } from './admin/utility-config/payment-config/payment-config.component';
import { UserConfigComponent } from './admin/utility-config/user-config/user-config.component';
import { AddConsumerComponent } from './consumer_ops/consumer/add-consumer/add-consumer.component';
import { LogsComponent } from './consumer_ops/consumer/logs/logs.component';
import { DisconnectionComponent } from './consumer_ops/consumer/disconnection/disconnection.component';
import { ConnectComponent } from './consumer_ops/consumer/connect/connect.component';
import { TransferComponent } from './consumer_ops/consumer/transfer/transfer.component';
import { AddUtilityComponent } from './admin/utility-master/utilities/add-utility/add-utility.component';
import { CampaignConfigComponent } from './admin/utility-config/campaign-config/campaign-config.component';
import { AssetConfigComponent } from './admin/utility-config/asset-config/asset-config.component';
import { RoleConfigComponent } from './admin/utility-config/role-config/role-config.component';
import { NumFormatConfigComponent } from './admin/utility-config/num-format-config/num-format-config.component';
import { BillingConfigComponent } from './admin/utility-config/billing-config/billing-config.component';
import { SurveyConfigComponent } from './admin/utility-config/survey-config/survey-config.component';
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
import { ChangeDataTableCSSComponent } from './change-data-table-css/change-data-table-css.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: DashboardSnmComponent },
  { path: 'login', component: LoginLogoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sandm', component: DashboardSnmComponent },
  
  { path: 'applicant-details', component: ApplicantDetailsComponent }, 
  { path: 'list-view', component: ListViewComponent },

  { path: 'registration', component: ListViewComponent },
  { path: 'registration/add-applicant', component: RegisterComponent },
  { path: 'registration/applicant-details', component: ApplicantDetailsComponent }, 

  { path: 'user', component: UsersComponent }, 
  { path: 'user/add-user-details', component: AddUserDetailsComponent },
  { path: 'user/details', component: UserDetailsComponent },

  { path: 'campaign', component: CampaignComponent },
  { path: 'campaign/campaign-details', component: CampaignDetailsComponent},
  { path: 'campaign/add-campaign', component: AddCampaignComponent },

  { path: 'survey', component: SurveyComponent },
  { path: 'survey/location', component: SurveyLocationComponent },
  { path: 'survey/location/details', component: SurveyLocationDetailsComponent },
  { path: 'survey/location/add', component: AddSurveyLocationComponent },  
  { path: 'survey/customer', component: SurveyCustomerComponent },
  { path: 'survey/customer/details', component: SurveyCustomerDetailsComponent },
  { path: 'survey/customer/add', component: AddSurveyCustomerComponent },

  { path: 'appointment-details', component: AppointmentDetailsComponent },

  { path: 'sourcing', component: SourcingComponent },
  { path: 'contracts', component: ContractsComponent },
  { path: 'contracts/add', component: AddContractsComponent },
  { path: 'contracts/details', component: ContractsDetailsComponent },

  { path: 'order', component: OrderComponent },

  { path: 'spend', component: DashboardSpendComponent },
  { path: 'spend/contracts', component: ContractsComponent },
  { path: 'spend/contracts/add', component: AddContractsComponent },
  { path: 'spend/contracts/details', component: ContractsDetailsComponent },

  { path: 'S&M', component: SalesandmarketingComponent },

  { path: 'settings/survey-type', component: SurveyTypeComponent },
  { path: 'settings/campaign-type', component: CampaignTypeComponent },
  { path: 'settings/campaign-freq-type', component: CampaignFrequencyTypeComponent },

  { path: 'consumerops/complaints', component: CocomplaintsComponent },
  { path: 'consumerops/payments', component: CopaymentsComponent },
  { path: 'consumerops/upload', component:CouploadComponent },
  { path: 'consumerops/meterdatalist', component: MeterdatalistComponent },
  { path: 'consumerops/registration', component: ListViewComponent },
  { path: 'consumerops/dispatch_view', component: CodispatchviewComponent },
  { path: 'consumerops/services', component: CoservicesComponent  },
  { path: 'consumerops/validationlist', component: CovalidationlistComponent  },
  { path: 'consumerops/validationlistconsumer', component: CovalidationlistconsumerComponent  },
  { path: 'consumerops/user', component: UsersComponent  },
  { path: 'consumerops/settings', component: SurveyTypeComponent  },
  { path: 'consumerops/paymentsprofile', component: CopaymentsfilterComponent },
  
  { path: 'consumerops', component: DashboardConsumerOpsComponent },
  { path: 'consumerops/consumer', component: ConsumerComponent },
  { path: 'consumer/view', component: ConsumerViewComponent },
  { path: 'consumerops/consumer/add-consumer', component: AddConsumerComponent },
  { path: 'consumerops/consumer/view-bill', component: ConsumerViewBillComponent },
  { path: 'consumerops/consumer/adjust-bill', component: ConsumerAdjustbillComponent },
  { path: 'consumerops/consumer/services', component: ConsumerServicesComponent },
  { path: 'consumerops/consumer/plans', component: ConsumerPlansComponent },
  { path: 'consumerops/consumer/complaint', component: ConsumerComplaintComponent },
  { path: 'consumerops/consumer/outage', component: ConsumerOutageComponent },
  { path: 'consumerops/consumer/refund-credit', component: ConsumerRefundcreditComponent },
  { path: 'consumerops/consumer/payments', component: ConsumerPaymentsComponent },
  { path: 'consumerops/consumer/logs', component: LogsComponent },
  { path: 'consumerops/consumer/connect', component: ConnectComponent },
  { path: 'consumerops/consumer/transfer', component: TransferComponent },
  { path: 'consumerops/consumer/disconnection', component: DisconnectionComponent },


  { path: 'consumerops/meterdata', component: MeterdataComponent },
  { path: 'consumerops/meterdata/validation', component: ValidationComponent },
  { path: 'consumerops/meterdata/validation/consumer', component: ValidationConsumerComponent },
  { path: 'consumerops/meterdata/validation/consumer/details', component: ValidationDetailsComponent },
  { path: 'consumerops/meterdata/dispatch', component: DispatchComponent },
  { path: 'consumerops/meterdata/dispatch/details', component: DispatchDetailsComponent },
  { path: 'consumerops/billing', component: BillingComponent },
  { path: 'consumerops/billing/run-bill', component: RunBillComponent },
  { path: 'consumerops/billing/print-bill', component: PrintBillComponent },

  { path: 'consumerops/billing', component: NoPageFoundComponent },
  { path: 'consumerops/payments', component: NoPageFoundComponent },
  { path: 'consumerops/reports', component: NoPageFoundComponent },
  { path: 'consumerops/profile', component: NoPageFoundComponent },

  { path: 'sales-marketing', component: DashboardSnmComponent },
  { path: 'consumer-care', component: DashboardConsumerCareComponent },
  { path: 'consumer-ops', redirectTo: '/consumerops', pathMatch: 'full' },
  { path: 'gas-management', component: DashboardGasManagementComponent },
  { path: 'work-order', component: DashboardWorkOrderComponent },

  { path: 'network', component: DashboardNetworkComponent },
  { path: 'asset', component: AssetsComponent },
  
  { path: 'hcm', component: DashboardHcmComponent },
  { path: 'finance', component: DashboardFinanceComponent },
  { path: 'reports', component: NoPageFoundComponent },
  { path: 'profile', component: NoPageFoundComponent },
  { path: 'asset/add-asset', component: AddAssetComponent },
  { path: 'asset/details', component: AssetDetailsComponent },
  
  { path: 'consumers', component: SmconsumerComponent },
  { path: 'consumers/view', component: SmconsumerViewComponent },

  { path: 'consumer-care/consumer', component: ConsumerComponent },
  { path: 'consumer-care', component: ConsumerCareComponent },
  { path: 'consumer-care/view', component: ConsumerCareDetailsComponent },
  { path: 'consumer-care/services', component: ConsumerCareServicesComponent },  
  
  { path: 'supplier', component: SupplierComponent },
  { path: 'add-supplier', component: AddSupplierComponent },
  { path: 'supplier-view', component: SupplierViewComponent },

  { path: 'supplier', component: SupplierComponent },
  { path: 'add-supplier', component: AddSupplierComponent },
  { path: 'supplier-view', component: SupplierViewComponent },

  { path: 'request', component: RequestsComponent },
  { path: 'request/add-request', component: AddRequestComponent },

  { path: 'store', component: StoreComponent },
  { path: 'store/store-details', component: StoreDetailsComponent },

  { path: 'tender', component: TenderComponent},
  { path: 'tender/tender-details', component: TenderDetailsComponent },

  { path: 'tenant', component: TenantComponent},
  { path: 'tenant/tenant-details', component: TenantsDetailsComponent },
  { path: 'tenant/add-tenant', component: AddTenantComponent },

  { path: 'product', component: ProductComponent},
  { path: 'service', component: ServicesComponent},

  // Paths for O&M
  { path: 'oandm', component: WorkOrderComponent },
  { path: 'oandm/work-order', component: WorkOrderComponent },
  { path: 'oandm/add-work-order', component: AddWorkOrderComponent },
  { path: 'oandm/work-order-details', component: WorkOrderDetailsComponent },
  { path: 'oandm/resource-details', component: ResourceDetailsComponent },

  // Admin
  { path: 'admin', component: UtilitiesComponent },  
  { path: 'admin/master-utility/utilities', component: UtilitiesComponent },
  { path: 'admin/master-utility/utilities/add-utility', component: AddUtilityComponent },  
  { path: 'admin/master-utility/plans', component: PlansComponent },
  { path: 'admin/master-utility/plans-old', component: PlansComponentOld },
  { path: 'admin/system-config/departments', component: DepartmentsComponent },
  { path: 'admin/system-config/payments', component: PaymentsComponent },
  { path: 'admin/system-config/contracts', component: SystemContractsComponent },
  { path: 'admin/system-config/labels', component: LabelsComponent },
  { path: 'admin/system-config/email-config', component: EmailConfigComponent },
  { path: 'admin/system-config/template-config', component: TemplateConfigComponent},
  { path: 'admin/system-config/state-config', component: StateConfigComponent },
  { path: 'admin/system-config/notifications', component: NotificationsComponent },
  { path: 'admin/system-config/time-zone', component: TimeZoneComponent },
  { path: 'admin/tenants', component: TenantsListComponent },
  { path: 'admin/add-tenants', component: TenantsAddComponent },
  { path: 'admin/tenants-details', component: TenantsDetailsComponent },
  { path: 'admin/utility-config/territory', component: TerretoryComponent },
  { path: 'admin/utility-config/registration', component: RegistrationComponent },
  { path: 'admin/utility-config/user', component: UserConfigComponent },
  { path: 'admin/utility-config/schemes', component:   SchemesComponent},
  { path: 'admin/utility-config/meter-data', component:MetersDataComponent},
  { path: 'admin/utility-config/campaign', component:CampaignConfigComponent},
  { path: 'admin/utility-config/asset', component:AssetConfigComponent},
  { path: 'admin/utility-config/payment', component:PaymentConfigComponent},
  { path: 'admin/utility-config/role', component:RoleConfigComponent},
  { path: 'admin/utility-config/num-format', component:NumFormatConfigComponent},
  { path: 'admin/utility-config/billing', component:BillingConfigComponent},
  { path: 'admin/utility-config/survey', component:SurveyConfigComponent},
  { path: 'admin/utility-config/service', component:ServiceConfigComponent},
  { path: 'admin/utility-config/complaint', component:ComplaintConfigComponent},
  { path: 'admin/utility-config/consumer', component:ConsumerConfigComponent},
  { path: 'admin/utility-config/product', component:ProductConfigComponent},
  { path: 'admin/utility-config/hcm', component:HcmConfigComponent},
  { path: 'admin/utility-config/tender', component:TenderConfigComponent},
  { path: 'admin/utility-config/order', component:OrderConfigComponent},
  { path: 'admin/utility-config/finance', component:FinanceConfigComponent},
  { path: 'admin/utility-config/service-request', component:ServiceRequestConfigComponent},
  { path: 'admin/utility-config/work-order', component:WorkOrderConfigComponent},
  { path: 'admin/utility-config/contract', component:ContractConfigComponent},
  { path: 'admin/utility-config/supplier', component:SupplierConfigComponent},
  { path: 'admin/utility-config/store', component:StoreConfigComponent},

  //For change datatable css 
  { path: 'datatable', component:ChangeDataTableCSSComponent},

  { path: '**', component: NoPageFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
