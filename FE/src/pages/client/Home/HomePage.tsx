import { useState } from "react";
import { Input } from "../../../components";

const HomePage = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <div
        className="
        h-screen
        text-textPrimary
        dark:text-textDark"
      >
        <Input
          id="email"
          label="Email"
          placeholder="Nhập email của bạn"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </>
  );
};

export default HomePage;
