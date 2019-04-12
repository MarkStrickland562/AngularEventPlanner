import { TestBed, inject } from '@angular/core/testing';

import { RecipeSearchService } from './recipe-search.service';

describe('RecipeSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeSearchService]
    });
  });

  it('should be created', inject([RecipeSearchService], (service: RecipeSearchService) => {
    expect(service).toBeTruthy();
  }));
});
