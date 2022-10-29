import { useTheme } from "@mui/material";
import {Box, Grid, Stack, Typography} from "@mui/material";
import Footer from "components/modules/Footer";
import Header from "components/modules/Header";
import servicios1 from "assets/psicoterapia_new.png"
import servicios2 from "assets/coach-nutricional_new.png"
import servicios3 from "assets/tratamientos-especializados_new.png"
import servicios4 from "assets/individual_new.png"
import servicios5 from "assets/pareja_new.png"
import servicios6 from "assets/familia_new.png"
import servicios7 from "assets/apoyo_new.png"
import servicios8 from "assets/comer-mejor_new.png"
import servicios9 from "assets/cuidadores_new.png"
import fondoAzul from "assets/fondo-azul.svg"
import famisanar from "assets/logo-famisanar.svg"
import sanitas from "assets/logo-sanitas.svg"
import ecopetrol from "assets/logo-ecopetrol.svg"
import lines from "assets/pink-lines-horizontal.svg"

const Titulo = (props) => {

  const theme = useTheme();

  return(
    <Box sx={{
      width: '100%',
      backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
      padding:'1%',
      borderRadius:'40px'
    }}>
      <Typography fontWeight='bold' textAlign='center' variant='h6' sx={{color:'white'}}>{props.titulo}</Typography>
    </Box>
  )
}

