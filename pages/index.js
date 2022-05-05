import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <div className="flex-grow">
                <h1 className="text-xl font-extrabold text-slate-900 bg-slate-300 flex justify-center py-4">
                    Home page
                </h1>
                <Link href="/blog">
                    <a className="text-lg font-medium hover:text-green-900 text-slate-800 p-2">
                        Blog
                    </a>
                </Link>
            </div>
            <div className="text-lg bg-slate-300">
                &copy; greatBlogs inc. 2022
            </div>
        </div>
    );
}
