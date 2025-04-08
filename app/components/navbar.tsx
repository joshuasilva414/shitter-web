import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b p-4 flex justify-between">
      <div className="flex">
        <Image
          className="invert"
          src={"/shitter_logo.png"}
          alt="Logo"
          width={32}
          height={32}
        />
        <h1 className="text-3xl">Shitter</h1>
      </div>
      <ul className="flex gap-2">
        <li className="border p-1.5 rounded-md">
          <Link href="/posts/new">Create Post</Link>
        </li>
        <li className="border p-1.5 rounded-md">
          <Link href="/sign-up">Sign Up</Link>
        </li>
        <li className="border p-1.5 rounded-md">
          <Link href="/sign-in">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}
