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

import { useAuth0 } from '@auth0/auth0-react';
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

const quotes = [
  "it's never programming's fault",
  "MORE THAN ROBOTS",
  "programming is fun",
  "insert generic quote",
  "most generic weblib ever......",
  "wasted five seconds reading this quote",
];

function randomQuote() {
  const num = Math.floor(Math.random() * quotes.length);
  return quotes[num];
}

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [quote] = useState(randomQuote());

  const { isAuthenticated } = useAuth0();
  console.log("logged in?"+isAuthenticated)

  const handleClick = () => {
    setLoading(true);
    webAuth.login(
      {
        realm: "Username-Password-Authentication",
        username: username,
        password: password,
        email: "1", // placeholder, email isnt needed to sign in but needs to exist
        responseType: 'id_token',
        onRedirecting: function (done) {
          console.log("Loggin in...")
        done()
        }
      },
      function (err) {
        setLoading(false);
        if (err) {
          console.log(err);
          return alert("Something went wrong: " + err);
        }
        return alert("Login successful");
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
      <Link
      className="h-4"
        href="/Register"
        >
          Register
      </Link>
      <Button disabled={isLoading} onClick={handleClick} className="w-80">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-10 animate-spin" />
            Please wait...
          </>
        ) : (
          "Login"
        )}
      </Button>
    </main>
  );
}
