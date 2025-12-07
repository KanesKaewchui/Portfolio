// export default function AboutSection() {
//   return (
//     <section id="about" className="section-y container-px mx-auto scroll-mt-16">
//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="md:col-span-2 card p-6">
//           <h2 className="text-2xl font-bold">About</h2>
//           <p className="mt-3 text-[var(--muted)]">
//             I merge creativity with technical expertise as a full stack
//             developer, with a strong focus on frontend development. Leveraging
//             my background in multimedia and graphic design, I specialize in
//             crafting interactive, responsive, and user-centric web experiences.
//             I have hands-on experience working on CRM systems and web
//             information platforms, utilizing modern frameworks and technologies.
//             I&apos;m also capable of handling backend development, ensuring
//             full-cycle delivery from UI to server-side logic. Eager to
//             contribute to innovative digital solutions, I continuously seek to
//             grow and stay updated with emerging technologies
//           </p>
//         </div>
//         <div className="card p-6">
//           <h3 className="font-semibold">Contact</h3>
//           <ul className="mt-3 space-y-2 text-sm">
//             <li>
//               Email:{" "}
//               <a
//                 className="link-underline"
//                 href="mailto:kaneskaewchui1@gmail.com">
//                 kaneskaewchui1@gmail.com
//               </a>
//             </li>
//             <li>
//               GitHub:{" "}
//               <a
//                 className="link-underline"
//                 href="https://github.com/KanesKaewchui"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 KanesKaewchui
//               </a>
//             </li>
//             <li>
//               LinkedIn:{" "}
//               <a
//                 className="link-underline"
//                 href="https://www.linkedin.com/in/kanes-kaewchui-131851235/"
//                 target="_blank"
//                 rel="noopener noreferrer">
//                 Kanes Kaewchui
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function AboutSection() {
  return (
    <section id="about" className="section-y container-px mx-auto scroll-mt-16">
      <div className="card p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl font-bold">About</h2>
        <div className="mt-3 text-[var(--muted)] leading-relaxed md:text-base">
          <p>
            I’m a UX/UI Designer with a front-end background who blends
            creativity with technical rigor. I translate requirements into user
            flows, wireframes, and interactive Figma prototypes, iterate through
            usability feedback, and hand off dev-ready specs (components,
            tokens, states). With roots in multimedia and graphic design, I
            craft accessible, responsive interfaces and maintain coherent design
            systems. I’ve worked on CRM platforms and data-heavy web
            applications, partnering with product and engineering to simplify
            complex workflows and improve task success. My technical fluency in
            HTML/CSS/JS (Next.js/Tailwind) helps align design with constraints
            and ensure smooth implementation. I’m driven by measurable outcomes
            and continuously refine my craft.
          </p>
        </div>
      </div>
    </section>
  );
}
