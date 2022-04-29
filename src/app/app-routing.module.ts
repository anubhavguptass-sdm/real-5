import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddAgentComponent } from './admin/add-agent/add-agent.component';
import { AdminCrmEmailComponent } from './admin/admin-crm-email/admin-crm-email.component';
import { AdminFeedComponent } from './admin/admin-feed/admin-feed.component';
import { AdminWhiteboardComponent } from './admin/admin-whiteboard/admin-whiteboard.component';
import { AgentDetailComponent } from './admin/agent-detail/agent-detail.component';
import { AdminAgentListComponent } from './admin/agent-list/agent-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LeadsListComponent } from './admin/leads-list/leads-list.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserComponent } from './admin/user/user.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { AddLeadComponent } from './agent/add-lead/add-lead.component';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { AgentProfileComponent1 } from './agent/agent-profile/agent-profile.component';
import { AgentWhiteboardComponent } from './agent/agent-whiteboard/agent-whiteboard.component';
import { CRMEmailComponent } from './agent/crmemail/crmemail.component';
import { FeedComponent } from './agent/feed/feed.component';
import { MyLeadsComponent } from './agent/my-leads/my-leads.component';
import { Real5LeadsComponent } from './agent/real5-leads/real5-leads.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeetReal5AgentComponent } from './meet-real5-agent/meet-real5-agent.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { SellPropertyOnlineComponent } from './sell-property-online/sell-property-online.component';
import { SellPropertyComponent } from './sell-property/sell-property.component';
import { SwipeComponent } from './swipe/swipe.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhyReal5AgentComponent } from './why-real5-agent/why-real5-agent.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  },
  {
    path: 'terms-of-use',
    component: TermsOfUseComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'who-we-are',
    component: WhoWeAreComponent
  },
  {
    path: 'property-detail',
    component: PropertyDetailComponent
  },
  {
    path: 'meet-real5-agent',
    component: MeetReal5AgentComponent
  },
  {
    path: 'why-real5-agent',
    component: WhyReal5AgentComponent
  },
  {
    path: 'sell-property-online',
    component: SellPropertyOnlineComponent
  },
  {
    path: 'sell-property',
    component: SellPropertyComponent
  },
  {
    path: 'agent-profile',
    component: AgentProfileComponent
  },
  {
    path: 'property-list',
    component: PropertyListComponent
  },
  {
    path: 'agent-list',
    component: AgentListComponent
  },
  {
    path: 'swipe',
    component: SwipeComponent
  },
  {
    path: 'admin',
    component: DashboardComponent,
  },
  {
    path: 'admin/user-list',
    component: UserListComponent
  },
  {
    path: 'agent/agent-dashboard',
    component: AgentDashboardComponent
  },
  {
    path: 'agent/feed',
    component: FeedComponent
  },
  {
    path: 'agent/my-leads',
    component: MyLeadsComponent
  },
  {
    path: 'agent/real5-leads',
    component: Real5LeadsComponent
  },
  {
    path: 'agent/crm-email',
    component: CRMEmailComponent
  },
  {
    path: 'agent/agent-whiteboard',
    component: AgentWhiteboardComponent
  },
  {
    path: 'agent/add-lead',
    component: AddLeadComponent
  },
  {
    path: 'agent/agent-profile',
    component: AgentProfileComponent1
  },
  {
    path: 'admin/leads-list',
    component: LeadsListComponent
  },
  {
    path: 'admin/feed',
    component: AdminFeedComponent
  },
  {
    path: 'admin/agent-list',
    component: AdminAgentListComponent
  },
  {
    path: 'admin/user',
    component: UserComponent
  },
  {
    path: 'admin/agent-detail',
    component: AgentDetailComponent
  },
  {
    path: 'admin/add-agent',
    component: AddAgentComponent
  },
  {
    path: 'admin/admin-crm-email',
    component: AdminCrmEmailComponent
  },
  {
    path: 'admin/admin-whiteboard',
    component: AdminWhiteboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }