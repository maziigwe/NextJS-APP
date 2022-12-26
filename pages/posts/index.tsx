import Link from "next/link";
import { useRouter } from "next/router";

function Posts() {
  const route = useRouter();
  return (
    <div>
      {" "}
      <Link
        href={{
          pathname: "posts/[post]/[name]",
          query: { post: "post", name: "igwe" },
        }}
      >
        Post one
      </Link>
    </div>
  );
}

export default Posts;
