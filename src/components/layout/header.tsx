import Link from 'next/link';

export function Header() {
  return (
    <header className="py-6 bg-background sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary hover:opacity-80 transition-opacity font-headline">
            Abhi Dankhara — SiteQuick Personal
          </Link>
          {/* Navigation can be added here if needed */}
        </div>
      </div>
    </header>
  );
}
