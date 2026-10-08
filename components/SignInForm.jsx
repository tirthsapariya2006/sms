"use client";

import Link from "next/link";
import { useState } from "react";

export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    
  }
  return (
    <>
      <div>
        <div>
          {/* <div className="mb-2">Login with E-mail</div> */}
          <div>
            <input
              className="border-2 rounded-md mb-1"
              placeholder="Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="border-2 rounded-md mb-1"
              placeholder="Password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="border-2 rounded-md mb-1" onClick={handleSignIn}>Sign In</button>
          </div>
          <div>
            <span className="text-blue-500">
              {" "}
              <Link href={"/signup"}> click here </Link>
            </span>
            create new account
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
