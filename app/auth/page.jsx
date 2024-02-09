import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SignInWithGithub } from '../../components/Auth/SignInWithGithub';
import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';
import { redirect } from 'next/navigation';
import { SignInForm } from '@/components/Auth/SignInForm';

export default async function page() {
    const session = await getServerSession(authOptions);

    if(session){
        return redirect('/')
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <Card className='w-1/4'>
                <CardHeader>
                    <CardTitle>Please Sign in</CardTitle>
                    <CardDescription>To access the private page</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex flex-col'>
                        <SignInForm />

                        <SignInWithGithub />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
