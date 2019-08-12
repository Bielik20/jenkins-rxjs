jest.mock('../environment.ts', () => ({
  IS_DEV: true,
  IS_PROD: false,
}));

describe(`Jenkins RxJs`, () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
