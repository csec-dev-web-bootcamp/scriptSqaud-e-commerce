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

const formSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Wrong email ",
    }),
    street: z
      .string()
      .min(3, { message: "Wrong Street address " })
      .max(50, { message: "String exceded 50 characters" }),

    city: z
      .string()
      .min(3, { message: "Wrong Street address " })
      .max(50, { message: "String exceded 50 characters" }),
    state: z
      .string()
      .min(3, { message: "Wrong Street address " })
      .max(50, { message: "String exceded 50 characters" }),
    zip: z.string(),

    password: z.string().min(8, {
      message: "Password must be 8 characters long",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be 8 characters long",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

export default function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="grid grid-cols-2">
      <div>
        <Image className="w-full" width="500" height="100" src="/store.jpg" alt="register" />
      </div>
      <div className="container w-full ">
        <p className="mt-10 mb-4 font-semibold text-3xl text-blue-600 ">Create Account </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="text-slate-600 font-semibold text-lg">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input className="w-96"placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem >
                  <FormLabel >Email</FormLabel>
                  <FormControl>
                    <Input className="w-96" placeholder="" {...field} />
                  </FormControl>                 
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input className="w-96" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input className="w-96" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input className="w-96" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="zip"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Zip</FormLabel>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input className="w-96" placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="mt-3  bg-blue-600 w-64 " type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
