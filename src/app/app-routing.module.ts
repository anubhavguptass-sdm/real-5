import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MeetReal5AgentComponent } from './meet-real5-agent/meet-real5-agent.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { SellPropertyOnlineComponent } from './sell-property-online/sell-property-online.component';
import { SellPropertyComponent } from './sell-property/sell-property.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }