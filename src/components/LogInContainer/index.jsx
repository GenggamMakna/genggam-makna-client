"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGoogle,
} from "@tabler/icons-react";
import { BASE_API } from "@/utilities/environment";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function LogInContainer() {
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const inputData = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        if (!formValidation(inputData)) return;

        try {
            const res = await fetch(BASE_API + "/auth/login", {
                method: "POST",
                body: JSON.stringify(inputData),
                headers: {
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            });

            if (res.ok) {
                const data = await res.json()
                Cookies.remove("token");
                Cookies.set("token", data.body, { expires: 7 });

                toast.success("Login success!");
                location.replace("/predict")
            } else if (res.status === 404) {
                toast.error("Email not found, please register!");
            } else if (res.status === 401) {
                toast.error("Invalid Email or Password!");
            } else if (res.status === 403) {
                toast.error("Please Log In using Google!");
            } else {
                toast.error("Something went wrong!");
            }
        } catch (err) {
            toast.error("Connection error!");
        }
    };

    const formValidation = (data) => {
        const { email, password } = data;

        if (!email || !password) {
            toast.error("All fields are required!");
            return false;
        }

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters!");
            return false;
        }

        return true;
    };

    return (
        (<div
            className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 text-333 bg-transparent">
            <h2 className="font-bold text-xl text-333 ">
                Log In to Genggam Makna
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2">
                While our login feature is still in the works, you can login now and start exploring the possibilities with Genggam Makna.
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" placeholder="••••••••" type="password" />
                    <p className="text-xs">*Password must be at least 8 characters</p>
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-333 dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit">
                    Log In &rarr;
                    <BottomGradient />
                </button>
                <Link href={`/auth/register`} >
                    <p className="text-sm hover:underline my-2">
                        Doesn't have an account?
                        <span className="font-semibold">
                            {` `}Register here
                        </span>
                        !
                    </p>
                </Link>
                <div
                    className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                <div className="flex flex-col space-y-4">
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-333 rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="submit">
                        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Google
                        </span>
                        <BottomGradient />
                    </button>
                </div>
            </form>
        </div>)
    );
}

const BottomGradient = () => {
    return (<>
        <span
            className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span
            className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>);
};

const LabelInputContainer = ({
    children,
    className
}) => {
    return (
        (<div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>)
    );
};
