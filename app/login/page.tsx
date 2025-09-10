import { LoginForm } from "@/components/login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - MailFusion",
};

export default function LoginPage() {
  return <LoginForm />;
}
