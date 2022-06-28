import * as yup from "yup";
import { RegistrationFormValues } from "../../types/schema/registrationSchema";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const registrationSchema: yup.SchemaOf<RegistrationFormValues> = yup
  .object()
  .shape({
    nama_lengkap: yup.string().min(3).required(),
    tanggal_lahir: yup.string().required(),
    nik: yup.string().required(),
    email: yup.string().email().required(),
    no_hp: yup
      .string()
      .matches(phoneRegExp, "Nomor telepon tidak valid!")
      .required(),
  });
