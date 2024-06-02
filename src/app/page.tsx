import LoginForm from "@/components/loginForm/LoginForm";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <div className="bg-slate-600 h-screen flex justify-center px-5 items-center">
        <Suspense fallback={<div></div>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
