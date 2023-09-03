import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h2>Hello hello everyone</h2>
    </div>
  );
}
