import Image from "next/image"
import Link from "next/link"

type WorkItem = {
  id: number
  title: string
  imageUrl: string
  tags: string[]
  link: string
}

const works: WorkItem[] = [
  {
    id: 1,
    title: "Unread Piles",
    imageUrl: "/piles.png",
    tags: ["Next.js", "Postgress", "Tailwind"],
    link: "/portfolio/unreadpiles",
  },
  {
    id: 2,
    title: "Keanino",
    imageUrl: "/keanino.jpeg",
    tags: ["Next.js", "Drizzle"],
    link: "/portfolio/keanino",
  },
  {
    id: 3,
    title: "LinkUp",
    imageUrl: "/linkup.jpeg",
    tags: ["React", "Tailwind"],
    link: "/portfolio/linkup",
  },
]

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
      <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">{work.title}</h3>
      <div className="flex flex-wrap gap-2 rf">
        {work.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-sm text-gray-700 bg-black rounded-lg dark:text-gray-300 dark:bg-gray-700">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
)

export default function Portfolio() {
  return (
    <div className="container w-full gap-5 px-4 py-8 pt-20 pb-12 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">My Portfolio</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {works.map((work) => (
          <Link href={work.link} key={work.id} className="h-full">
            <WorkCard work={work} />
          </Link>
        ))}
      </div>
    </div>
  )
}