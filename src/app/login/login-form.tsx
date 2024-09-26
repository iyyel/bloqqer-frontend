"use client"

import {
  AtSymbolIcon,
  KeyIcon
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '../button';
import { FormEvent, useState } from 'react';

const loginUser = async (event: FormEvent<HTMLFormElement>): Promise<BloqMetadata[]> => {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)

  const res = await fetch('http://localhost:3000/api/loginUser', {
    method: 'POST',
    body: JSON.stringify({
      userName: formData.get('userName') as string,
      password: formData.get('password') as string,
      rememberMe: false
    }),
  });
  const json = await res.json();

  if (!json.success) {
    throw new Error(json.error);
  }

  console.log(json.data);
  return json.data;
};

export default function LoginForm() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <form onSubmit={loginUser} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="userName"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="userName"
                type="text"
                name="userName"
                placeholder="Enter your username"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <label className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="rememberMe">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          Remember Me
        </label>
        <Button className="mt-4 w-full">
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        <Button className="mt-4 w-full">
          Forgot Password <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>
        <div className="flex h-8 items-end space-x-1">
          {/* Add form errors here */}
        </div>
      </div>
    </form>
  );
}
