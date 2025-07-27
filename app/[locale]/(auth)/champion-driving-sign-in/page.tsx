import React from "react";
import SignInForm from "@/components/forms/SignInForm";

export default function SignInPage() {
  return (
    <section className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        <SignInForm />
      </div>
    </section>
  );
}
