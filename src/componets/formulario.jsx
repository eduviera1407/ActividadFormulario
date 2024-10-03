import React, { useState } from 'react';
import { Button, Typography, Box, TextField, Container, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Select, MenuItem, Checkbox, Grid2, Rating, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { red } from '@mui/material/colors';

function FormRegistro() {

  const [data, setData] = useState({
    name: '',
    surname: '',
    age: '',
    option: '',
    favoriteLanguage: '',
    acceptTerms: false,
    rating: 0,
  });

  const [openConfirm, setOpenConfirm] = useState(false); 
  const [openResult, setOpenResult] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setData({
      ...data,
      acceptTerms: e.target.checked,
    });
  };

  const handleRatingChange = (event, newValue) => {
    setData({
      ...data,
      rating: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenConfirm(true); 
  };

  const handleConfirmYes = () => {
    setOpenConfirm(false);
    setOpenResult(true); 
    console.log("Datos enviados:", data);
  };

  const handleConfirmNo = () => {
    setOpenConfirm(false); 
  };

  const handleCloseResult = () => {
    setOpenResult(false); 
  };

  const handleReset = () => {
    setData({
      name: '',
      surname: '',
      age: '',
      option: '',
      favoriteLanguage: '',
      acceptTerms: false,
      rating: 0,
    });
  };

  return (
    <Container>
      <Typography variant="h6" color="primary" sx={{ mt: 2, mb: 2 }}>
        Formulario de Registro
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid2 container spacing={2} padding={1}>
          {/* Campos de texto: Nombre, Apellidos, Edad */}
          <Grid2 size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
            <TextField
              required
              label="Nombre"
              variant="outlined"
              fullWidth
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
            <TextField
              required
              label="Apellidos"
              variant="outlined"
              fullWidth
              name="surname"
              value={data.surname}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
            <TextField
              required
              label="Edad"
              variant="outlined"
              fullWidth
              type="number"
              name="age"
              value={data.age}
              onChange={handleChange}
            />
          </Grid2>

          {/* Radio buttons para seleccionar género */}
          <Grid2 item xs={12} sm={6}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Selecciona una opción</FormLabel>
              <RadioGroup
                row
                aria-label="option"
                name="option"
                value={data.option}
                onChange={handleChange}
              >
                <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                <FormControlLabel value="otro" control={<Radio />} label="Otro" />
              </RadioGroup>
            </FormControl>
          </Grid2>

          {/* Select para elegir lenguaje favorito */}
          <Grid2 size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
            <FormControl fullWidth>
              <Select
                required
                name="favoriteLanguage"
                value={data.favoriteLanguage}
                onChange={handleChange}
                displayEmpty
                variant="outlined"
              >
                <MenuItem value="" disabled>Elegir Lenguaje Favorito</MenuItem>
                <MenuItem value="java">Java</MenuItem>
                <MenuItem value="javascript">JavaScript</MenuItem>
                <MenuItem value="python">Python</MenuItem>
                <MenuItem value="ruby">Ruby</MenuItem>
              </Select>
            </FormControl>
          </Grid2>

          {/* Checkbox para aceptar términos */}
          <Grid2 direction={{ xs: "column", sm: "column", md: "column", lg: "column", xl: "column" }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>

            <FormControlLabel
              control={
                <Checkbox
                 required
                  checked={data.acceptTerms}
                  onChange={handleCheckboxChange}
                  color="primary"
                />
              }
              label="Acepto los términos y condiciones"
            />
          </Grid2>

          {/* Rating para puntuar la encuesta */}
          <Grid2 direction={{ xs: "column", sm: "column", md: "column", lg: "column", xl: "column" }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
            <Typography>Puntúa esta encuesta</Typography>
            <Rating
              name="rating"
              value={data.rating}
              onChange={handleRatingChange}
            />
          </Grid2>

          {/* Botones de registro y limpieza */}
          <Grid2 size={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
              Enviar
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }} >
            <Button type="button" variant="contained" color="warning" fullWidth sx={{ mt: 3 }} onClick={handleReset}>
              Limpiar
            </Button>
          </Grid2>
        </Grid2>
      </Box>

      {/* Diálogo de confirmación */}
      <Dialog open={openConfirm} onClose={handleConfirmNo}>
        <DialogTitle>Confirmación</DialogTitle>
        <DialogContent>
          <Typography>¿Estás seguro de mandar la encuesta?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirmNo} color="primary">No</Button>
          <Button onClick={handleConfirmYes} color="primary">Sí</Button>
        </DialogActions>
      </Dialog>

      
    </Container>
  );
}

export default FormRegistro;
