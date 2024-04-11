import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useCreateForm from "@/hooks/useCreateForm";
import { LS_TOKEN_KEY } from "@/utils/_constants";
import { BookOpenText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../schema";
import { useRegisterUserMutation } from "../services";

const Register = () => {
  const form = useCreateForm(registerSchema, {
    email: "",
    lastname: "",
    firstname: "",
    role: "USER",
    password: "",
  });

  const navigate = useNavigate()

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const onSubmit = (user: RegisterType) => {
    registerUser(user).then((response: any) => {
      if (response.error) {
        // Traiter l'erreur
        return;
      }

      localStorage.setItem(LS_TOKEN_KEY, JSON.stringify(response?.data));
      navigate("/adherents");
    });
  };
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-350px gap-6">
          <div className="grid gap-2 text-center mb-8">
            <div className="flex gap-3 items-center justify-center">
              <BookOpenText className="size-6" />
              <span className="text-3xl font-bold">Biblio WF</span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-900">Nom</FormLabel>
                    <FormControl>
                      <Input className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-900">Prénoms</FormLabel>
                    <FormControl>
                      <Input className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-900">Email</FormLabel>
                    <FormControl>
                      <Input className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-900">
                      Mot de passe
                    </FormLabel>
                    <FormControl>
                      <Input className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="mt-4 w-full"
                type="submit"
                disabled={!form.formState?.isValid}
              >
                Se connecter
              </Button>
              <div className="mt-4 text-center text-sm">
                Vous avez déjà un compte?
                <Link to="/auth/login" className="underline">
                  {" "}
                  Se connecter
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>

      <div className="bg-muted lg:block">
        <img
          src="https://cdn.pixabay.com/photo/2015/11/19/21/11/book-1052014_1280.jpg"
          alt="Image"
          className="object-cover h-full w-full max-h-screen"
        />
      </div>
    </div>
  );
};

export default Register;
