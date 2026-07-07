import { Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";

function getShortDescription(description) {
  return description.length > 100
    ? description.slice(0, 100) + "..."
    : description;
}

function TripCard({ trip, onClickTag }) {
  return (
    <div className="mb-12 flex w-full flex-col gap-4 md:h-[250px] md:flex-row md:items-start md:gap-8">
      <a
        className="shrink-0"
        href={trip.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-auto w-full rounded-[28px] object-cover md:h-[250px] md:w-[390px]"
          src={trip.photos[0]}
          alt={trip.title}
        />
      </a>

      <div className="flex min-w-0 flex-1 flex-col gap-4 md:h-full md:flex-row md:self-stretch">
        <div className="min-w-0 flex-1">
          <h2 className="line-clamp-2 text-xl font-bold leading-snug text-gray-800 md:text-2xl">
            <a href={trip.url} target="_blank" rel="noopener noreferrer">
              {trip.title}
            </a>
          </h2>
          <p className="mt-1 line-clamp-2 text-sm leading-5 text-gray-500">
            {getShortDescription(trip.description)}
          </p>
          <a
            className="text-sky-500 underline"
            href={trip.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            อ่านต่อ
          </a>
          <p className="mt-1 line-clamp-1 text-sm text-gray-500">
            หมวดหมู่:{" "}
            {trip.tags.map((tag, index) => (
              <span key={tag}>
                {index === trip.tags.length - 1 && "และ "}
                <button
                  className="mx-1.5 cursor-pointer text-gray-500 underline"
                  type="button"
                  onClick={() => onClickTag(tag)}
                >
                  {tag}
                </button>
              </span>
            ))}
          </p>
          <div className="mt-3 flex flex-wrap gap-4 md:gap-6">
            {trip.photos.slice(1).map((photo) => (
              <img
                className="h-[80px] w-[80px] rounded-xl object-cover md:h-[88px] md:w-[88px]"
                key={photo}
                src={photo}
                alt={trip.title}
              />
            ))}
          </div>
        </div>

        <button
          className="mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-sky-400 text-sky-400 md:ml-10 md:mt-auto"
          type="button"
          aria-label={`คัดลอกลิงก์ ${trip.title}`}
          onClick={() => {
            navigator.clipboard.writeText(trip.url);
            toast.success("คัดลอกลิงก์เรียบร้อย");
          }}
        >
          <LinkIcon size={28} />
        </button>
      </div>
    </div>
  );
}

export default TripCard;
