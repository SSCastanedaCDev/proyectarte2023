import { useTheme } from "@mui/material";
import {Box, Grid, Stack, Typography} from "@mui/material";
import Footer from "components/modules/Footer";
import Header from "components/modules/Header";
import background2 from "assets/nosotros_new.png";
import equipo from "assets/equipo_new.png";
import divider from "assets/divider.svg";
import borde1 from "assets/borde-superior.svg";
import borde2 from "assets/borde-inferior.svg";
import proyectarte from "assets/proyectarte.svg";

const Nosotros = () => {

  const theme = useTheme();

  return(
    <>
      <Box>
        <Header />
        <Box sx={{background:theme.palette.secondary.light, padding:'5%'}}>
          <Box>
            <img src={background2} style={{width:'100%'}}/>
          </Box>
          <br />
          <Box>
            <Typography color='primary' textAlign='justify' variant='h6' sx={{textAlignLast:'center', margin:'0 10%'}}>
              Somos una IPS en Salud Mental, de modalidad ambulatoria, dedicada y comprometida al diagnóstico
              y tratamiento, basados en nuevas tecnologías terapéuticas, la Clínica Proyectarte nace hace 6 años y
              desde entonces es reconocida por la calidad en su atención y desarrollo de soluciones a la medida de
              nuestros usuarios en las diferentes dimensiones sociales; Familia, Empresas, Colegios y Comunidad,
              favoreciendo e impulsando el bienestar personal y la productividad organizacional.
            </Typography>
          </Box>
          <br />
          <Box sx={{padding:'0 20%'}}>
            <img src={divider} />
          </Box>
        </Box>
        <Box sx={{background:theme.palette.secondary.light}}>
          <Grid container>
            <Grid xs={12} md={8}>
            <Box
              height='100%'
              width='100%'
              sx={{
                backgroundImage: `url(${equipo})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat'
              }}
            />
            </Grid>
            <Grid xs={12} md={4}>
              <Box sx={{margin: '0 10%'}}>
              <Typography
                color='primary.dark'
                fontWeight='bold'
                variant='h3'
              >
                ¿QUIÉNES SOMOS?
              </Typography>
              <Typography color='primary' variant='h6'>
                Somos un equipo integrado por psicólogos y psicólogas, psiquiatras, nutricionistas,
                terapeutas ocupacionales y enfermeras que hemos diseñado un modelo de
                atención efectivo, capaz de evaluar, promover y prevenir, así como de intervenir en los
                diferentes diagnósticos del estado del ánimo, conducta alimentaria y otras situaciones
                de la vida que afectan tu bienestar.
              </Typography>
              <br />
              <img
                src={proyectarte}
                style={{
                  width: '50%',
                  display: 'block',
                  marginLeft: 'auto'
                }}
              />
              <br /><br />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </>
  )

}

export default Nosotros;