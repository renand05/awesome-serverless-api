import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/mutants')
      .expect(200)
      .expect('Hello World!');
  });
  it('/ (POST)', () => {
    const body = {
      alias: 'magneto',
      dna: ['AAAAAA', 'TTAAAA', 'AAAAAA', 'AAAAAA'],
    };
    const response = {
      id: 'aaaaaattaaaaaaaaaaaaaaaa',
      isMutant: true,
      dna: ['AAAAAA', 'TTAAAA', 'AAAAAA', 'AAAAAA'],
      alias: 'magneto',
    };
    return request(app.getHttpServer())
      .post('/mutants')
      .send(body)
      .expect(201)
      .expect(response);
  });
});
