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
    MeetReal5AgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
