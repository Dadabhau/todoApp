import { TestBed } from '@angular/core/testing';

import { TodoUserService } from './todo-user.service';

describe('TodoUserService', () => {
  let service: TodoUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
