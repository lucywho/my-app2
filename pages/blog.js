import Link from "next/link";
import posts from "../posts.json";

export default function Blog() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <div className="flex-grow">
                <h1 className="text-xl font-extrabold text-slate-900 bg-slate-300 flex justify-center py-4">
                    Blog
                </h1>
                <ul className="text-m font-medium text-slate-700 py-2">
                    {Object.keys(posts).map((slug, index) => {
                        return (
                            <li
                                key={index}
                                className="hover:text-green-900 text-slate-800 p-2"
                            >
                                <Link href="/blog/[id]" as={"/blog/" + slug}>
                                    <a className="text-lg font-medium hover:text-green-900 text-slate-800">
                                        {posts[slug].title}
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Link href="/">
                <a className="text-lg font-medium hover:text-green-900 text-slate-800 bg-slate-300">
                    home
                </a>
            </Link>
        </div>
    );
}
