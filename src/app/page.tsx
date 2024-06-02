import LoginForm from "@/components/loginForm/LoginForm";

export default function Home() {
  return (
    <main>
      <div className="bg-slate-600 h-screen flex justify-center px-5 items-center">
        <LoginForm />
      </div>
    </main>
  );
}
