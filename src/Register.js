import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Пример обработки регистрации
    console.log(data);
    navigate("/login");
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ '& > :not(style)': { m: 1 } }}>
      <Typography variant="h4">Register</Typography>
      <TextField label="Username" {...register("username", { required: true })} />
      <TextField label="Password" type="password" {...register("password", { required: true })} />
      <Button type="submit" variant="contained" color="primary">Register</Button>
    </Box>
  );
};

export default Register;
