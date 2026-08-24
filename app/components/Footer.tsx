import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const QUICK_LINKS = ["Home", "About Us", "Projects", "Contact Us"];

const OUR_SERVICES = [
  "Residential Construction",
  "Commercial Construction",
  "Interior Design",
  "Renovation",
  "Project Management",
];

const SOCIALS = [FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-5 lg:px-10">

        {/* Logo + blurb */}
        <div className="lg:col-span-1">
          <Link href="/" className="inline-flex">
            <Image
              src="/logo.png"
              alt="DD Construction"
              width={180}
              height={60}
              className="h-auto w-[100px] object-contain"
            />
          </Link>

          <p className="mt-4 text-sm leading-relaxed">
            Building spaces that inspire and structures that last for
            generations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-white">Quick Links</h4>

          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {QUICK_LINKS.map((item) => (
              <li key={item}>
                <Link href="#" className="transition-colors hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-sm font-bold text-white">Our Services</h4>

          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {OUR_SERVICES.map((item) => (
              <li key={item}>
                <Link href="#" className="transition-colors hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-sm font-bold text-white">Contact Info</h4>

          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-brand-light" />
              +91 98765 43210
            </li>

            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-brand-light" />
              info@ddconstruction.com
            </li>

            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-brand-light" />
              123, Construction Street, City, State - 000123
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-sm font-bold text-white">Follow Us</h4>

          <div className="mt-4 flex gap-3">
            {SOCIALS.map((Icon, i) => (
              <Link
                key={i}
                href="#"
                aria-label="Social media"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-light"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 sm:flex-row lg:px-10">
          <p>© 2025 DD Construction. All Rights Reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}