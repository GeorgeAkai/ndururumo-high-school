import type { Metadata } from "next";
import { EventList } from "@/components/EventList";
import { Container, PageHero } from "@/components/ui";
import { getUpcomingEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at Ndururumo High School: term dates, academic days, sports and alumni gatherings.",
};

export default async function EventsPage() {
  const events = await getUpcomingEvents();
  return (
    <>
      <PageHero eyebrow="Events" title="School calendar" intro="Term dates, academic days, games, festivals and alumni gatherings." />
      <section className="py-20">
        <Container className="max-w-3xl">
          <EventList events={events} />
        </Container>
      </section>
    </>
  );
}
