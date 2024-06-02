"use client";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {
  return (
    <button className="btn btn-outline" onClick={() => signOut()}>
      Sign out
    </button>
  );
};

export default LogoutButton;
