import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';



export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
  const backgroundImageUrl =
    "https://portal.andina.pe/EDPfotografia3/Thumbnail/2019/12/13/000639875W.jpg";

  const handleLogin = () => {
    // Lógica para iniciar sesión
  };

  return (
    <>
      <Grid container style={{ height: "100vh" }}>
        <Grid item xs={8}>
          <Box
            sx={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
          >
            {/* Contenido de la caja que ocupa el 70% */}
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box height="100vh" padding={5} sx={{ mt: 20 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  marginBottom: 1,
                  backgroundImage:
                    'url("https://www.une.edu.pe/test/images/logoune.gif")',
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <Typography variant="h6" component="h2">
                Trámite Documentario
              </Typography>
            </Box>
            <Typography
              variant="h5"
              gutterBottom
              fontWeight="bold"
              sx={{ mb: 4 }}
            >
              Encantado de verte denuevo
            </Typography>
            <Typography variant="h6" component="h2" sx={{ ml: 2 }}>
              Login
            </Typography>
            <TextField
              label="Email or user"
              variant="filled"
              fullWidth
              sx={{ mb: 4 }}
            />
            <Typography variant="h6" component="h2" sx={{ ml: 2 }}>
              Password
            </Typography>
            <FormControl sx={{ m: 1 }} variant="filled" fullWidth>
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}
              >
                <Switch />
                <Typography variant="h6" component="h6">
                  Remember me
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" component="h6" color="primary">
                  Forgot password?
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Iniciar sesión
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
