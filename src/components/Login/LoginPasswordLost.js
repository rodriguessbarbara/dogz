import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import useFetch from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../api";
import Loading from "../Loading";
import { Erro } from "../Erro";

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, erro, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: "http://localhost:3000/login/perdeu",
      });
      await request(url, options);
    }
  }

  // if (data)
  return (
    <section>
      <h1 className="titulo">Esqueceu sua senha?</h1>
      {data ? (
        <p style={{color: 'green'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Erro erro={erro} />
    </section>
  );
};

export default LoginPasswordLost;
