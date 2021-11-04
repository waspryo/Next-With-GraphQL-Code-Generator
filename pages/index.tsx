import Head from "next/head";

import { useQuery } from "@apollo/client";
import { CHARACTERS_QUERY } from "../graphql/queries";
import withApollo from "../lib/withApollo";

function Home() {
  const { data } = useQuery(CHARACTERS_QUERY);
  return <div>{JSON.stringify(data)}</div>;
}

export default withApollo(Home);
