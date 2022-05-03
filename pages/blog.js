import Link from "next/link";
import posts from "../posts.json";

export default function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {Object.keys(posts).map((slug, index) => {
                    return (
                        <li key={index}>
                            <Link href="/blog/[id]" as={"/blog/" + slug}>
                                <a>{posts[slug].title}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
