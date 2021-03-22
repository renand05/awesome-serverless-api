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
    const body = { 'dna': ['1', '2', '3', '4'] };
    const response = {
      'id': '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4',
      'isMutant': true,
      'dna': ['1', '2', '3', '4']
    };
    return request(app.getHttpServer())
      .post('/mutants')
      .send(body)
      .expect(201)
      .expect(response);
  });
});
