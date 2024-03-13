'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginController from '../../controller/Login';
import { Alert, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import Image from 'next/image';

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      style={{
        position: 'absolute',
        bottom: 10,
      }}
      {...props}
    >
      {'Copyright © '}
      <Link
        color='inherit'
        href='https://www.devthiagobraga.com.br/'
        target='blank'
      >
        Desenvolvido por Thiago Braga
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignInSide() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submeteu', event.currentTarget.checkValidity());
    if (event.currentTarget.checkValidity()) {
      const data = {
        login,
        password,
      };
      if (!data.login || !data.password)
        return {
          error: 'Email e/ou senha inválidos',
        };
      const response = await LoginController(login, password);
      console.log('response: ', response);
      if (response.status !== 200) {
        setError('Email e/ou senha inválidos');
        return {
          error: 'Email e/ou senha inválidos',
        };
      }

      window.location.href = '/home';
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // limpar mensagem de erro após 5 segundos
  if (error) {
    setTimeout(() => {
      setError(null);
    }, 5000);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
          sx={{
            backgroundImage: 'url(personal-training.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Image src='/logo.png' alt={'Logo FGFA'} width={100} height={100} />
            <Typography component='h1' variant='h5'>
              Acesse Abaixo
            </Typography>
            <Box
              component='form'
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                error={error ? true : false}
                required
                fullWidth
                id='login'
                label='Login'
                name='login'
                autoComplete='login'
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                autoFocus
              />
              <TextField
                margin='normal'
                error={error ? true : false}
                required
                fullWidth
                name='password'
                label='Senha'
                type={showPassword ? 'text' : 'password'}
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge='end'
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Lembrar de mim'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                color='primary'
                style={{ backgroundColor: '#0d47a1' }}
              >
                Acesse
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2'>
                    {'Não tem uma conta? Cadastre-se'}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
              {error && (
                <Alert className='absolute right-4 bottom-5' severity='error'>
                  {error}
                </Alert>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
