import { Button, TextField, Typography } from "@mui/material";
import { Box } from '@mui/system';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import http from '../../../http';
import IRestaurante from '../../../interfaces/IRestaurante';

const FormularioRestaurante = () => {
  const parametros = useParams();

  useEffect(() => {
    if (parametros.id) {
      http.get<IRestaurante>(`/restaurantes/${parametros.id}/`)
        .then(resposta => setNomeRestaurante(resposta.data.nome));
    }
  }, [parametros]);

  const [nomeRestaurante, setNomeRestaurante] = useState("");

  const onSubmitForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    const restaurante = { nome: nomeRestaurante };

    if (parametros.id) {
      http.put(`/restaurantes/${parametros.id}/`, restaurante).then(() => alert('Restaurante atualizado com sucesso!'));
    } else {
      http.post('/restaurantes/', restaurante).then(() => alert('Restaurante cadastrado com sucesso!'));
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1 }}>
      <Typography component='h1' variant='h6'>Formulário de Restaurante</Typography>
      <Box component='form' onSubmit={onSubmitForm} sx={{ width: '100%' }}>
        <TextField
          label="Nome do Restaurante"
          variant="standard"
          value={nomeRestaurante}
          onChange={(evento) => setNomeRestaurante(evento.target.value)}
          fullWidth
          required
        />
        <Button sx={{ marginTop: 1 }} type="submit" variant="outlined" fullWidth>
          Salvar
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioRestaurante;
