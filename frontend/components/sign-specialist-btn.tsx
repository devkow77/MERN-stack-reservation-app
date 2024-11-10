import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Form,
} from "../components/ui/form";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from "../redux/sign-client-slice";
import { RootState } from "redux/store";
import { useState, useEffect } from "react";
import { useToast } from "../hooks/use-toast";
import { useNavigate } from "react-router-dom";

const checkEmailFormSchema = z.object({
  email: z.string().email({
    message: "E-mail jest niepoprawny!",
  }),
});

const signInFormSchema = z.object({
  password: z.string().min(8, {
    message: "Hasło jest za krótkie!",
  }),
});

const createAccountFormSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Nazwa użytkownika jest za krótka!",
    })
    .max(15, {
      message: "Nazwa użytkownika jest za długa!",
    }),
  email: z.string().email({
    message: "E-mail jest niepoprawny!",
  }),
  password: z.string().min(8, {
    message: "Hasło jest za krótkie!",
  }),
  phoneNumber: z
    .string()
    .min(9, {
      message: "Numer telefonu musi zawierać 9 cyfr!",
    })
    .max(9, {
      message: "Numer telefonu musi zawierać 9 cyfr!",
    }),
});

const SignSpecialistBtn = ({ name }: { name: string }) => {
  const [state, setState] = useState<number>(1);
  const stage = useSelector((state: RootState) => state.signClient.stage);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();

  const checkEmailForm = useForm<z.infer<typeof checkEmailFormSchema>>({
    resolver: zodResolver(checkEmailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const signInForm = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      password: "",
    },
  });

  const createAccountForm = useForm<z.infer<typeof createAccountFormSchema>>({
    resolver: zodResolver(createAccountFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
  });

  useEffect(() => {
    setState(stage);
  }, [stage]);

  const checkEmail = async (values: z.infer<typeof checkEmailFormSchema>) => {
    try {
      const res = await fetch(
        "https://ur-mern-reservation-app.vercel.app/api/users/check",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        },
      );

      const data = await res.json();

      if (res.ok) {
        dispatch(setStage(data as number));
        createAccountForm.setValue("email", values.email);
      } else {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const signIn = async (values: z.infer<typeof signInFormSchema>) => {
    try {
      const res = await fetch(
        "https://ur-mern-reservation-app.vercel.app/api/users/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: checkEmailForm.getValues().email,
            ...values,
          }),
        },
      );

      if (res.ok) {
        navigate("/profile");
        dispatch(setStage(1));
      } else {
        toast({
          title: "Błędne dane!",
          description: "Podane hasło jest niepoprawne.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const createAccount = async (
    values: z.infer<typeof createAccountFormSchema>,
  ) => {
    try {
      const res = await fetch(
        "https://ur-mern-reservation-app.vercel.app/api/users/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        },
      );

      if (res.ok) {
        toast({
          title: "Pomyślnie utworzono nowego użytkownika!",
          description: "Zaloguj się, aby wygodnie rezerwować wizyty.",
          variant: "success",
        });
        createAccountForm.reset();
        dispatch(setStage(2));
      } else {
        toast({
          title: "Nazwa użytkownika albo numer telefonu",
          description: "Spróbuj ponownie!",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  switch (state) {
    case 1:
      return (
        <Dialog>
          <DialogTrigger className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium transition-colors hover:bg-yellow-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            {name}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className="flex flex-col items-center justify-center">
              <DialogTitle className="text-2xl">Zacznij zarabiać</DialogTitle>
              <DialogDescription>
                Utwórz konto lub zaloguj się, aby w prosty sposób zarabiać.
              </DialogDescription>
            </DialogHeader>
            <Form {...checkEmailForm} key={state}>
              <form
                onSubmit={checkEmailForm.handleSubmit(checkEmail)}
                className="space-y-8"
                name="checkEmail"
              >
                <FormField
                  control={checkEmailForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="E-mail" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-700"
                  disabled={!checkEmailForm.formState.isValid}
                >
                  Dalej
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      );
    case 2:
      return (
        <Dialog>
          <DialogContent>
            <DialogHeader className="flex flex-col items-center justify-center">
              <DialogTitle className="text-2xl">Witamy ponownie</DialogTitle>
              <DialogDescription>
                Wpisz haslo i zaloguj sie jako{" "}
                <span className="font-semibold">
                  {checkEmailForm.getValues("email")}
                </span>
              </DialogDescription>
            </DialogHeader>
            <Form {...signInForm} key={state}>
              <form
                onSubmit={signInForm.handleSubmit(signIn)}
                className="space-y-8"
                name="signIn"
              >
                <FormField
                  control={signInForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Haslo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-700"
                  onClick={() => console.log(signInForm.getValues())}
                  disabled={!signInForm.formState.isValid}
                >
                  Zaloguj się
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      );
    case 3:
      return (
        <Dialog>
          <DialogContent>
            <DialogHeader className="flex flex-col items-center justify-center">
              <DialogTitle className="text-2xl">Utworz konto</DialogTitle>
              <DialogDescription>
                Wpisz email i haslo aby utworzyc konto jako usługodawca
              </DialogDescription>
            </DialogHeader>
            <Form {...createAccountForm} key={state}>
              <form
                onSubmit={createAccountForm.handleSubmit(createAccount)}
                className="space-y-8"
                name="createAccount"
              >
                <FormField
                  control={createAccountForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="E-mail" {...field} disabled />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={createAccountForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Nazwa uzytkownika" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={createAccountForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Hasło" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={createAccountForm.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Numer telefonu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-700"
                  disabled={!createAccountForm.formState.isValid}
                >
                  Utwórz konto
                </Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      );
  }
};

export default SignSpecialistBtn;
