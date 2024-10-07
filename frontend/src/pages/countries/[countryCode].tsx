import CountryCard from "@/components/CountryCard";
import Header from "@/components/Header";
import { GET_COUNTRY } from "@/graphql/client";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const Country = () => {
  const router = useRouter();
  const { countryCode } = router.query;
  const { data, loading, error } = useQuery(GET_COUNTRY, {
    variables: { code: countryCode },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data.country;
  return (
    <div style={
      {
        margin: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }
    }>

      <CountryCard country={country} />
    </div>
  );
};

export default Country;