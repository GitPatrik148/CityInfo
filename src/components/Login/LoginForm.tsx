import { Button, TextField, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";

interface LoginFormFields {
  username: string;
  password: string;
}

interface LoginFormProps {
  handleDialogClose: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ handleDialogClose }) => {
  const { logIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>();

  const handleLoginSubmit = (data: LoginFormFields) => {
    console.log({ data });

    //some validations happening at BE side

    //success

    handleDialogClose();

    logIn();
  };

  console.log({ errors });

  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)} noValidate>
      <TextField
        autoFocus
        margin="dense"
        id="username"
        label="Username"
        type="text"
        fullWidth
        variant="outlined"
        {...register("username", { required: "Username is required" })}
        error={!!errors.username}
        helperText={errors.username && errors.username.message}
      />

      <TextField
        margin="dense"
        id="password"
        label="Password"
        type="password"
        fullWidth
        variant="outlined"
        {...register("password", { required: "Password is required" })}
        error={!!errors.password}
        helperText={errors.password && errors.password.message}
      />
      <Button type="submit">Log me in</Button>
    </form>
  );
};

export default LoginForm;
