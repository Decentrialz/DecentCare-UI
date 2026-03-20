import Image from "next/image";
import patientOverviewWhole from "@/app/assets/patient-overview-whole.svg";

export default function PatientOverviewCard() {
  return (
    <div className="w-full flex justify-center lg:justify-end">
      <Image
        src={patientOverviewWhole}
        alt="Patient overview dashboard"
        className="w-full h-auto"
        sizes="(max-width: 1024px) 100vw, 680px"
        priority
      />
    </div>
  );
}

/*
Previous implementation (kept for reference / easy rollback):

import {
  Activity,
  Calendar,
  MessageCircle,
  Users,
} from "lucide-react";

const METRIC_CARDS = [
  {
    label: "Active Patients",
    value: "2,847",
    icon: Users,
    className: "bg-primary-blue/10 text-foreground",
    iconBgColor: "bg-primary-blue",
    iconColor: "text-primary-blue-foreground",
  },
  {
    label: "Today's Visits",
    value: "128",
    icon: Calendar,
    className: "bg-secondary-green/10 text-foreground border border-secondary-green/20",
    iconBgColor: "bg-secondary-green",
    iconColor: "text-primary-blue-foreground",
  },
];

const STATUS_ITEMS = [
  { label: "Intake & Registration", count: "42 active", dotColor: "bg-primary-blue" },
  { label: "In Treatment", count: "86 active", dotColor: "bg-secondary-green" },
  { label: "Post Care Follow-up", count: "34 pending", dotColor: "bg-gray-border" },
];

export default function PatientOverviewCard() {
  return (
    <div className="relative">
      <div
        className="absolute -top-6 -right-2 sm:-right-6 z-10 flex items-center gap-3 rounded-2xl px-4 py-3 bg-card shadow-xl"
        aria-label="System uptime"
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-primary-blue-foreground shadow-sm"
          style={{ background: "var(--gradient-2)" }}
        >
          <Activity className="w-5 h-5" aria-hidden />
        </div>
        <div className="leading-tight">
          <div className="text-lg font-bold text-foreground">98.4%</div>
          <div className="text-xs font-medium text-gray-icon">Uptime</div>
        </div>
      </div>

      <div className="bg-card rounded-2xl border border-border shadow-xl pb-12 sm:pb-8">
        <h2 className="font-bold text-foreground border-b border-border p-4">
          Patient Overview
        </h2>

        <div className="grid grid-cols-2 gap-4 p-6">
          {METRIC_CARDS.map(({ label, value, icon: Icon, className, iconBgColor, iconColor }) => (
            <div
              key={label}
              className={`rounded-xl p-4 flex items-center gap-4 ${className}`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBgColor}`}>
                <Icon className={`w-6 h-6 opacity-90 ${iconColor}`} aria-hidden />
              </div>
              <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-sm text-gray-icon">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <ul className="space-y-3 p-6">
          {STATUS_ITEMS.map(({ label, count, dotColor }) => (
            <li
              key={label}
              className="flex items-center justify-between gap-4 py-2"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-foreground">
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`}
                  aria-hidden
                />
                {label}
              </span>
              <span className="text-sm text-gray-icon">{count}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -bottom-5 left-2 sm:-bottom-6 sm:-left-6 z-10">
        <div className="bg-card rounded-2xl border border-border shadow-xl px-4 py-3 flex items-center gap-3 min-w-[190px]">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-secondary-green text-primary-blue-foreground shadow-sm">
            <MessageCircle className="w-5 h-5" aria-hidden />
          </div>
          <div className="leading-tight">
            <div className="text-xl font-bold text-foreground">247</div>
            <div className="text-sm font-medium text-gray-icon">Unread Messages</div>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
