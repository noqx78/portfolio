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
}


export default function Project({ name, image, timeline, description, link, website, tags, delay }: ProjectItemProps) {
    return (
        <BlurFade delay={0.1 * delay + 1.2}>
            <Card className="shadow-none">
                <CardHeader>
                    <span className="flex items-center gap-2">
                        <Image src={image} alt={`Project Image of ${name}`} width={32} height={32} />
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
                                className="px-3 py-1 rounded-md bg-gray-100 text-gray-800 font-sans text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-4 flex gap-1">
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <Button className="shadow-none" size="sm">
                                <Image className="invert" src={GithubIcon2} alt="Github" width={16} height={16} /> Github
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
