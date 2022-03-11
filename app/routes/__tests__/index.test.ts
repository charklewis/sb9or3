import { graphql } from "msw";
import { loader } from "~/routes/index";
import { createServer } from "~/routes/__tests__/setup";

const createDemoQueryHandler = ({ value = true } = {}) => {
  return graphql.query("MyQuery", (req, res, ctx) => {
    return res(ctx.data({ demoQuery: { value } }));
  });
};

createServer([createDemoQueryHandler()]);

test("the loader returns data (round 1)", async () => {
  const response = await loader({
    request: new Request("/", { method: "GET" }),
    params: {},
    context: {},
  });
  const data = await response.json();
  expect(data.value).toBe(true);
});

// test("the loader returns data (round 2)", async () => {
//   const response = await loader({
//     request: new Request("/", { method: "GET" }),
//     params: {},
//     context: {},
//   });
//   const data = await response.json();
//   expect(data.value).toBe(true);
// });

// test("the loader returns data (round 3)", async () => {
//   const response = await loader({
//     request: new Request("/", { method: "GET" }),
//     params: {},
//     context: {},
//   });
//   const data = await response.json();
//   expect(data.value).toBe(true);
// });

// test("the loader returns data (round 4)", async () => {
//   const response = await loader({
//     request: new Request("/", { method: "GET" }),
//     params: {},
//     context: {},
//   });
//   const data = await response.json();
//   expect(data.value).toBe(true);
// });

// test("the loader returns data (round 5)", async () => {
//   const response = await loader({
//     request: new Request("/", { method: "GET" }),
//     params: {},
//     context: {},
//   });
//   const data = await response.json();
//   expect(data.value).toBe(true);
// });
