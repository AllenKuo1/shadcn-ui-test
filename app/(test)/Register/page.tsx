"use client";

import { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { PasswordInput } from "@/components/password-box";
import * as React from "react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { StopCircle, Loader2 } from "lucide-react";
import auth0 from "auth0-js";
import {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_DB_CONNECTION_NAME,
} from "@/components/auth0_var";
var webAuth = new auth0.WebAuth({
  domain: AUTH0_DOMAIN,
  clientID: AUTH0_CLIENT_ID,
});

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoading, setLoading] = React.useState(false);

  const validateFields = () => {
    return email.length && password && firstName && lastName && username;
  };

  const handleClick = () => {
    setLoading(true);
    if (!validateFields()) {
      alert("Please fill in all fields");
      setLoading(false);
      return;
    }

    // Call Auth0 signup function
    webAuth.signup(
      {
        connection: "Username-Password-Authentication",
        username: username,
        password: password,
        email: email,
        userMetadata: {
          firstName: firstName,
          lastName: lastName,
          username: username,
          email: email,
        },
      },
      function (err) {
        setLoading(false);
        if (err) {
          return alert("Something went wrong: " + err);
        }
        return alert("success signup without login!");
      }
    );
  };

  return (
    <main className="container flex flex-col items-center justify-center space-y-5">
      <h1 className="text-7xl font-semibold tracking-tight">Welcome!</h1>
      <blockquote className="mt-6 border-l-2 pl-6 italic flex-col justify-center">
        {/* "{quote}" */}
        &apos;insert quote here&apos;
      </blockquote>
      <Separator />
      <Label htmlFor="ps1">Please Enter Your Login Information</Label>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        className="w-80"
        type="email"
        placeholder="Email"
      />
      <Input
        onChange={(e) => setFirstName(e.target.value)}
        className="w-80"
        type="firstName"
        placeholder="First Name"
      />
      <Input
        onChange={(e) => setLastName(e.target.value)}
        className="w-80"
        type="lastName"
        placeholder="Last Name"
      />
      <Input
        onChange={(e) => setUsername(e.target.value)}
        className="w-80"
        type="username"
        placeholder="Username"
      />
      <PasswordInput
        className="w-80"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="password"
      />
      <Link className="h-4" href="/Login">
        Go to login page
      </Link>
      <Button disabled={isLoading} onClick={handleClick} className="w-80">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-10 animate-spin" />
            Please wait...
          </>
        ) : (
          "Register"
        )}
      </Button>
    </main>
  );
}
