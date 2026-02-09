import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './users-service';
import { inject } from '@angular/core';

export const searchArtistGuard: CanActivateFn = (route, state) => {
  const userService: UsersService = inject(UsersService);
  const router: Router = inject(Router);
  if(userService.isLogged()) {
    return true;
  }
  else {
  router.navigateByUrl('/login');
    return false;
  }

};
