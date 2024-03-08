"use client";

import {
  BellIcon,
  Cookie,
  CreditCard,
  Inbox,
  MessageSquare,
  Settings,
  User,
  Home,
  CalendarDays,
  LogOut,
  PencilLine,
  Database,
} from "lucide-react";
import Link from "next/link";
import UserItem from "./UserItem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import { Button } from "@/components/ui/button";
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

export default function Sidebar() {
  const menuList = [
    {
      group: "Stuff",
      items: [
        {
          link: "/",
          icon: <Home />,
          text: "Home",
        },
        {
          link: "/profile",
          icon: <User />,
          text: "Profile",
        },
        {
          link: "/scoutschedule",
          icon: <CalendarDays />,
          text: "Scouting Schedule",
        },
      ],
    },
    {
      group: "Scouting",
      items: [
        {
          link: "/",
          icon: <PencilLine />,
          text: "Pit Scouting",
        },
        {
          link: "/",
          icon: <PencilLine />,
          text: "Match Scouting",
        },
      ],
    },
    {
      group: "Data",
      items: [
        {
          link: "/",
          icon: <Database />,
          text: "View Pit Data",
        },
        {
          link: "/",
          icon: <Database />,
          text: "View Match Data",
        },
      ],
    },
  ];

  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{ overflow: "visible" }}>
          <CommandList style={{ overflow: "visible" }}>
            {menuList.map((menu: any, key: number) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any, optionKey: number) => (
                  <Link href={option.link} key={optionKey}>
                    <CommandItem
                      className="flex gap-2 cursor-pointer"
                      onSelect={() => {
                        console.log(option.text, option.link);
                      }}
                    >
                      <a className="flex gap-2 cursor-pointer">
                        {option.icon}
                        {option.text}
                      </a>
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <Button variant="destructive">
        <LogOut className="mr-2 h-4 w-4" /> Logout
      </Button>
    </div>
  );
}
