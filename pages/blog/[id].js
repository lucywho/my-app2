// import { useRouter } from "next/router";
import Link from "next/link";

import posts from "../../posts.json";

export default function BlogPost({ post }) {
    // const router = useRouter();
    // const post = posts[router.query.id];
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

export async function getStaticPaths() {
    return {
        paths: Object.keys(posts).map((id) => ({ params: { id } })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    return {
        props: {
            post: posts[params.id],
        },
    };
}
