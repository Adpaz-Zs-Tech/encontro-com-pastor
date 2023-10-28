"use client";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useForm } from "react-hook-form";

import {
  InputBase,
  Title1,
  Text,
  Title2,
  Header,
  SelectboxBase,
} from "@/components";
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
    console.log(data);
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
            label="Nome Completo"
            name="name"
            placeholder="Seu nome completo"
            rules={{ required: "Nome obrigatorio." }}
            error={errors.name?.message}
          />
          <InputBase
            control={control}
            label="Telefone"
            name="telefone"
            rules={{
              required: "Telefone obrigatorio.",
            }}
            error={errors.telefone?.message}
            placeholder="Seu número de celular"
            type="number"
          />

          <InputBase
            control={control}
            label="Email"
            name="email"
            rules={{ required: "Email obrigatorio." }}
            error={errors.email?.message}
            placeholder="Seu melhor e-mail"
          />

          <InputBase
            control={control}
            label="Data de nascimento"
            name="nascimento"
            rules={{
              required: "Data de nascimento obrigatoria.",
            }}
            error={errors.nascimento?.message}
            placeholder="Sua data de nascimento"
          />

          <SelectboxBase
            control={control}
            label="Estado Civil"
            name="estadoCivil"
            rules={{ required: "Selecione uma opção valida." }}
            error={errors.estadoCivil?.message}
            options={[
              { label: "Solteiro(a)", value: "solteiro" },
              { label: "Casado(a)", value: "casado" },
              { label: "Divorciado(a)", value: "divorciado" },
              { label: "Viuvo(a)", value: "viuvo" },
            ]}
          />
          <InputBase
            control={control}
            label="Data do casamento"
            name="dataCasamento"
            placeholder="A data do seu casamento"
          />
          <SelectboxBase
            control={control}
            label="Escolaridade"
            name="escolaridade"
            rules={{ required: "Selecione uma opção valida." }}
            error={errors.estadoCivil?.message}
            options={[
              {
                label: "Ensino fundamental Incompleto",
                value: "fundamentalIncompleto",
              },
              {
                label: "Ensino fundamental completo",
                value: "fundamentalCompleto",
              },
              { label: "Ensino médio incompleto", value: "medioIncompleto" },
              { label: "Ensino médio completo", value: "medioCompleto" },
              { label: "Técnico", value: "tecnico" },
              { label: "Graduação cursando", value: "graduacaoCursando" },
              { label: "Graduação", value: "graduacao" },
              { label: "Pós-graduação", value: "posGraduacao" },
              { label: "Mestrado", value: "mestrado" },
              { label: "Doutorado", value: "doutorado" },
            ]}
          />
          <InputBase
            name="curso"
            label="Curso"
            control={control}
            placeholder="Curso caso tenha feito"
          />
          <InputBase
            name="profissao"
            label="Profissão"
            control={control}
            placeholder="Sua profissão ou último trabalho"
            rules={{ required: "Profissão ou último trabalho obrigatório." }}
            error={errors.profissao?.message}
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
