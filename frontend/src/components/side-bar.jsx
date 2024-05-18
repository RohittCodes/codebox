"use client";

import { Code, CodeSquare, Home, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const Sidebar = () => {
  return (
    <div className="h-full w-[56px] bg-background flex flex-col items-center justify-between px-2 py-4">
      <div className="flex flex-col items-center justify-between space-y-4">
        <Link href="/" passHref>
          <Button
            variant="icon"
            size="icon"
            className="border border-border hover:border-primary"
          >
            <Code />
          </Button>
        </Link>
        <Sheet>
          <SheetTrigger>
            <Button
              variant="icon"
              size="icon"
              className="border border-border hover:border-primary"
            >
              <Lightbulb />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Code Optimizer</SheetTitle>
              <SheetDescription>Optimize your code with ease.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <ThemeToggle />
    </div>
  );
};
