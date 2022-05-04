// import { useRouter } from "next/router";
import Link from "next/link";

import posts from "../../posts.json";

export default function BlogPost({ post }) {
    // const router = useRouter();
    // const post = posts[router.query.id];
    if (!post) return <p></p>;

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <div className="flex-grow">
                <h1 className="text-xl font-extrabold text-slate-900 bg-slate-300 flex justify-center py-4 ">
                    {post.title}
                </h1>
                <p className="text-m font-medium text-slate-800 p-2">
                    {post.content}
                </p>
            </div>
            <Link href="/blog">
                <a className="text-lg font-medium hover:text-green-900 text-slate-900 bg-slate-300">
                    return to blog index
                </a>
            </Link>
        </div>
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
