import { Test, TestingModule } from '@nestjs/testing';
import { DeezGateway } from './deez.gateway';

describe('DeezGateway', () => {
  let gateway: DeezGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeezGateway],
    }).compile();

    gateway = module.get<DeezGateway>(DeezGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
