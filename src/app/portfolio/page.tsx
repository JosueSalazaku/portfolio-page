import Image from "next/image";
import Link from "next/link";

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

const WorkCard = ({ work }: { work: WorkItem }) => (
  <div className="h-full overflow-hidden rounded-lg shadow-md bg-gray-dark dark:bg-gray-800">
    <Image
      src={work.imageUrl || "/placeholder.svg"}
      alt={work.title}
      width={800}
      height={600}
      className="object-cover w-full h-48"
    />
    <div className="p-4">
      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
        {work.title}
      </h3>
      <div className="flex flex-wrap gap-2 rf">
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

export default function Portfolio() {
  return (
    <div className="gap-5 px-4 py-8 pt-20 pb-12 mx-auto ">
      <h2 className="mb-6 font-bold text-black dark:text-white">
        My Portfolio
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {works.map((work) => (
          <Link
            href={`/portfolio/${work.link}`}
            key={work.id}
            className="h-full"
          >
            <WorkCard work={work} />
          </Link>
        ))}
      </div>
    </div>
  );
}
