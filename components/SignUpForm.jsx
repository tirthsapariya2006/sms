"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();

  const handleSignUp = () => {
    if(passwordOne == passwordTwo){
      createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        console.log("User account created");
        console.log(authUser.user);
        router.push("/");
      })
      .catch(err => {
        console.log(err);
        return;
      })
    }
  }

  return (
    <>
      <div>
        <div>
          <input
            className="border-2 rounded-md mb-1"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            value={passwordOne}
            onChange={(e) => setPasswordOne(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border-2 rounded-md mb-1"
            placeholder="Confirm Password"
            type="text"
            value={passwordTwo}
            onChange={(e) => setPasswordTwo(e.target.value)}
          />
        </div>
        <div>
          <button className="border-2 rounded-md" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;