"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { useLenis } from "@/lib/useLenis";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Coming Soon",
    href: "#",
    description: "We're working on something exciting! Stay tuned.",
  },
];

export function NavItems({ mobile = false }: { mobile?: boolean }) {
  const lenis = useLenis();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -50, duration: 1.2 }); // Adjust offset if needed
    }
  };
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={`${
          mobile ? "flex flex-col space-y-4" : "flex space-x-6" // Conditional layout based on 'mobile' prop
        }`}
      >
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 w-[92vw] grid-cols-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-landing-bg focus:shadow-md"
                    href="#"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      ZenNotes AI
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Your ultimate productivity tool, combining a block-based
                      editor, real-time collaboration, and AI-driven features to
                      help you work smarter and faster.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#features" title="Real-Time Collaboration">
                Work together seamlessly—see live cursors and instant edits as
                your team collaborates in real time.
              </ListItem>
              <ListItem href="#features" title="Block-Based Editor">
                Structure your notes effortlessly with our intuitive block
                system. Organize ideas, tasks, and projects your way.
              </ListItem>
              <ListItem href="#features" title="AI-Powered Tools (Coming Soon)">
                Get smart suggestions, automate workflows, and boost
                productivity with AI-driven insights.
              </ListItem>
              <ListItem href="#features" title="Built for Speed">
                Powered by Next.js, Liveblocks, and Firestore, ZenNotes AI
                delivers a lightning-fast, scalable experience.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>AI Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[250px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="#testimonials"
            legacyBehavior
            passHref
            onClick={(e) => handleScroll(e, "#testimonials")}
            className="nav-link"
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Testimonials
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ title, children, ...props }) => {
  const lenis = useLenis();

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(target, { offset: -50, duration: 1.2 }); // Adjust offset if needed
    }
  };
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          onClick={(e) => handleScroll(e, props.href || "#")}
          className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-landing-bg hover:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
