"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { FormEvent, Suspense, useState } from "react";
import { PropagateLoader } from "react-spinners";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const error = searchParams.get("error");
  async function login(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard",
    });
  }
  return (
    <form
      onSubmit={login}
      className="bg-white p-12 rounded-lg w-96 max-w-full flex justify-center items-center flex-col gap-2"
    >
      <h2 className="text-black font-bold text-xl mb-4">Faça o seu login</h2>
      <input
        name="email"
        type="email"
        placeholder="Email"
        className="input input-primary bg-white w-full"
      />
      <input
        name="password"
        type="password"
        placeholder="Senha"
        className="input input-primary bg-white w-full"
      />
      <button
        className="btn btn-primary w-full flex items-center"
        type="submit"
      >
        {isLoading ? <PropagateLoader color="#fff" /> : "Sign In"}
      </button>
      <Suspense
        fallback={
          <div>
            <PropagateLoader />
          </div>
        }
      >
        {error === "CredentialsSignin" && (
          <div className="text-red-400">Erro no login</div>
        )}
      </Suspense>
    </form>
  );
};

export default LoginForm;
