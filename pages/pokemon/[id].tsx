import { Layout, Detail } from "../../components";
import { fetchAPokemon, fetchPokemons } from "../../utils";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";

export default function DetailPage({
  pokemonData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Layout>
        <Detail data={pokemonData} />
      </Layout>
      ;
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const pokemonData = await fetchAPokemon(Number(params.id));

  return {
    props: {
      pokemonData,
    },
  };
};
