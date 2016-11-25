const str: Array<number> = 'hello';

describe('str', () => {
  it('should have length of 5 characters', () => {
    expect(str.length).toEqual(5);
  });
});
