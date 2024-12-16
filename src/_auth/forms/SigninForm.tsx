import React from 'react'
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "../../components/ui/form"

const signinSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." })
});

export const SignInForm: React.FC = () => {
    const form = useForm({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: any) => {
        console.log("Sign In Data:", data);
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-xl font-semibold mb-4">Toegram</h1>
                <span className="text-xs font-semibold">Sign in to your account to continue.</span>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" type="submit">Sign In</Button>
                    </form>
                </Form>
                <span className="text-sm text-gray-600">
                    If you don't have an account
                    <a href="/sign-up" className="text-blue-600 underline ml-1">
                        register here
                    </a>
                </span>
            </div>

        </div>
    );
};

export default SignInForm;