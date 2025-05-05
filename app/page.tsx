import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10">
      Login Functionality goes here
      <Link href="/route/signup">Signup</Link>
      <Link href="/route/quests">Quest</Link>
    </div>
  );
}
