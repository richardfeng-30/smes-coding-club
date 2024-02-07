import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-32">
        <h1 className="text-4xl sm:text-7xl font-bold">SMES Coding Club</h1>
        <p className="mt-6 text-xl sm:text-2xl text-slate-300">
          Created by the members of the Coding Club
        </p>
        <p className="max-w-prose mt-12 text-justify sm:text-lg !leading-8">
          The Coding Club seeks to inspire and educate students in computer
          science by providing a welcoming and supportive learning environment.
          The Coding Club is a place to learn, build projects, and participate
          in coding competitions.
        </p>
        <div className="flex gap-8 mt-12">
          <div className="relative inline-flex  group">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#bae7ff] via-[#ff8df4] to-[#ffa5a0] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <Link
              href="#"
              className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white transition-all duration-200 bg-slate-900 ring-1 ring-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Join our mailing list!
            </Link>
          </div>
          <Link
            className="hover:bg-slate-100 hover:bg-opacity-10 text-sm font-semibold bg-slate-50 bg-opacity-5 ring-1 ring-white/10 shadow-2xl px-8 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            href="#"
          >
            About us
          </Link>
        </div>
      </div>
    </>
  );
}
