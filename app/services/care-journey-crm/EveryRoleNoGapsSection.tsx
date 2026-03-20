import {
  Building,
  Building2,
  HeartPlus,
  MessageSquare,
  MessagesSquare,
  Phone,
  SquarePlus,
} from "lucide-react";
import RoleTaskCard from "./RoleTaskCard";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

const ROLE_CARDS = [
  {
    title: "Telecallers",
    icon: Phone,
    description:
      "Enquiry follow-up, appointment reminders, post-op check-in calls",
  },
  {
    title: "Front Desk",
    icon: Building,
    description: "Check-ins, scheduling confirmations, queue management",
  },
  {
    title: "Nurses",
    icon: SquarePlus,
    description:
      "Pre-op preparation, recovery monitoring, discharge documentation",
  },
  {
    title: "Counselors",
    icon: MessagesSquare,
    description: "Financial discussions, insurance coordination, patient guidance",
  },
  {
    title: "Doctors",
    icon: HeartPlus,
    description: "Clinical notes, procedure decisions, follow-up instructions",
  },
] as const;

export default function EveryRoleNoGapsSection() {
  return (
    <section className={`${SECTION_PADDING} py-16 md:py-20 bg-white`}>
      <div className={CONTENT_MAX}>
        <header className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-green leading-relaxed">
            Every task. Every role. No gaps.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-icon leading-relaxed">
            A missed task means a missed appointment, a skipped pre-op instruction, or a patient
            falling through the cracks. Care Journey CRM assigns ownership clearly across every role.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
          {ROLE_CARDS.map((role) => (
            <RoleTaskCard
              key={role.title}
              icon={role.icon}
              title={role.title}
              description={role.description}
            />
          ))}
        </div>

        <div
          className="mt-10 md:mt-12 rounded-xl sm:rounded-2xl px-6 py-6 md:px-10 md:py-8"
          style={{ background: "var(--gradient-1)" }}
        >
          <div className="flex flex-col gap-2 md:gap-3 text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white">Why This Matters</h3>
            <p className="text-sm sm:text-base text-white leading-relaxed">
              Most coordination breakdowns aren&apos;t system failures — they&apos;re ownership
              failures. Care Journey CRM makes accountability explicit across every stage and every
              role.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
