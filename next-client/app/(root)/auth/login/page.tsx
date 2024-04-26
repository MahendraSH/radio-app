"use client";
import { FC, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { axiosClient } from "@/lib/axios/helper";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "password must be at least 6 characters.",
  }),
});
interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      setIsLoading(true);
      const res = await axiosClient.post("/users/login", values);
      if (res.status === 200) {
        toast.success("Login Successful");
        router.push("/dash/overview");
      }
    } catch (error: AxiosError | any) {
      toast.error("Login Failed :- " + error.response?.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className=" flex justify-center items-center min-h-[70vh] ">
      {/*  Login Form  */}
      <div className="w-full flex  justify-center lg:items-start lg:py-4 items-center  gap-y-6 rounded-lg  md:w-2/3 lg:w-1/3  mx-auto ">
        <div className=" flex flex-col  bg-card  p-8 w-full text-card-foreground space-y-8 rounded-lg lg:ring-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="username"
                        {...field}
                        autoFocus
                        className="h-12"
                      />
                    </FormControl>
                    <FormDescription>
                      Name must be at least of 2 characters
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <>
                        <Input
                          placeholder="password"
                          {...field}
                          type={showPassword ? "text" : "password"}
                          autoComplete="off" // corrected from "false"
                          className="h-12"
                        />
                        <button
                          type="button"
                          className="absolute lg:top-1/2 transform -translate-y-1/2 right-2 top-1/3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeIcon className="w-4 h-4" />
                          ) : (
                            <EyeOff className="w-4 h-4 " />
                          )}
                        </button>
                      </>
                    </FormControl>
                    <FormDescription>
                      Password must be at least of 6 characters, one Symbol, and
                      a number
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col gap-y-4">
                <Button type="submit" size={"lg"} disabled={isLoading}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
