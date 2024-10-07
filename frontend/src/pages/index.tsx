import CountryCard from "@/components/CountryCard";
import CountryForm from "@/components/CountryForm";
import Header from "@/components/Header";
import { GET_COUNTRIES } from "@/graphql/client";
import { Country } from "@/types/Country";
import { useQuery } from "@apollo/client";

export default function Home() {

  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const countries = data.countries;

  return (
    <div style={{
      margin: "10px",
    }}>
      <CountryForm />
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        justifyContent: "center",
        gap: "1rem",
      }}>

        {countries.map((country: Country) => (
          <CountryCard key={country.code} country={country} />
        ))
        }
      </div>
    </div>
  );
}
