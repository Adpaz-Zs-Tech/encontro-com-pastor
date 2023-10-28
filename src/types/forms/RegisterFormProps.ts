export interface RegisterForm {
  name: string;
  email: string;
  telefone: number;
  nascimento: number;
  estadoCivil: string;
  escolaridade: string;
  curso?: string;
  profissao: string;
  dataCasamento: string;
  familiaresIgj: boolean;
}
