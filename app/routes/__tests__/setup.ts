import { setupServer } from "msw/node";

const createServer = (handlers: any[] = []) => {
  const server = setupServer(...handlers);
  beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
  return server;
};

export { createServer };
