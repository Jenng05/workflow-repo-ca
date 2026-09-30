import { isActivePath } from './userInterface.js';

describe('isActivePath', () => {
  it('returns true when current path matches href exactly', () => {
    expect(isActivePath('/login/', '/login/')).toBe(true);
  });

  it('returns true for root path when path is / or /index.html', () => {
    expect(isActivePath('/', '/')).toBe(true);
    expect(isActivePath('/', '/index.html')).toBe(true);
  });
});
