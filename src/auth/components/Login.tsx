import threadApi from "../../api/threadsApi";
import { useForm } from "../../hooks";
import { onChangeScreen, onLogin } from "../../store/auth/authSlice";
import { useAppDispatch } from "../../store/hook";

interface LoginForm {
  username: string;
  password: string;
}

export const Login = () => {
  const dispath = useAppDispatch();
  const { username, password, handleChange, form } = useForm<LoginForm>({
    username: "",
    password: "",
  });

  const loginSubmit = async ( event: React.FormEvent<HTMLFormElement>, username: string, password: string): Promise<void> => {
    event.preventDefault();
    try {
      const { data } = await threadApi.post("/users/login", { username,password })
      localStorage.setItem("token", data.token)
      dispath(onLogin())			

    } catch (err) {
      throw new Error(`Error in ${err}`);
    }
  };


  return (
    <>
      <section className="bg-primary">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold  text-white"
          >
            <img className="w-8 h-8 mr-2" src="" alt="logo" />
            Flowbite
          </a>
          <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(event) => loginSubmit(event, username, password)}
              >
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Your username
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    value={username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p
                  className="text-sm font-light text-gray-500 dark:text-gray-400"
                  onClick={() => dispath(onChangeScreen())}
                >
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
              <h1>{JSON.stringify(form)}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
