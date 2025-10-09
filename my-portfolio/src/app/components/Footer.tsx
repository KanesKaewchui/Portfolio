export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 mt-4">
      <div className="container-px mx-auto flex items-center justify-between text-sm text-[var(--muted)]">
        <p>© {new Date().getFullYear()} Kanes Kaewchui. All rights reserved.</p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
}
