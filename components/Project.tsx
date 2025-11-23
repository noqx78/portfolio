"use client"
import Image from "next/image";
import Link from "next/link";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GlobeIcon } from "lucide-react";
import GithubIcon2 from "@/public/github2.svg";
import { BlurFade } from "./ui/blur-fade";
import user from '@/config.json' assert { type: 'json' };

interface ProjectItemProps {
    name: string;
    image: string;
    timeline: string;
    description: string;
    link: string;
    website: string;
    tags: string[];
    delay: number;
    style: string;
}


export default function Project({ name, image, timeline, description, link, website, tags, delay,style }: ProjectItemProps) {
    return (
        <BlurFade delay={0.1 * delay + 1.2}>
            <Card className="shadow-none bg-background">
                <CardHeader>
                    <span className="flex items-center gap-2">
                        <Image className={style} src={image} alt={`Project Image of ${name}`} width={32} height={32} />
                        <CardTitle>{name}</CardTitle>
                    </span>
                    <CardDescription>{timeline}</CardDescription>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2 flex-wrap">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-md dark:bg-popover bg-gray-100 dark:primary font-sans text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-4 flex gap-1">
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <Button className="shadow-none" size="sm">
                                <Image className={`invert dark:invert-0 ${style}`} src={GithubIcon2} alt="Github" width={16} height={16} /> Github
                            </Button>
                        </Link>
                        {website && (
                            <Link href={website} target="_blank" rel="noopener noreferrer">
                                <Button className="shadow-none" size="sm">
                                    <GlobeIcon /> Website
                                </Button>
                            </Link>
                        )}
                    </div >
                </CardContent>
            </Card>
        </BlurFade>
    )
}
