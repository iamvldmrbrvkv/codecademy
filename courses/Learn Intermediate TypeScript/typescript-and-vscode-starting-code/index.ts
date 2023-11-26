import Koa from 'koa';
import Router from '@koa/router';
import getSunriseAndSunset from './getSunriseAndSunset';

const app = new Koa();
const router = new Router();

router.get('sunrise and sunset time', '/sunrise-and-sunset', async (ctx) => {
  const latitude = ctx.request.query.latitude;
  const longitude = ctx.request.query.longitude;

  if (!latitude || !longitude) {
    ctx.status = 500;
    ctx.body =
      'Internal Server Error. Error: missing latitude or longitude query parameters.';
    return;
  }

  const result = await getSunriseAndSunset({
    latitude: Number(latitude),
    longitude: Number(longitude),
  });

  ctx.status = 200;
  ctx.body = result;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

console.log('Server running on localhost:3000');
