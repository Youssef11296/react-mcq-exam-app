// modules & hooks
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { login, logout } from "../../store/actions";
import RedirectMessage from "../RedirectedMessage/RedirectedMessage";

// styles
import "./LoginForm.scss";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // selectors
  const user = useSelector((state: RootState) => state.main.user);

  // dispatcher
  const dispatch = useDispatch();

  console.log({ errors });

  // onSubmit method
  const onSubmit = (data: any) => {
    console.log({ data });
    dispatch(login(data));
    // window.location.assign("/exam");
    reset({ name: null, email: null, password: null });
  };

  // logout handler
  const logoutHandler = () => {
    dispatch(logout());
  };

  if (user)
    return (
      <RedirectMessage
        message="Are you sure you want to logout?"
        option="logout"
        optionPath="/"
        optionController={logoutHandler}
      />
    );

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
        {errors.name && <span>Password must conatin 3 letters at least</span>}
      </div>
      <div className="input__field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          placeholder="ex. youssef@mail.com"
        />
        {errors.email && <span>Please, enter a valid email address</span>}
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
        {errors.password && (
          <span>Password must conatin 8 letters at least</span>
        )}
      </div>
      <div className="input__field">
        <input type="submit" value="submit" />
      </div>
    </form>
  );
};

export default LoginForm;
