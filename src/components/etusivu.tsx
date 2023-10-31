import Typography from "@mui/material/Typography";
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'


// Lisää "aktiiviset tapahtumat" valikko josta voidaan valita luodut tapahtumat ja niitä pääsee tarkkailemaan
// Ilmoita kirjautunut käyttäjä tervetulleeksi käyttäjänimellään
// Kirjautunut käyttäjä pääsee muokkaamaan oman yhdistyksen luomia tapahtumia ei muiden.
// Vieraana kirjautunut pääsee vain katselemaan tapahtumien kuvauksia ei muuta.



function Etusivu() {
    console.log("Kissa")
    return (
        <>
        <Button title="Kissa" variant="contained" component={Link} to="/lisaa">Lisaa uusi tapahtuma</Button>
        <Typography>Tervetuloa käyttämään Opiskelijatapahtuma työkaluja!</Typography>
        </>
        
    );
  }

export default Etusivu