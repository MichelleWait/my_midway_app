import {createApp, close, createHttpRequest} from '@midwayjs/mock';
import {Application, Framework} from '@midwayjs/koa';
import * as assert from 'assert';


describe('test/controller/home.test.ts', () => {

  let app: Application;
  beforeAll(async () => {
    // 只创建一次 app，可以复用
    try {
      // 由于Jest在BeforeAll阶段的error会忽略，所以需要包一层catch
      // refs: https://github.com/facebook/jest/issues/8688
      app = await createApp<Framework>();
    } catch (err) {
      console.error('test beforeAll error', err);
      throw err;
    }
  });

  afterAll(async () => {
    // close app
    await close(app);
  });


  it('should GET /', async () => {

    // make request
    // make request
    const result = await createHttpRequest(app)
      .get('/geturl')
      .set('x-timeout', '1000');

    // or use assert
    assert.deepStrictEqual(result.status, 200);
    assert.deepStrictEqual(result.text, 'Hello Midwayjse!');

  });

});
