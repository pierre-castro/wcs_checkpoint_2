import { Country } from "@/types/Country";
import { Box, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useRouter } from "next/router";


const CountryCard = ({ country }: { country: Country }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/countries/${country.code}`)}
      style={{
        cursor: "pointer",
      }}
    >
      <Box sx={{ width: "275px", border: "solid 1px #1abc9c", borderRadius: "10px" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {country.name}
          </Typography>
          <Typography variant="h6" component="div">
            {country.emoji}
          </Typography>
          <Typography variant="body2">
            {country.code}
          </Typography>
        </CardContent>
      </Box>
    </div>
  );
}

export default CountryCard;