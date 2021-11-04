import Head from "next/head";

import { getDataFromTree } from "@apollo/client/react/ssr";
import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "../graphql/queries";
import withApollo from "../lib/withApollo";

function Home() {
  const { data } = useQuery(CHARACTERS_QUERY);
  return (
    <div>
      {data.characters.results.map((character) => (
        <div>{character}</div>
      ))}
    </div>
  );
}

export default withApollo(Home, { getDataFromTree });
