"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@app/client/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@app/client/components/ui/form";
import { Input } from "@app/client/components/ui/input";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email({
    message: "Wrong email ",
  }),
  password: z.string().min(8, {
    message: "Password must be 8 characters long",
  }),
});
function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      Password: "",
    },
  });
  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div
      className="bg-cover  bg-center h-screen"
      style={{ "background-image": "url('/login.jpg')" }}
    >
      <div className="py-48 px-24">
        <Form {...form} className="bg-white">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-slate-600 font-semibold text-lg border rounded-lg shadow-2xl bg-white w-fit p-10"
          >
            <p className="mb-4 font-semibold text-3xl border-b-2 py-4 border-b-gray-500 ">Login </p>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input className="w-96" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input className="w-96" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button className="mt-5 ml-10 text-gray-200 text-base bg-gray-600 w-64 " type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
export default Login;
