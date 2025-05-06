import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10">
      <h1>Login Functionality</h1>
      <Link href="/to/signup">Signup</Link>
      <Link href="/to/quests">Quests</Link>
    </div>
  );
}
