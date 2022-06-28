import * as yup from "yup";
import { UserDataSearchFormValues } from "../../types/schema/userDataSearch";

export const userDataSearchSchema: yup.SchemaOf<UserDataSearchFormValues> = yup
  .object()
  .shape({
    rumah_sakit: yup.string().min(3).required(),
    patient_id: yup.string().required(),
  });
