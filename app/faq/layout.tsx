import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Water Heater Repair in Denver",
  description:
    "Find clear answers to Denver water heater repair, replacement, costs, tankless efficiency, permits, hard water minerals, and pilot light questions.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
