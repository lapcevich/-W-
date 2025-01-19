import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";
import EmployeeAPI from "./api/service"; // Импортируем API
import { AuthContext } from "./AuthContext"; // Импортируем контекст

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Получаем метод login из контекста

  const onSubmit = async (data) => {
    try {
      const token = await EmployeeAPI.login(data.username, data.password);
      login(token); // Устанавливаем токен в контексте
      navigate("/employee-management");
    } catch (error) {
      console.error(error);
      // Здесь можно добавить обработку ошибок, например, показать сообщение пользователю
    }
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