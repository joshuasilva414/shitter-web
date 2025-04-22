import { Button } from "@/components/ui/button";
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
        <li>
          <Link href="/posts/new">
            <Button>Create Post</Button>
          </Link>
        </li>
        <li>
          <Link href="/sign-up">
            <Button variant="outline">Sign Up</Button>
          </Link>
        </li>
        <li>
          <Link href="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
