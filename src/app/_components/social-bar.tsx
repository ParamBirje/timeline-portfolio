import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { DevToIcon } from "@/components/ui/icons";

function SocialBar() {
  return (
    <div className="mt-2 flex gap-3">
      <div className="bg-muted p-4 rounded-md w-fit flex items-center gap-5">
        <LinkedInLogoIcon className="h-6 w-6" />
        <GitHubLogoIcon className="h-6 w-6" />
        <TwitterLogoIcon className="h-6 w-6" />
        <DevToIcon className="h-7 w-7" />
      </div>

      <div className="bg-muted p-4 rounded-md w-fit flex items-center">
        <EnvelopeClosedIcon className="h-5 w-5" />
      </div>
    </div>
  );
}

export default SocialBar;
