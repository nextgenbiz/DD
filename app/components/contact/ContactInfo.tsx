import { Phone, Mail, MapPin, Clock } from "lucide-react";

const CHANNELS = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 98765 43210", "+91 87654 32109"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@ddconstruction.com", "projects@ddconstruction.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["123, Construction Street,", "City, State - 000123"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Sat : 9:00 AM - 6:00 PM", "Sunday : Closed"],
  },
];

export default function ContactInfo() {
  return (
    <div className="h-full rounded-2xl border border-gray-200 bg-gray-50/60 p-8">
      <h2 className="text-2xl font-extrabold text-navy-950">
        Contact Information
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Reach out to us through any of these channels.
      </p>

      <div className="mt-6 flex flex-col">
        {CHANNELS.map(({ icon: Icon, title, lines }, i) => (
          <div
            key={title}
            className={`flex gap-4 py-5 ${
              i < CHANNELS.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10">
              <Icon size={20} className="text-brand" strokeWidth={1.75} />
            </div>
            <div>
              <p className="text-sm font-bold text-navy-950">{title}</p>
              {lines.map((line) => (
                <p key={line} className="text-sm text-gray-500">
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
