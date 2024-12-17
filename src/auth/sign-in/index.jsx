import { SignIn } from '@clerk/clerk-react';
import React from 'react';

function SignInPage() {
  return (
    <div className="flex flex-col justify-center my-10 items-center">
      <div className="text-center mt-4 max-w-md">
        <h2 className="text-xl font-semibold">Welcome to Our Platform</h2>
        <p className="text-gray-600 mt-2">
          Please sign in to access your personalized dashboard and our services.
        </p>
      </div>
      <div className="mb-6">
        <SignIn />
      </div>
    </div>
  );
}

export default SignInPage;
