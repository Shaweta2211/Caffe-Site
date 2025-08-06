
import Image from "next/image";
import Link from "next/link";

interface NewsItemProps {
  title: string;
  date: string;
  image: string;
  description: string;
}

export default function NewsCard({ title, date, image, description }: NewsItemProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 max-w-sm">
      <div className="relative w-full h-60">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <hr className="my-3" />
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>{date} – Comments</p>
          <Link href="/about" className="hover:underline text-black">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
