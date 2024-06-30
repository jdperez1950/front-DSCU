import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet,Router, NavigationEnd } from '@angular/router';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { NavGovCoComponent } from './shared/components/nav-gov-co/nav-gov-co.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavSerachBarComponent } from './shared/components/nav-serach-bar/nav-serach-bar.component';
import { Page404Component } from './shared/components/page-404/page-404.component';
import { AuthComponent } from './auth/auth.component';
import { isPlatformBrowser } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NavBarComponent,
    NavGovCoComponent,
    FooterComponent,
    HomeComponent,
    NavSerachBarComponent,
    Page404Component,
    AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'front-dscu';

  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          window.scrollTo(0, 0);
        }
      });
    }
  }
}
