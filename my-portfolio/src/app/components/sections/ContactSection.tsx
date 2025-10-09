export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-y container-px mx-auto scroll-mt-16 md:mt-8">
      <div className="card p-6 md:p-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Let&apos;s work together
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Got a project or an idea? I’d love to hear about it.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a className="btn-primary" href="mailto:kaneskaewchui1@gmail.com">
                Say Hello
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                Email:{" "}
                <a
                  className="link-underline"
                  href="mailto:kaneskaewchui1@gmail.com">
                  kaneskaewchui1@gmail.com
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a
                  className="link-underline"
                  href="https://github.com/KanesKaewchui"
                  target="_blank"
                  rel="noopener noreferrer">
                  KanesKaewchui
                </a>
              </li>
              <li>
                LinkedIn:{" "}
                <a
                  className="link-underline"
                  href="https://www.linkedin.com/in/kanes-kaewchui-131851235/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Kanes Kaewchui
                </a>
              </li>
              <li>
                Behance:{" "}
                <a
                  className="link-underline"
                  href="https://www.behance.net/Portfoliokanes#"
                  target="_blank"
                  rel="noopener noreferrer">
                  Kanes Kaewchui
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
