import Typography from "@mui/material/Typography";
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'


function Lisaa() {
    console.log("Kissa")
    return (
        <>
        <Typography>Lisää uusi opiskelijatapahtuma</Typography>
        {/* Lisää tähän opiskelijatapahtuman tietojen lisääminen, erilaiset valikot yms.
            Kun lisää uusi tapahtuma nappia painetaan siirrytään tapahtuman sivulle jossa löytyy napit budjetoinnille sekä tehtäville yms.
        */}
        <Button title="Kissa" variant="contained" component={Link} to="/">Palaa takaisin alkuun.</Button>
        <Button title="Kissa" variant="contained" component={Link} to="/tapahtuma">Lisaa uusi tapahtuma</Button>
        </>
    );
  }
export default Lisaa