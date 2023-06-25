import Link from "next/link";
import { eventsArray } from "~~/fixtures";

const EventsCarousel = () => {
  return (
    <div className="flex flex-col w-full items-center rounded-md">
      <div className="w-full flex justify-center"
        <h2 className="text-3xl py-4 font-bold text-slate-900">Events</h2>
      </div>
      <div className="carousel carousel-center px-4 space-x-8 rounded-box w-full h-full">
        {eventsArray.map(event => (
          <div className="carousel-item" key={event.id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-actions justify-start px-8 pt-8">
                <div className="badge badge-outline">{event.type}</div>
              </div>
              <div className="card-body">
                <h2 className="card-title">
                  {event.name}
                  {event.id === "eth-global-3" && <div className="badge badge-secondary">Active!</div>}
                </h2>
                <p className="text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, provident repellat enim molestias
                  ullam sunt vitae consectetur rem veniam optio ipsam laborum
                </p>
                <div className="card-actions justify-end">
                  <div>
                    <Link href="/team/join">
                      <button
                        type="button"
                        className="rounded-lg bg-indigo-700 px-6 py-2 text-base font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-indigo-500 disabled:bg-indigo-700/40"
                       >
                        Join
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/team/create">
                      <button
                        type="button"
                        className="rounded-lg bg-indigo-700 px-6 py-2 text-base font-semibold text-white ring-1 ring-inset ring-gray-300 hover:bg-indigo-500 disabled:bg-indigo-700/40"
                        >
                        Create
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCarousel;
