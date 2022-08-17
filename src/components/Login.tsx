import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useAppSelector, useAppDispatch } from "../hooks/redux";
import logo from "../assets/logo.png";

//Firebase Authentication
import { app } from "../firebase/firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { logIn } from "../features/user/userSlice";

const Login = () => {
  //Consts
  const initializeFirebase = app;
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  //States & Selectorss
  const [showLoginOrRegister, setShowLoginOrRegister] =
    useState<string>("Login");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setconfirmPassword] = useState<string>("");
  const { isLoggedIn } = useAppSelector((state) => state.user);

  //Functions
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(logIn());
      })
      .catch((error) => {
        const errorCode = error.code;
        Swal.fire({
          title: "Error!",
          text: errorCode,
          icon: "error",
          showConfirmButton: false,
        });
      });
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Swal.fire({
            title: "Bien hecho!",
            text: "Te has registrado correctamente",
            icon: "success",
            showConfirmButton: false,
          });
          setShowLoginOrRegister("Login");
        })
        .catch((error) => {
          const errorCode = error.code;
          Swal.fire({
            title: "Error!",
            text: errorCode,
            icon: "error",
            showConfirmButton: false,
          });
        });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Las contraseñas deben coincidir",
        icon: "error",
        showConfirmButton: false,
      });
    }
  };

  //useEffect
  useEffect(() => {
    isLoggedIn && navigate("/home");
  }, [isLoggedIn]);

  return (
    <div>
      {showLoginOrRegister === "Login" ? (
        <section className="bg-dark">
          <div className="flex flex-col items-center justify-center px-6 py-14 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mt-6 text-2xl font-semibold ">
              <div className="w-40 m-auto">
                <img className="mr-2" src={logo} alt="logo" />
              </div>
            </div>
            <div className="w-full md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
                <h1 className="text-2xl font-bold text-light leading-tight tracking-tight md:text-2xl">
                  Inicia sesión con tu correo
                </h1>
                <form className="space-y-6 md:space-y-6" onSubmit={handleLogin}>
                  <div>
                    <input
                      type="email"
                      className="bg-gray-700 text-light sm:text-sm rounded block w-full p-3.5 focus:outline-none"
                      placeholder="Correo electrónico"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="bg-gray-700 text-light sm:text-sm rounded block w-full p-3.5 focus:outline-none"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white bg-blue hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded  px-5 py-3 text-center text-lg transition"
                  >
                    CONTINUAR
                  </button>
                  <p className=" text-seccondary">
                    ¿Primera vez en Disney+?{" "}
                    <button
                      className="text-light font-semibold hover:underline"
                      onClick={() => setShowLoginOrRegister("Register")}
                    >
                      Suscribirse
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-dark">
          <div className="flex flex-col items-center justify-center px-6 py-14 mx-auto md:h-screen lg:py-0">
            <div className="flex items-center mt-6 text-2xl font-semibold ">
              <div className="w-40 m-auto">
                <img className="mr-2" src={logo} alt="logo" />
              </div>
            </div>
            <div className="w-full md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-6 md:space-y-6 sm:p-8">
                <h1 className="text-2xl font-bold text-light leading-tight tracking-tight md:text-2xl">
                  Crea una nueva cuenta
                </h1>
                <form
                  className="space-y-6 md:space-y-6"
                  onSubmit={handleRegister}
                >
                  <div>
                    <input
                      type="email"
                      className="bg-gray-700 text-light sm:text-sm rounded block w-full p-3.5 focus:outline-none"
                      placeholder="Correo electrónico"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="bg-gray-700 text-light sm:text-sm rounded block w-full p-3.5 focus:outline-none"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="bg-gray-700 text-light sm:text-sm rounded block w-full p-3.5 focus:outline-none"
                      required
                      onChange={(e) => {
                        setconfirmPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="terms"
                        className=" text-gray-500"
                      >
                        Acepto los{" "}
                        <a
                          className="font-medium text-seccondary hover:underline"
                          href="#"
                        >
                          términos y condiciones
                        </a>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white bg-blue hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded  px-5 py-3 text-center text-lg transition"
                  >
                    SUSCRIBIRSE
                  </button>
                  <p className=" text-seccondary">
                    ¿Ya tienes una cuenta?{" "}
                    <button
                      onClick={() => setShowLoginOrRegister("Login")}
                      className="text-light font-semibold hover:underline"
                    >
                      Inicia sesión
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Login;
