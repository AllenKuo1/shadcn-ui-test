"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import Link from "next/link";

export default function UserItem() {

  return (
    <Link href="/profile">
      <div
        className="flex items-center justify-between gap-2 border rounded-[8px] p-2"
      >
        <div className="avatar rounded-full min-h-10 min-w-10 bg-red-500 text-black font-[700] flex items-center justify-center">
          <p>temp</p>
        </div>
        <div className="grow">
          <p className="text-[16px] font-bold">username</p>
          <p className="text-[12px] text-neutral-500">Firstname Lastname</p>
        </div>
      </div>
    </Link>
  );
}
