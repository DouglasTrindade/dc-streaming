"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";

export const AuthForm = () => {
  const form = useForm();
  const handleSubmit = form.handleSubmit(async (data) => {
    console.log(data);
    await signIn("email", { email: data.email });
  });

  return (
    <section className="flex h-screen items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-3xl font-bold">Sign in</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Enter your email to receive a magic link to sign in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  required
                  type="email"
                  {...form.register("email")}
                />
              </div>
              <Button className="w-full" type="submit">
                Send Magic Link
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
