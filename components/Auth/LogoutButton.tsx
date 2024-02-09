"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <>
        <Button
            onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
        >
            Log out
        </Button>
    </>
  )
}
