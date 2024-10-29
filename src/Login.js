import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

const Login = ({ setAuthToken }) => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Пример обработки авторизации
    const fakeToken = "example.jwt.token"; // Обычно вы получите этот токен от API
    setAuthToken(fakeToken);
    navigate("/employee-management");
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ '& > :not(style)': { m: 1 } }}>
      <Typography variant="h4">Login</Typography>
      <TextField label="Username" {...register("username", { required: true })} />
      <TextField label="Password" type="password" {...register("password", { required: true })} />
      <Button type="submit" variant="contained" color="primary">Login</Button>
    </Box>
  );
};

export default Login;
