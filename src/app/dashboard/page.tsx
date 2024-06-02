import LogoutButton from "@/components/logoutButton/LogoutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <div>Olá, {session?.user?.name} </div>
      <div>Dashboard</div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default page;
