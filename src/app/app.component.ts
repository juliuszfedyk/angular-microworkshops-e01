import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private snapshot: string;
  constructor(private authService: AuthenticationService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() { 
    this.route.params.subscribe(p =>{
      console.log(p);
    });
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  isInLogin() {
    return this.router.url.includes('/login');
  }
}