const Servicios = () => {

  const theme = useTheme();

  return(
    <>
      <Box>
        <Header />
        <Box sx={{background:theme.palette.secondary.light, padding:'5%'}}>
          <Box sx={{padding:'0 10%'}}>
            <Typography color='primary.dark' variant='h4' fontWeight='bold' textAlign='center'>
              ¿EN CUÁLES PROCESOS PODEMOS ACOMPAÑARTE?
            </Typography>
            <Typography color='primary' variant='h6' textAlign='justify' sx={{textAlignLast:'center'}}>
              Es posible que todo esto te suene familiar y confuso, si has visto que podemos ayudarte pero no
              tienes claro lo que necesitas, comunícate con nosotros, con toda nuestra experiencia estaremos
              para orientarte hacia el mejor profesional.
            </Typography>
          </Box>
          <br />
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box px={'5%'}>
                  <img src={servicios1} style={{width:'100%'}} alt='Clínica Proyectarte | Psicoterapia'/>
                  <br /><br />
                  <Titulo titulo='Psicoterapia'/>
                  <br />
                  <Typography color='primary' textAlign='center'>
                    Aprender lo valioso que eres, conocer tus límites y fortalecer tus recursos personales no tiene precio. La vida está para tomarla ahora.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box px={'5%'}>
                  <img src={servicios2} style={{width:'100%'}} alt='Clínica Proyectarte | Coach Nutricional'/>
                  <br /><br />
                  <Titulo titulo='Coach Nutricional'/>
                  <br />
                  <Typography color='primary' textAlign='center'>
                    Para verte mejor, comer mejor. La comida es una necesidad, y de esta manera, no podemos seguir cayendo en consejos rápidos y poco efectivos.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box px={'5%'}>
                  <img src={servicios3} style={{width:'100%'}} alt='Clínica Proyectarte | Tratamientos Especializados'/>
                  <br /><br />
                  <Titulo titulo='Tratamientos Especializados'/>
                  <br />
                  <Typography color='primary' textAlign='center'>
                    Si estás teniendo problemas con tu forma de verte, tu alimentación y has perdido la calma, estamos para ti con un equipo integral, experto en la emoción y los trastornos de conducta alimentaria.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <br /><br />
          <br /><br />
          <Box>
            <Typography color='primary.dark' variant='h4' fontWeight='bold' textAlign='center'>
              ENTENDEMOS QUE NO TODOS LOS PROCESOS SON IGUALES
            </Typography>
            <br />
            <Grid container spacing={9}>
              <Grid item xs={12} md={4}>
                <img src={servicios4} style={{width:'100%'}} alt='Clínica Proyectarte | Psicoterapia Individual'/>
                <br /><br />
                <Titulo titulo='Psicoterapia Individual'/>
                <br />
                <Typography color='primary' textAlign='justify' sx={{textAlignLast:'center'}}>
                  Todos podemos pasar por momentos difíciles, si sientes que algo te está sobrepasando o quisieras
                  tener un espacio propio de autoconocimiento estamos para ti. La psicoterapia está fundamentada en
                  el No juzgar, respeto a la Confidencialidad y Conocimiento, lo cual lo hace perfecto para la
                  resolución de conflictos internos así como externos. Consúltanos si tienes ansiedad, depresión,
                  problemas de habilidades sociales, entre otros.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <img src={servicios5} style={{width:'100%'}} alt='Clínica Proyectarte | Psicoterapia de Pareja'/>
                <br /><br />
                <Titulo titulo='Psicoterapia de Pareja'/>
                <br />
                <Typography color='primary' textAlign='justify' sx={{textAlignLast:'center'}}>
                  La psicoterapia de pareja tiene como centro el cuidado de la relación, desde ese concepto es
                  necesario entender dinámicas disfun- cionales como por ejemplo los significados diferentes,
                  las exigencias o deberías existentes dentro de la relación. Es común en el escenario terapéutico
                  dos interpretaciones de un mismo hecho, a lo que el terapeuta los involucra en un conocerse a sí
                  mismo como individuos y como unidad para el desenlace del conflicto. Cabe mencionar, es posible
                  que no solo lleve el caso un terapeuta sino dos, uno para cada una de las partes como co-terapeutas
                  según como lo defina la valoración inicial.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <img src={servicios6} style={{width:'100%'}} alt='Clínica Proyectarte | Psicoterapia de Adolescentes y Familia'/>
                <br /><br />
                <Titulo titulo='Psicoterapia de Adolescentes y Familia'/>
                <br />
                <Typography color='primary' textAlign='justify' sx={{textAlignLast:'center'}}>
                  Observamos el conflicto como un mensaje, algo que debe ser escuchado para su resolución y así
                  nutrir la familia como un árbol que vive. Así mismo, reconocemos que el tiempo pasa volando,
                  que cada generación trae nuevas situaciones y también vemos que en muchos casos no hemos resuelto
                  las anteriores, por lo que, la psicoterapia de adolescencia y familia está orientada a la
                  resolución de conflictos específicos y la toma de consciencia de un lugar de bienestar,
                  autenticidad y encuentro dentro del sistema familiar.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <img src={servicios7} style={{width:'100%'}} alt='Clínica Proyectarte | Grupos de Apoyo'/>
                <br /><br />
                <Titulo titulo='Grupos de Apoyo'/>
                <br />
                <Typography color='primary' textAlign='justify' sx={{textAlignLast:'center'}}>
                  Los grupos de apoyo están suscritos bajo una modalidad abierta, en la que puedes asistir para
                  adquirir una consciencia de trabajo familiar, emocional o simplemente darle una pausa a tus días.
                  No existe una restricción cuando hablamos de bienestar o felicidad. Para esto hemos diseñado
                  espacios de arte, familias, movimiento corporal y ansiedad.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <img src={servicios8} style={{width:'100%'}} alt='Clínica Proyectarte | Para verte mejor, comer mejor'/>
                <br /><br />
                <Titulo titulo='Para verte mejor, comer mejor'/>
                <br />
                <Typography color='primary' textAlign='justify' sx={{textAlignLast:'center'}}>
                  La psicoterapia de pareja tiene como centro el cuidado de la relación, desde ese concepto es
                  necesario entender dinámicas disfun- cionales como por ejemplo los significados diferentes,
                  las exigencias o deberías existentes dentro de la relación. Es común en el escenario terapéutico
                  dos interpretaciones de un mismo hecho, a lo que el terapeuta los involucra en un conocerse a sí
                  mismo como individuos y como unidad para el desenlace del conflicto. Cabe mencionar, es posible
                  que no solo lleve el caso un terapeuta sino dos, uno para cada una de las partes como co-terapeutas
                  según como lo defina la valoración inicial.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{backgroundImage: `linear-gradient(${theme.palette.primary.main}, ${theme.palette.secondary.light})`}}>
                <img src={servicios9} style={{width:'100%'}} alt='Clínica Proyectarte | Cuidadores'/>
                <br /><br />
                <Box sx={{margin: '0 10%'}}>
                  <Titulo titulo='También estamos para los cuidadores'/>
                </Box>
                <br />
                <Box sx={{margin: '0 10%'}}>
                <Typography color='primary' textAlign='justify' sx={{textAlignLast:'center'}}>
                  En ocasiones, nos preocupamos tanto por una situación específica que descuidamos las demás.
                  No es la excepción en las enfermedades, y un “tengo que poder ser fuerte” no es siempre suficiente.
                  Acá encontrarás recomendaciones, pausas y múltiples personas capaces de gestionar tus recursos.
                </Typography>
                </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <br /><br />
        </Box>
        <Box>
          <Grid container>
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundImage:`url(${fondoAzul})`,
                  backgroundSize:'100%'
                }}
              >
                <Stack alignItems='center' justifyContent='space-evenly' height='100%'>
                  <Stack direction='row' justifyContent='space-evenly' width='100%'>
                    <img src={famisanar} style={{width:'180px'}} alt='Famisanar' />
                    <img src={sanitas} style={{width:'180px'}} alt='Sanitas' />
                  </Stack>
                  <img src={ecopetrol} style={{width:'180px'}} alt='Ecopetrol' />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  padding:'0 5%',
                  background:theme.palette.secondary.light
                }}
              >
                <Box
                  sx={{
                    backgroundImage:`url(${lines})`,
                    backgroundSize:'50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top right'
                  }}
                >
                  <Box sx={{height:'20vh'}}></Box>
                  <Typography
                    fontWeight='bold'
                    sx={{color:theme.palette.primary.dark}}
                    variant='h3'
                  >
                    CONVENIOS
                  </Typography>
                  <Typography color='primary' variant='h6'>
                    Nuestra atención está basada en la calidad humana, los altos estándares de calidad y nuestro
                    deseo por aportar a la sociedad son banderas encada una de nuestras acciones, misión y visión
                    como gestores de salud y bienestar.
                  </Typography>
                  <Box sx={{height:'20vh'}}></Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </>
  )

}

export default Servicios;