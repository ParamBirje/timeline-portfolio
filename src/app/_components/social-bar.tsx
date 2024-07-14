import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { DevToIcon } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function SocialBar() {
  const socialLinks = [
    {
      href: "https://linkedin.com/in/parambirje",
      icon: <LinkedInLogoIcon className="h-6 w-6 hover:scale-105" />,
    },
    {
      href: "https://github.com/parambirje",
      icon: <GitHubLogoIcon className="h-6 w-6 hover:scale-105" />,
    },
    {
      href: "https://x.com/parambirje",
      icon: <TwitterLogoIcon className="h-6 w-6 hover:scale-105" />,
    },
    {
      href: "https://dev.to/parambirje",
      icon: <DevToIcon className="h-7 w-7 hover:scale-105" />,
    },
  ];

  return (
    <div className="mt-2 flex gap-3">
      <div className="bg-muted p-4 rounded-md w-fit flex items-center gap-5">
        {socialLinks.map((link) => (
          <Link key={link.href} target="_blank" href={link.href}>
            {link.icon}
          </Link>
        ))}
      </div>

      <Link href="mailto:param.birje@gmail.com">
        <Button variant="secondary" className="h-full w-fit">
          <EnvelopeClosedIcon className="h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
}

export default SocialBar;
