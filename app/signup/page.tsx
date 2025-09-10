import { SignUpForm } from "@/components/signup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - MailFusion",
};

export default function SignUpPage() {
  return <SignUpForm />;
}
