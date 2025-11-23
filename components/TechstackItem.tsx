"use client"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BlurFade } from "@/components/ui/blur-fade"
import { delay } from "motion";

interface TechStackItemProps {
  name: string;
  logo: string;
  delay?: number;
  additionalDelay?: number
  invert: boolean
}

export default function TechStackItem({ name, logo, delay = 0, additionalDelay = 0, invert}: TechStackItemProps) {
  return (
    <BlurFade delay={0.1 * delay + additionalDelay} duration={0.2}>
    <Card className="w-20 h-20 shadow-none bg-background">
      <CardContent className="p-2 flex items-center justify-center h-full">
        <Image
          src={logo}
          alt={name}
          width={32}
          height={32}
          className={`${invert ? "invert-0 dark:invert" : ""} transition-all duration-300`}
        />
      </CardContent>
    </Card>
    </BlurFade>
  )
}
