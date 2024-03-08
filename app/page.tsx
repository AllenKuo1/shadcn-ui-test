"use client"

import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import RootLayout from "./layout";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      <div
      >
        SPROCKET <br /> STATS
      </div>
      <img
        src="@/app/images/sprocketlogoDBDBDB.png"
        alt="sprocket logo"
        className="bg-image greysprocketlogo mx-5"
      />
      <Separator className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" />
      <div className="scroll-m-20 text-xl font-semibold tracking-tight">
        Sprocket Stats is a comprehensive, customizable, cross-platform
        scouting application for the FIRST Robotics Competition. Through
        collecting and analyzing robot performance data, this application
        assists your team in making informed strategic decisions.
        
      </div>
    </div>
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>Check Schedule</CardTitle>
        <CardDescription>Check your upcomming scouting schedule</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username</Label>
              <Input id="name" placeholder="Enter your username" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button>Search</Button>
      </CardFooter>
    </Card>
    </main>
  );
}
