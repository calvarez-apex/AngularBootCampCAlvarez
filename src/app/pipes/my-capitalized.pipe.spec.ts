import { MyCapitalizedPipe } from './my-capitalized.pipe';

describe('MyCapitalizedPipe', () => {
  it('create an instance', () => {
    const pipe = new MyCapitalizedPipe();
    expect(pipe).toBeTruthy();
  });
});
