import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private userService : UserService, private afAuth :AuthService,private router:Router)
{
  afAuth.user$.subscribe(user=>
  {
    if(user){
      userService.save(user);
      let returnUrl=localStorage.getItem('returnUrl');
router.navigateByUrl(returnUrl);
    }
  })

}
}
