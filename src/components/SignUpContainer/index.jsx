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
import { useRouter } from "next/navigation";

export function SignUpContainer() {
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const inputData = {
            first_name: formData.get("firstname"),
            last_name: formData.get("lastname"),
            email: formData.get("email"),
            password: formData.get("password"),
            confirmation_password: formData.get("twitterpassword"),
        };

        if (!formValidation(inputData)) return;

        try {
            const res = await fetch(BASE_API + "/auth/register", {
                method: "POST",
                body: JSON.stringify(inputData),
                headers: {
                    "Content-Type": "application/json",
                },
                cache: "no-store",
            });

            if (res.ok) {
                toast.success("Register success!");
                router.push("/auth/login");
            } else if (res.status === 409) {
                toast.error("Email already registered!");
            } else {
                toast.error("Something went wrong!");
            }
        } catch (err) {
            toast.error("Connection error!");
        }
    };

    const formValidation = (data) => {
        const { first_name, last_name, email, password, confirmation_password } = data;

        if (!first_name || !last_name || !email || !password || !confirmation_password) {
            toast.error("All fields are required!");
            return false;
        }

        if (password.length < 8 ) {
            toast.error("Password must be at least 8 characters!");
            return false;
        }

        if (password !== confirmation_password) {
            toast.error("Passwords do not match!");
            return false;
        }

        return true;
    };

    return (
        (<div
            className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 text-333 bg-transparent">
            <h2 className="font-bold text-xl text-333 ">
                Welcome to Genggam Makna
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2">
                While our login feature is still in the works, you can register now and start exploring the possibilities with Genggam Makna.
            </p>
            <form className="my-8" onSubmit={handleSubmit}>
                <div
                    className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" name="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" name="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" placeholder="••••••••" type="password" />
                    <p className="text-xs">*Password must be at least 8 characters</p>
                </LabelInputContainer>
                <LabelInputContainer className="mb-8">
                    <Label htmlFor="twitterpassword">Confirmation password</Label>
                    <Input id="twitterpassword" name="twitterpassword" placeholder="••••••••" type="password" />
                    <p className="text-xs">*Passwords must be match</p>
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-333 dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit">
                    Sign up &rarr;
                    <BottomGradient />
                </button>

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
