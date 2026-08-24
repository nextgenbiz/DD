// import Image from "next/image";
// import { ShieldCheck, Users, Heart } from "lucide-react";

// const FEATURES = [
//   {
//     icon: ShieldCheck,
//     title: "Quality Construction",
//     text: "We use the best materials and advanced technology for long-lasting results.",
//   },
//   {
//     icon: Users,
//     title: "Expert Team",
//     text: "Our skilled professionals ensure expert craftsmanship in every project.",
//   },
//   {
//     icon: Heart,
//     title: "Customer First",
//     text: "We prioritize our clients' needs and provide personalized solutions.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
//       <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr_minmax(0,320px)] lg:items-center">
//         {/* Text */}
//         <div>
//           <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
//             Why Choose Us
//           </p>
//           <h2 className="mt-3 text-4xl font-extrabold leading-tight text-navy-950">
//             Building With Trust And Quality
//           </h2>
//           <p className="mt-5 text-sm leading-relaxed text-gray-500">
//             We are committed to delivering exceptional construction services
//             with transparency, and integrity.
//           </p>
//         </div>

//         {/* Image */}
//         <div className="relative h-[360px] w-full overflow-hidden rounded-2xl">
//           <Image
//             src="https://picsum.photos/seed/dd-scaffolding/900/1100"
//             alt="Building under construction with scaffolding"
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Feature list */}
//         <div className="flex flex-col gap-6">
//           {FEATURES.map(({ icon: Icon, title, text }) => (
//             <div key={title} className="flex gap-4">
//               <Icon size={24} className="mt-0.5 shrink-0 text-brand" strokeWidth={1.5} />
//               <div>
//                 <p className="text-sm font-bold text-navy-950">{title}</p>
//                 <p className="mt-1 text-sm leading-relaxed text-gray-500">
//                   {text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import { ShieldCheck, Users, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Quality Construction",
    text: "We use the best materials and advanced technology for long-lasting results.",
  },
  {
    icon: Users,
    title: "Expert Team",
    text: "Our skilled professionals ensure expert craftsmanship in every project.",
  },
  {
    icon: Heart,
    title: "Customer First",
    text: "We prioritize our clients' needs and provide personalized solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/wcu.png"
          alt=""
          fill
          className="object-cover"
          priority
        />

        {/* White overlay for readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr_minmax(0,320px)] lg:items-center">
          
          {/* Text */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-navy-950">
              Building With Trust
              <br />
              And Quality
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-gray-500">
              We are committed to delivering exceptional construction services
              with transparency, and integrity.
            </p>
          </div>

          {/* Empty middle space for background building */}
          <div className="hidden h-[360px] lg:block" />

          {/* Feature list */}
          <div className="flex flex-col gap-7">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                  <Icon
                    size={22}
                    className="text-brand"
                    strokeWidth={1.5}
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-navy-950">
                    {title}
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-gray-500">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}