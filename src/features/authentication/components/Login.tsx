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
import { loginSchema } from "../schema/login.schema";
import { useLoginUserMutation } from "../services";

const Login = () => {
  const form = useCreateForm(loginSchema, {
    email: "",
    password: "",
  });

  const [logUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate()
  const onSubmit = (credentials: LoginType) => {
    logUser(credentials).then((res:any) => {
      if (res.error) {
       // TODO: Traiter l'erreur
       return
      }
      localStorage.setItem(LS_TOKEN_KEY, JSON.stringify(res?.data));
      navigate("/adherents");
    });
  };
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-350px gap-6">
          <div className="grid gap-2 text-center mb-4">
            <div className="flex gap-3 items-center justify-center">
              <BookOpenText className="size-6" />
              <span className="text-3xl font-bold">Biblio WF</span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
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
                Vous n'avez pas de compte
                <Link to="/auth/register" className="underline">
                  {" "}
                  S'inscrire
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

export default Login;
