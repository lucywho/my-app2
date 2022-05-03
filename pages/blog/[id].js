import { useRouter } from "next/router";
import Link from "next/link";

import posts from "../../posts.json";

export default function BlogPost() {
    const router = useRouter();
    const post = posts[router.query.id];
    if (!post) return <p></p>;
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link href="/blog">
                <a>main page</a>
            </Link>
        </>
    );
}
