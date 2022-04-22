import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutComponent } from './about/about.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { MeetReal5AgentComponent } from './meet-real5-agent/meet-real5-agent.component';
import { WhyReal5AgentComponent } from './why-real5-agent/why-real5-agent.component';
import { SellPropertyOnlineComponent } from './sell-property-online/sell-property-online.component';
import { SellPropertyComponent } from './sell-property/sell-property.component';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { SwipeComponent } from './swipe/swipe.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { SwiperModule } from 'swiper/angular';
import { AgentDashboardComponent } from './agent/agent-dashboard/agent-dashboard.component';
import { FeedComponent } from './agent/feed/feed.component';
import { MyLeadsComponent } from './agent/my-leads/my-leads.component';
import { Real5LeadsComponent } from './agent/real5-leads/real5-leads.component';
import { CRMEmailComponent } from './agent/crmemail/crmemail.component';
import { AgentWhiteboardComponent } from './agent/agent-whiteboard/agent-whiteboard.component';
import { AddLeadComponent } from './agent/add-lead/add-lead.component';
import { AgentHeaderComponent } from './agent/agent-header/agent-header.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { LeadsListComponent } from './admin/leads-list/leads-list.component';
import { AdminFeedComponent } from './admin/admin-feed/admin-feed.component';
import { AdminAgentListComponent } from './admin/agent-list/agent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    MyProfileComponent,
    TermsOfUseComponent,
    PrivacyPolicyComponent,
    AboutComponent,
    WhoWeAreComponent,
    PropertyDetailComponent,
    MeetReal5AgentComponent,
    WhyReal5AgentComponent,
    SellPropertyOnlineComponent,
    SellPropertyComponent,
    AgentProfileComponent,
    PropertyListComponent,
    AgentListComponent,
    SwipeComponent,
    DashboardComponent,
    AgentDashboardComponent,
    FeedComponent,
    MyLeadsComponent,
    Real5LeadsComponent,
    CRMEmailComponent,
    AgentWhiteboardComponent,
    AddLeadComponent,
    AgentHeaderComponent,
    UserListComponent,
    SidebarComponent,
    LeadsListComponent,
    AdminFeedComponent,
    AdminAgentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
