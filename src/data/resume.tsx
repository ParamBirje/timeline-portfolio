import { Icons } from "@/components/icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { HomeIcon, NotebookIcon, BriefcaseBusinessIcon } from "lucide-react";

export const DATA = {
  name: "Param Birje",
  initials: "PB",
  url: "https://linkedin.com/in/parambirje",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Software Engineer with a genuine passion for solving problems using tech and curiosity.",
  summary:
    "Been hitting semicolons since 7th grade, and have fallen in love building software with the big toy (computer). Have built mobile apps and websites over the cloud that scaled over hundreds of users [for various startups](/work) and for the ones I co-founded. I love contributing to open source software and also have my own OSS [projects](/#projects). Cracked the AWS Solutions Architect Associate cert in a month, won [three prizes at the first hackathon](https://parablerhythm.parameater.co/) I participated in (Generative A.I), built roblox games with over 500K player visits (guess that makes me an award winning game-dev too). Oh yes, I'm also a [computer science student.](/work#education)",
  avatarUrl:
    "https://pbs.twimg.com/profile_images/1813248326524862464/_1ZZd4EQ_400x400.jpg",
  skills: [
    "Typescript",
    "Javascript",
    "Python",
    "Go",
    "AWS Cloud",
    "Solutions Architect",
    "Generative AI",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "FastAPI",
    "SQL",
    "NoSQL",
    "Shell Scripting",
    "UI/UX Design",
    "NGINX",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/work", icon: BriefcaseBusinessIcon, label: "Work" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "param.birje@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/parambirje",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/parambirje",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/parambirje",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:param.birje@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Wootag",
      badges: [],
      href: "https://wootag.com",
      location: "Singapore - Remote",
      title: "Software Engineer",
      logoUrl:
        "https://media.licdn.com/dms/image/C4E0BAQF-GhQrnKxxmg/company-logo_200_200/0/1641194075100/wootag_logo?e=2147483647&v=beta&t=HCTlRCdd-HUUlHbMqWV9tdxVCaOjE3TITctC7ldlTrY",
      start: "July 2024",
      end: "Present",
      description: "",
    },
    {
      company: "SYKO Merch",
      href: "https://www.instagram.com/thesyko.in/",
      badges: [],
      location: "Pune, India",
      title: "Fullstack Web Developer (AWS)",
      logoUrl: "/syko-logo.jpg",
      start: "December 2021",
      end: "November 2022",
      description:
        "Led the development of a website for an ecommerce fashion brand. Migrated the website from a shared hosting service to AWS Lightsail and AWS Cloudfront as our CDN that handled the high activity bursts on the website and lowered the latency of media transfer and other static files that optimized the website experience and improved load times by 60-80% comparatively.",
    },
    {
      company: "HappyLyfe",
      href: "#",
      badges: [],
      location: "Pune, India",
      title: "Fullstack App Developer",
      logoUrl: "/happylyfe-logo.png",
      start: "May 2021",
      end: "December 2021",
      description:
        "Developed 2 Android apps for HappyLyfe, a food delivery service based in Pune, using Flutter. The HappyLyfe app catered to customers, where they would order food from their favourite restaurants. This app clocked over 200 users through Play Store in its alpha launch. This app also included a payment gateway for the users to order via UPI because of its popularity. The HappyLyfe Delivery App was used by the network of delivery drivers of the service. They could see the required details for the fulfilment of the order with location tracking. Both the apps were connected to a backend service written in Typescript hosted on Firebase Functions and using a No-SQL database, Cloud Firestore on the Google Cloud Platform.",
    },
    {
      company: "Cruise And Fly Multi Services",
      href: "#",
      badges: [],
      location: "Freelance",
      title: "Web Developer",
      logoUrl: "",
      start: "April 2018",
      end: "May 2019",
      description:
        "Developed a travel website for Cruise And Fly to showcase the various tours and trips the company organizes. It was built using Wordpress. Added new trips, locations, itineraries and ensured the site was running up to the mark.",
    },
  ],
  education: [
    {
      school: "Symbiosis International University",
      href: "https://www.siu.edu.in/",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjocKOmEGhzSQBi70Y0XgLoDyFVQVMBfTEA&s",
      start: "2022",
      end: "2025",
    },
    {
      school: "AWS Certified Solutions Architect Associate",
      href: "https://www.credly.com/badges/fdcc8e57-5acd-46e4-80aa-35c8f337f956/linked_in_profile",
      degree: "Amazon Web Services",
      logoUrl:
        "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      start: "2024",
      end: "present",
    },
  ],
  projects: [
    {
      title: "Turbomarks",
      href: "",
      dates: "July 2024",
      active: false,
      description:
        "An open-source browser extension that helps you organize your commonly accessed links and access them faster by using VIM-like shorthands than using your mouse.",
      technologies: [
        "HTML5",
        "CSS3",
        "Javascript",
        "Background Workers",
        "Open Source",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/parambirje/turbomarks",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/turbomarks-logo.jpg",
      video: "",
    },
    {
      title: "AutoSSLx",
      href: "https://github.com/parambirje/auto-sslx",
      dates: "July 2024",
      active: true,
      description:
        "An open-source bash CLI tool to ease your NGINX and SSL workflows by exposing your web service, making it secure, reverse-proxying to the internet, all with a single command.",
      technologies: ["Open Source", "Bash", "NGINX"],
      links: [
        {
          type: "Source",
          href: "https://github.com/parambirje/auto-sslx",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/auto-sslx.jpg",
      video: "",
    },
    {
      title: "MajorLaw",
      href: "https://majorlaw.parameater.co/",
      dates: "June 2024",
      active: true,
      description:
        "Developed an AI-powered legal research tool that helps legal personnel find laws and statutes faster than ever before.",
      technologies: [
        "React",
        "Typescript",
        "Generative AI",
        "Python",
        "FastAPI",
        "AWS",
        "Amazon Bedrock",
        "DynamoDB NoSQL",
        "Node.js",
        "NGINX",
        "Docker",
      ],
      links: [
        {
          type: "Website",
          href: "https://majorlaw.parameater.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/majorlaw-banner.png",
      video: "",
    },
    {
      title: "NoBurnCloud",
      href: "https://noburncloud.parameater.co/",
      dates: "April 2024",
      active: true,
      description:
        "Simulate and test your cloud architectures before you spend a dime. Build better products with controlled costs and cloud deployments that withstand the test of time.",
      technologies: [
        "Next.js",
        "Typescript",
        "AWS",
        "Generative AI",
        "Google Gemini",
        "Docker",
        "Node.js",
        "Express.js",
        "Websockets",
        "NGINX",
      ],
      links: [
        {
          type: "Website",
          href: "https://noburncloud.parameater.co/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/parambirje/noburncloud",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Devpost",
          href: "https://devpost.com/software/noburncloud",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/noburncloud-banner.webp",
      video: "",
    },
    {
      title: "Parable Rhythm",
      href: "https://parablerhythm.parameater.co/",
      dates: "",
      active: true,
      description:
        "An interactive crime thriller RPG powered by Generative A.I that provides you a unique experience of solving cases and driving the story forward. Every action/approach will truly result in an unexpected pattern of events.",
      technologies: [
        "Amazon Partyrock",
        "Generative AI",
        "LLMs",
        "Cohere Command",
        "Llama",
        "Claude 3.1",
        "React",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://parablerhythm.parameater.co/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/parambirje/parable-rhythm-site",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/parable-rhythm-banner.gif",
      video: "",
    },
    {
      title: "SYKO",
      href: "#",
      dates: "",
      active: true,
      description:
        "Developed a website and managed deployment on AWS for a street-wear clothing brand that fuses traditional aesthetics with the pulse of India's diverse culture, streets, reflecting the dynamic energy of its cities.",
      technologies: ["AWS Cloud", "Lightsail", "Cloudfront", "Wordpress"],
      links: [
        {
          type: "Socials",
          href: "https://www.instagram.com/thesyko.in/",
          icon: <InstagramLogoIcon className="size-3" />,
        },
      ],

      image: "/syko-banner.webp",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  ],
} as const;
