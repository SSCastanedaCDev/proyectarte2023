import { useTheme } from "@mui/material";
import {Box, Grid, Typography} from "@mui/material";
import Footer from "components/modules/Footer";
import Header from "components/modules/Header";
import background1 from "assets/bg-text.png";
import divider from "assets/divider.svg";
import borde1 from "assets/borde-superior.svg";
import borde2 from "assets/borde-inferior.svg";

const Home = () => {

  const theme = useTheme();

  return(
    <>
      <Box>
        <Header />
        <Box sx={{background:theme.palette.secondary.light, padding:'5%'}}>
          <Box>
            <img src={background1} style={{width:'100%'}}/>
          </Box>
          <br />
          <Box>
            <Typography color='primary' textAlign='justify' variant='h6' sx={{textAlignLast:'center', fontFamily:'GeneralSans'}}>
              Para todo eso que se está saliendo de las manos, aquí encontrarás profesionales capacitados para darte herramientas que
              te ayudarán a resolverlo, acompañándote y apoyándote en este camino. No tienes porque hacerlo solo o sola, todos hemos
              necesitado ayuda alguna vez y nosotros ponemos todo a tu disposición para que salgas adelante.
            </Typography>
          </Box>
          <br />
          <Box sx={{padding:'0 20%'}}>
            <img src={divider} />
          </Box>
        </Box>
        <Footer />
      </Box>
      
    </>
  )

}

export default Home;