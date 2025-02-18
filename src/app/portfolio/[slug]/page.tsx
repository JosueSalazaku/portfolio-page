import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { ArrowUpRight, Globe, Tag } from "lucide-react";

type WorkItem = {
  id: number;
  title: string;
  imageUrl: string;
  tags: string[];
  link: string;
  description: string;
  website: string;
};

const works: WorkItem[] = [
  {
    id: 1,
    title: "Unread Piles",
    imageUrl: "/piles.png",
    tags: ["Next.js", "Postgress", "Tailwind"],
    link: "unreadpiles",
    description:
      "Unread Piles is a book tracking app that allows users to save, track, and comment on their books or explore other users' collections. Like Goodreads, the app fetches detailed book data dynamically using the Google Books API. Built with Next.js, TypeScript, Drizzle, and PostgreSQL (NeonDB), Unread Piles saves the Google Books API book ID in the database, ensuring smooth and efficient fetching of data. For authentication, BetterAuth is utilized.",
    website: "https://unread-piles.vercel.app",
  },
  {
    id: 2,
    title: "Keanino",
    imageUrl: "/keanino.jpeg",
    tags: ["Next.js", "Drizzle"],
    link: "keanino",
    description:
      "Keanino is a personal blog dedicated to exploring the 3 P’s: Places (where to travel), Pages (books to read), and Plates (food to try). It serves as a space for sharing insightful content about travel, books, and food. Developed with Next.js, TypeScript, Drizzle, PostgreSQL, and Clerk for authentication, Keanino offers an engaging user experience and smooth content management.",
    website: "https://keanino.vercel.app/",
  },
  {
    id: 3,
    title: "LinkUp",
    imageUrl: "/linkup.jpeg",
    tags: ["React", "Tailwind"],
    link: "linkup",
    description:
      "LinkUp is a proof of concept for a meetup platform designed for developers or those aspiring to become developers. This site aims to foster a community where like-minded individuals can connect and grow together. The project serves as a foundational idea for creating a vibrant hub for tech enthusiasts.",
    website: "https://linkup-peach.vercel.app/",
  },
];

export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.link,
  }));
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = works.find((work) => work.link === slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 mb-12 overflow-hidden">
      <div className="mb-6">
        <h1 className="font-bold text-black dark:text-white">{work.title}</h1>
      </div>
      <div className="p-0">
        <Link href={work.website} target="_blank" rel="noopener noreferrer">
          <div className="relative group">
            <Image
              src={work.imageUrl || "/placeholder.svg"}
              alt={work.title}
              width={800}
              height={600}
              className="w-full h-full transition-opacity duration-300 group-hover:opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <button className="flex items-center gap-2 px-4 py-2 text-white bg-gray-800 rounded-md">
                <Globe className="w-4 h-4" />
                Visit Website
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <p className="text-gray-600 dark:text-gray-300">{work.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Tag className="w-4 h-4 mr-2" />
          {work.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 text-sm text-gray-800 bg-gray-200 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
