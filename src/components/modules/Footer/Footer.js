import { useTheme } from "@mui/material"
import {
  Box,
  Grid,
  Link,
  Typography
} from "@mui/material"
import icono from "assets/icono.svg"
import hablemos from "assets/hablemos_new.png"

const Footer = () => {

  const theme = useTheme();

  return(
    <Box>
      <Grid container>
        <Grid item xs={12} md={7}>
          <Box width={'100%'} height={'100%'} minHeight={'200px'} sx={{background:'#4b508d'}}>
            <Grid container>
              <Grid item xs={3}>
                <Box sx={{padding:'20%'}}>
                  <img src={icono} alt='Clínica Proyectarte'/>
                </Box>
              </Grid>
              <Grid item xs={9}>
                <Box sx={{padding:'5%'}}>
                  <Typography
                    variant={'h3'}
                    fontWeight={'bold'}
                    sx={{color: 'white'}}
                  >
                    Clínica Proyectarte
                  </Typography>
                  <br />
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography sx={{color: 'white'}}>+571 467 33 91</Typography>
                      <br />
                      <Typography sx={{color: 'white'}}>+571 317 642 4485</Typography>
                      <br />
                      <Typography sx={{color: 'white'}}>Cra 46 #95-47</Typography>
                      <br />
                      <Typography sx={{color: 'white'}}>Bogotá, Colombia</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Link
                        href="#"
                        underline={'none'}
                        color={'secondary'}
                      >
                        ESTADOS FINANCIEROS
                      </Link>
                      <br /><br />
                      <Typography variant={'caption'} sx={{color: 'white'}}>Copyright 2021 ©</Typography>
                      <br />
                      <Typography variant={'caption'} sx={{color: 'white'}}>Todos los derechos reservados</Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={5} component={"a"} href={'https://api.whatsapp.com/send/?phone=573176424485'} target={'_blank'} sx={{textDecoration:'none'}}>
          <Box width={'100%'} height={'100%'} minHeight={'200px'}
            sx={{
              background: theme.palette.secondary.main,
              backgroundImage: `url(${hablemos})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
            }}>
            <Box sx={{padding:'5%'}}>
              <Typography
                variant={'h3'}
                sx={{color: 'white'}}
                fontWeight={'bold'}
              >
                ¿Necesitas <br /> ayuda?
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer