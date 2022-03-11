import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json } from "remix";
import { gql } from "graphql-request";
import { fetchQuery } from "~/modules/database.server";

type IndexData = {
  value: boolean;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = async () => {
  const query = gql`
    query MyQuery {
      demoQuery {
        value
      }
    }
  `;
  const response = await fetchQuery(query, {});
  return json({ value: response.demoQuery.value });
};

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!",
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Remix!</h2>
        <p>We're stoked that you're here. 🥳</p>
        <p>
          Feel free to take a look around the code to see how Remix does things,
          it might be a bit different than what you’re used to. When you're
          ready to dive deeper, we've got plenty of resources to get you
          up-and-running quickly.
        </p>
        <p>
          Check out all the demos in this starter, and then just delete the{" "}
          <code>app/routes/demos</code> and <code>app/styles/demos</code>{" "}
          folders when you're ready to turn this into your next project.
        </p>
      </main>
      <aside>
        <h2>Loader Data</h2>
        <p>{data.value}</p>
      </aside>
    </div>
  );
}
