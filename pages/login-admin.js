import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import HelpButton from "../components/atoms/HelpButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import { login } from "../mock";
import { Alert } from "../components/atoms/AlertDialog";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});

const LoginAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const [show, setShow] = useState(false);
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();

  const onSubmitHandler = (data) => {
    console.log(data);
    if (data.email === login.email && data.password == login.password) {
      router.push("/hospital-dashboard");
    } else {
      onOpenAlert();
    }
  };

  const handleClick = () => setShow(!show);

  return (
    <Center height="xl">
      <Stack spacing="5">
        <Text fontSize="5xl" fontWeight="bold" textAlign="center">
          Login Admin
        </Text>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
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
                  type={show ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <IconButton variant={"ghost"} onClick={handleClick}>
                    {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
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
      <HelpButton>Login</HelpButton>
    </Center>
  );
};

export default LoginAdmin;
