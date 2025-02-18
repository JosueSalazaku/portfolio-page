import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type WorkItem = {
  id: number;
  title: string;
  imageUrl: string;
  tags: string[];
  link: string;
  description: string;
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
  },
  {
    id: 2,
    title: "Keanino",
    imageUrl: "/keanino.jpeg",
    tags: ["Next.js", "Drizzle"],
    link: "keanino",
    description:
      "Keanino is a personal blog dedicated to exploring the 3 P’s: Places (where to travel), Pages (books to read), and Plates (food to try). It serves as a space for sharing insightful content about travel, books, and food. Developed with Next.js, TypeScript, Drizzle, PostgreSQL, and Clerk for authentication, Keanino offers an engaging user experience and smooth content management.",
  },
  {
    id: 3,
    title: "LinkUp",
    imageUrl: "/linkup.jpeg",
    tags: ["React", "Tailwind"],
    link: "linkup",
    description:
      "LinkUp is a proof of concept for a meetup platform designed for developers or those aspiring to become developers. This site aims to foster a community where like-minded individuals can connect and grow together. The project serves as a foundational idea for creating a vibrant hub for tech enthusiasts.",
  },
];

export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.link,
  }));
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const work = works.find((work) => work.link === params.slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="container w-full px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-black dark:text-white">
        {work.title}
      </h1>
      <Image
        src={work.imageUrl}
        alt={work.title}
        width={800}
        height={600}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <p className="mb-4 text-lg text-black dark:text-white">
          {work.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {work.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm text-gray-700 bg-black rounded-lg dark:text-gray-300 dark:bg-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
