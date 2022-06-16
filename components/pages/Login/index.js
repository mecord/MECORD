import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import { login } from "../../../mock";
import { Alert } from "../../atoms/AlertDialog";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();

  const handleOnSubmit = (data) => {
    console.log(data);
    if (data.email !== login.email || data.password !== login.password) {
      onOpenAlert();
      return;
    }
    router.push("/hospital-dashboard");
  };

  const handleClick = () => setShowPassword(!showPassword);

  return (
    <Center height="xl">
      <Stack spacing="5">
        <Text fontSize="5xl" fontWeight="bold" textAlign="center">
          Login Admin
        </Text>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Stack spacing="5">
            <FormControl isInvalid={errors.email}>
              <Input {...register("email")} placeholder="Email" />
              <FormErrorMessage>
                {errors.email && errors.email?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <InputGroup size="md">
                <Input
                  {...register("password")}
                  placeholder="Password"
                  pr="4.5rem"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <IconButton variant={"ghost"} onClick={handleClick}>
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </IconButton>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password?.message}
              </FormErrorMessage>
            </FormControl>

            <Button colorScheme="blue" type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
      <Alert
        isOpen={isOpenAlert}
        onClose={onCloseAlert}
        title={"Error"}
        text={"Mohon Periksa Kembali Email dan Password Anda"}
      />
    </Center>
  );
};

export default Login;
