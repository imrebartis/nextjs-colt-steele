import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <Link href="/contact">
      <a>Contact Page</a>
    </Link>
    <h1>Index page</h1>
  </div>
);

export default Index;
