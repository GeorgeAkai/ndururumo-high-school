import { dateParts, formatDate } from "@/lib/format";
import type { SchoolEvent } from "@/lib/types";

export function EventList({ events, compact = false }: { events: SchoolEvent[]; compact?: boolean }) {
  if (events.length === 0) {
    return <p className="rounded-2xl border border-dashed border-brand-200 p-6 text-muted">Upcoming events will be posted here.</p>;
  }
  return (
    <ul className="space-y-4">
      {events.map((event) => {
        const { day, month } = dateParts(event.date);
        return (
          <li key={event._id} className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-4 shadow-sm">
            <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-brand-700 text-cream">
              <span className="font-serif text-2xl leading-none font-semibold">{day}</span>
              <span className="text-xs tracking-wider text-gold-300 uppercase">{month}</span>
            </div>
            <div className="min-w-0">
              <h3 className="font-sans font-semibold text-brand-800">{event.title}</h3>
              <p className="mt-1 text-sm text-muted">
                <time dateTime={event.date}>{formatDate(event.date)}</time>
                {event.endDate && event.endDate !== event.date && (
                  <>
                    {" – "}
                    <time dateTime={event.endDate}>{formatDate(event.endDate)}</time>
                  </>
                )}
                {event.location && <> · {event.location}</>}
              </p>
              {!compact && event.description && <p className="mt-2 text-sm leading-relaxed text-muted">{event.description}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
