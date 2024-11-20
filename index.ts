import server, { IRouter } from './lib/router/sequential.ts';
import type { IRouterConfig } from './common.d.ts';
export type * from './common.d.ts';
export { IRouter } from './lib/router/sequential.ts';
export default (
  config: IRouterConfig,
): {
  router: IRouter;
} => {
  const router = server(config);
  return {
    router,
  };
};
