"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react';

export const SignInWithGithub = () => {
  return (
    <>
        <Button 
            variant="secondary" 
            className='mt-6'
            onClick={() => signIn('github',{
                callbackUrl: `${window.location.origin}`
            })}
        >
            Login with GitHub
        </Button>
    </>
  )
}
