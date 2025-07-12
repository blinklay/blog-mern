import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link className="font-bold dark:text-white text-4xl" to="/">
            <span className="px-2 py-1 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-md">
              global
            </span>{" "}
            blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            natus aut eligendi. Dicta voluptates eveniet exercitationem tempore
            quasi vitae ipsam libero in sed nemo. Impedit?
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4 ">
            <div>
              <Label htmlFor="username">Your username</Label>
              <TextInput type="text" placeholder="username" id="username" />
            </div>

            <div>
              <Label htmlFor="email">Your email</Label>
              <TextInput
                type="text"
                placeholder="name@company.com"
                id="email"
              />
            </div>

            <div>
              <Label htmlFor="password">Your password</Label>
              <TextInput type="password" placeholder="password" id="password" />
            </div>

            <Button
              type="submit"
              className="bg-gradient-to-br from-purple-600 to-blue-500 text-white cursor-pointer hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
