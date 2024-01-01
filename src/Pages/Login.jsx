import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = () => {
    console.log("login click");
  };

  return (
    <div className="loginContainer bg-red-200  ">
      <div className="loginWrapper  h-screen bg-[url('https://i.ibb.co/6bsNLj8/hosting-login.jpg')] bgImage flex justify-center items-center  ">
        <div className="loginCard bg-white  shadow-2xl  py-9 px-4 w-[92%] xsm:w-[82%] sm:w-[72%] md:w-[64%] xmd:w-[55%] lg:w-[46%] rounded border border-gray-200    ">
          <h1 className="  headingFont text-xl sm:text-2xl font-bold xsm:font-semibold sm:font-medium mb-10 text-center  ">
            Login to your account{" "}
          </h1>

          <form
            onSubmit={handleSubmit(handleLogin)}
            className=" w-[92%] xsm:w-[80%] sm:w-[76%] md:w-[72%] m-auto flex flex-col gap-8  "
          >
            <input
              type="email"
              id="email"
              className="block w-full m-auto bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded   p-2.5 outline-none "
              placeholder="Enter your email"
            />
            <input
              type="password"
              id="password"
              className="block w-full m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded   p-2.5 outline-none "
              placeholder="Enter your password"
            />

            <button className=" w-full  py-2 rounded  bg-sky-500 hover:bg-sky-600 navLinkFont text-gray-50 font-medium  text-lg ">
              Log in
            </button>

            <button class="flex items-center justify-center gap-2 rounded border border-gray-300 bg-gray-100 px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-gray-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">
              <svg
                class="h-5 w-5 shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                  fill="#34A853"
                />
                <path
                  d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
