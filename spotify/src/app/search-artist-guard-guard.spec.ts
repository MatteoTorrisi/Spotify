import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { searchArtistGuard } from './search-artist-guard-guard';

describe('searchArtistGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => searchArtistGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
