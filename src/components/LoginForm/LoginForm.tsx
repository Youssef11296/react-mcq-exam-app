// Modules & Hooks
import { useForm } from "react-hook-form";
// Styles
import "./LoginForm.scss";

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => {
    console.log({ data });
    reset({ name: null, email: null, password: null });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input__field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true, minLength: 3, maxLength: 30 })}
          placeholder="ex. Youssef Shaaban"
        />
      </div>
      <div className="input__field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register("email")}
          placeholder="ex. youssef@mail.com"
        />
      </div>
      <div className="input__field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="name"
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
          placeholder="********"
        />
      </div>
      <div className="input__field">
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
