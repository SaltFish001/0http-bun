# Introduction

bun-based HTTP framework fork from [0http](https://0http.21no.de/#/)

## Usage

```ts
import http, { IRouter } from '@saltfish/fish-router';

const { router } = http({
  port: 3000,
});
const api_router = new IRouter();

router.use((req, next) => {
  req.ctx = {
    engine: 'bun',
  };

  return next();
});
router.get('/:id', async (req) => {
  return Response.json(req.params);
});
router.post('/', async (req) => {
  return new Response('POST');
});
router.delete('/:id', async (req) => {
  return Response.json(req.params, {
    status: 200,
  });
});
api_router.all('/hello', async () => {
  return new Response('world!');
});
router.use('/api', api_router); // look like /api/hello

export default router;
```

# Support / Donate 💚

You can support the maintenance of this project:

- PayPal: https://www.paypal.me/kyberneees
