import React from 'react';
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
    FormLabel,
    FormMessage,
} from "../../components/ui/form"

const signupSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Username must be at least 2 characters." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
    confirmPassword: z.string().min(6, { message: "Please confirm your password." }),
    terms: z.boolean().refine((val) => val === true, { message: "You must agree to the terms and conditions." })
});

export const SignupForm: React.FC = () => {
    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            fullName: "",
            username: "",
            password: "",
            confirmPassword: "",
            terms: false,
        },
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-xl font-semibold mb-4">Toegram</h1>
                <span className="text-xs font-semibold">Sign up to see photos and videos from your friends.</span>
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
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Full Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Username" {...field} />
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="password" placeholder="Retype your password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-blue-600 rounded"
                                            {...field}
                                        />
                                        <span className="text-sm text-gray-600">
                                            I agree to the
                                            <a href="/terms" className="text-blue-600 underline ml-1">
                                                Terms and Conditions
                                            </a>
                                        </span>
                                    </FormLabel>
                                    <FormMessage />
                                    <span className="text-sm text-gray-600">
                                        already have an account
                                        <a href="/Sign-in" className="text-blue-600 underline ml-1">
                                            Click Here
                                        </a>
                                    </span>
                                </FormItem>
                            )}
                        />
                        <Button className="w-full" type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default SignupForm;
