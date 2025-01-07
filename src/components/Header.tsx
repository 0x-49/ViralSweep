import { useRouter } from 'next/router';
import Logo from './Logo';
import { Button } from './ui/button';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <header className="w-full border-b">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-8">
          <div className="cursor-pointer" onClick={() => router.push("/")}>
            <Logo />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="https://viralsweep.com/sweepstakes" target="_blank" className="text-muted-foreground hover:text-foreground">
              Sweepstakes
            </Link>
            <Link href="https://viralsweep.com/giveaway" target="_blank" className="text-muted-foreground hover:text-foreground">
              Giveaways
            </Link>
            <Link href="https://viralsweep.com/contests" target="_blank" className="text-muted-foreground hover:text-foreground">
              Contests
            </Link>
            <Link href="https://viralsweep.com/pricing" target="_blank" className="text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link href="https://www.facebook.com/Viralsweep" target="_blank" className="text-muted-foreground hover:text-foreground">
              Facebook
            </Link>
            <Link href="https://twitter.com/Viralsweep" target="_blank" className="text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="https://www.linkedin.com/company/viralsweep" target="_blank" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
          </div>
          <Link href="https://viralsweep.com/?via=maxime-emmanuel" target="_blank">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;