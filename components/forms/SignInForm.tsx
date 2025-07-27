"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { signInSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import FormInputField from "@/components/form-fields/form-input-field";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Car, Loader } from "lucide-react";
import { logIn } from "@/services/client-actions/authActions";
import { toast } from "sonner";
import { useRouter } from "@/i18n/navigation";
import { DASHBOARD_PAGE } from "@/constants/data";

function SignInForm({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const onSuccess = () => {
    toast.success("Login successful");
    router.push(`/${DASHBOARD_PAGE}`);
  };
  const onFailure = () => {
    toast.error("Login failed");
  };
  const submitHandler = async (data: z.infer<typeof signInSchema>) => {
    await logIn(data, setLoading, onSuccess, onFailure);
  };
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              Champion Driving
            </span>
          </div>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email and password below to login to your account. only
            admin and stuffs can login.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submitHandler)}>
              <div className="flex flex-col gap-6">
                <FormInputField
                  control={form.control}
                  name="username"
                  label="Username"
                  placeholder="Enter your username"
                  inputType="text"
                />
                <FormInputField
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  inputType="password"
                />
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? <Loader className="animate-spin" /> : "Log in"}
                </Button>
              </div>
              <p className="mt-8 text-center text-sm">
                Please contact admin if you are stuff, and don&apos;t know your
                login credentials.
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignInForm;
