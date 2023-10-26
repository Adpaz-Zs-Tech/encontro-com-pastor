"use client";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useForm } from "react-hook-form";

import { InputBase, Title1, Text, Title2, Header } from "@/components";
import { RegisterForm } from "@/types/forms";
import { BaseButtton } from "@/components/BaseButton";

export default function Home() {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<RegisterForm>({
    mode: "onBlur",
  });

  const teste = (data: RegisterForm) => {
    console.log(data.email);
  };

  return (
    <div className="w-full ">
      <Header />
      <div className="w-full h-full p-4 sm:flex-col gap-10 justify-between">
        <Title1 title="Bem vindo ao encontro com o pastor!" />
        <div className="my-6">
          <Text
            text="O encontro com o pastor, é a nossa maneira de dar nossas boas vindas
            para a nossa igreja! Aqui iremos te apresentar a cultura da sua nova
            casa onde será muito bem acolhido!"
          />
        </div>
        <form
          onSubmit={handleSubmit(teste)}
          className="w-full border-2 shadow-lg border-gray-300 bg-white rounded-xl p-5 flex flex-col gap-3"
        >
          <Title2 title="Deixe a gente te conhecer melhor!" />
          <InputBase
            control={control}
            label="Seu nome"
            name="name"
            rules={{ required: "Nome obrigatorio" }}
            error={errors.name?.message}
          />
          <InputBase
            control={control}
            label="Seu email"
            name="email"
            rules={{ required: "Email obrigatorio" }}
            error={errors.email?.message}
          />

          <BaseButtton title="Enviar" />
        </form>
        <div className="mt-6">
          <Title2 title="Contate-nos" />
          <Text icon={<PhoneIcon />} text="+55 (84) 2010-4246" />
          <Text
            icon={<DirectionsIcon />}
            text="Rua Delmiro Gouveia, 17 - Neópolis, Natal - RN, 59086-010 - Brasil"
          />
        </div>
      </div>
    </div>
  );
}
//ds
