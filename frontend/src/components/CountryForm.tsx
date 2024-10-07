import { ADD_COUNTRY, GET_COUNTRIES } from "@/graphql/client";
import { Country } from "@/types/Country";
import { useMutation } from "@apollo/client";
import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import { useState } from "react";

const CountryForm = () => {

  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: GET_COUNTRIES }],
    awaitRefetchQueries: true,
  });

  const newCountry = {
    name: "",
    emoji: "",
    code: "",
  };
  const [country, setCountry] = useState<Country>(newCountry);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry({ ...country, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addCountry({
      variables: {
        data: {
          name: country.name,
          emoji: country.emoji,
          code: country.code
        }
      }
    });
  };

  return (
    <form
      style={{
        padding: "10px",
        margin: "50px",
        border: "1px solid #1abc9c",
        borderRadius: "5px",
      }}
      onSubmit={handleSubmit}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "row" }}
        alignContent={{ xs: "center", sm: "center" }}
        alignItems="center"
        width="100%"
        gap={2}
      >
        <Box flex={1}>
          <TextField name="name" type="text" onChange={handleChange} placeholder="Name" />
        </Box>
        <Box flex={1}>
          <TextField name="emoji" type="text" onChange={handleChange} placeholder="Emoji" />
        </Box>
        <Box flex={1}>
          <TextField name="code" type="text" onChange={handleChange} placeholder="Code" />
        </Box>
        <Button type="submit">Ajouter</Button>
      </Box>
    </form>
  );
};

export default CountryForm;