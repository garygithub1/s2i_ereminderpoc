import { S2iCommonModule } from './s2i-common.module';

describe('S2iCommonModule', () => {
  let s2iCommonModule: S2iCommonModule;

  beforeEach(() => {
    s2iCommonModule = new S2iCommonModule();
  });

  it('should create an instance', () => {
    expect(s2iCommonModule).toBeTruthy();
  });
});
