/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid";

const timeline = [
  {
    id: 1,
    content: "Applied to",
    target: "Lorem Ipsum is simply dummy.",
    href: "#",
    date: "Sep 20",
    datetime: "2020-09-20",
    icon: UserIcon,
    iconBackground: "bg-indigo-500",
  },
  {
    id: 2,
    content: "Advanced to phone screening by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 22",
    datetime: "2020-09-22",
    icon: ThumbUpIcon,
    iconBackground: "bg-purple-500",
  },
  {
    id: 3,
    content: "Completed phone screening with",
    target: "Martha Gardner",
    href: "#",
    date: "Sep 28",
    datetime: "2020-09-28",
    icon: CheckIcon,
    iconBackground: "bg-pink-500",
  },
  {
    id: 4,
    content: "Advanced to interview by",
    target: "Bethany Blake",
    href: "#",
    date: "Sep 30",
    datetime: "2020-09-30",
    icon: ThumbUpIcon,
    iconBackground: "bg-indigo-500",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const MenuTimeline = () => {
  return (
    <div className="flow-root mt-4 text-sm">
      <ul className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-6 left-3 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-800"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-4 items-center">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-6 w-6 rounded-full flex items-center justify-center ring-8 ring-white md:ring-gray-50 dark:ring-almostblack"
                    )}
                  >
                    <event.icon
                      className="h-4 w-4 text-white dark:text-black"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 flex justify-between space-x-3 space-y-0 mt-px">
                  <div>
                    <p className={`text-md dark:text-gray-400 line-clamp-1`}>
                      {event.content}{" "}
                      <a
                        href={event.href}
                        className="font-medium text-gray-900 dark:text-gray-300"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-600 font-mono">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { MenuTimeline };
