import Image from "next/image";

import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../lib/withApollo";
import { useCharactersQuery } from "../generated";

function Home() {
  const { data, loading } = useCharactersQuery();

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <Image
            src={character.image}
            alt={character.name}
            width="200px"
            height="200px"
          />
          {character.name}
        </div>
      ))}
    </div>
  );
}

export default withApollo(Home, { getDataFromTree });
