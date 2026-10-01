import { saveUser, getUsername } from './storage.js';

describe('getUsername', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns the name from the user object in storage', () => {
    saveUser({ name: 'Jenny' });
    expect(getUsername()).toBe('Jenny');
  });

  it('returns null when no user exists in storage', () => {
    expect(getUsername()).toBe(null);
  });
});
