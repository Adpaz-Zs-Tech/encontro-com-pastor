import { InputBase, Title1, Text, Title2 } from "@/app/components";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionsIcon from "@mui/icons-material/Directions";
export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-200">
      <div className="w-full h-full p-9 flex gap-10 justify-between">
        <div className="w-4/12 h-full flex flex-col">
          <Title1 title="Bem vindo ao encontro com o pastor!" />
          <Text
            text="O encontro com o pastor, é a nossa maneira de dar nossas boas vindas
            para a nossa igreja! Aqui iremos te apresentar a cultura da sua nova
            casa onde será muito bem acolhido!"
          />
          <div className=" h-full flex flex-col justify-end">
            <Title2 title="Contate-nos" />
            <Text icon={<PhoneIcon />} text="+55 (84) 2010-4246" />
            <Text
              icon={<DirectionsIcon />}
              text="Rua Delmiro Gouveia, 17 - Neópolis, Natal - RN, 59086-010 - Brasil"
            />
          </div>
        </div>
        <form className="w-6/12 h-full border-2 shadow-lg border-gray-300 bg-white rounded-xl p-10 flex flex-col gap-3">
          <Title2 title="Deixe a gente te conhecer melhor!" />
          <InputBase />
          <InputBase />
          <InputBase />
          <InputBase />
          <InputBase />
          <InputBase />
          <InputBase />
        </form>
      </div>
    </div>
  );
}
