import { Component } from '@angular/core';
import { GithubApiService } from './github-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username: string = '';
  user: any;

  constructor(private githubApiService: GithubApiService) {}

  searchUser() {
    this.githubApiService.getUser(this.username).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching user:', error);
        // Handle errors (e.g., display an error message)
      }
    );
  }
}