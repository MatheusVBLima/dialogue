"use client";
import { useUser } from "@clerk/nextjs";

function WelcomeUser() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return null;
  }
  return (
    <h1 className="text-white font-semibold text-2xl">
      Hello, {user.firstName}
    </h1>
  );
}
export default WelcomeUser;
