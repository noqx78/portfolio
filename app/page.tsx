import Image from "next/image";
import Navigation from "@/components/navigation";
import TechStackItem from "@/components/TechstackItem";
import { TextAnimate } from "@/components/ui/text-animate";
import user from '@/config.json' assert { type: 'json' };
import Project from "@/components/Project";
import { BlurFade } from "@/components/ui/blur-fade"

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center font-sans bg-white">
        <main className="flex flex-col items-center max-w-3xl w-full p-8 sm:p-12 bg-white">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <BlurFade delay={0.15}>
              <div className="w-24 h-24">
            <Image
              src={user.profilePicture}
              alt="Profile Picture"
              width={96}
              height={96}
              className="rounded-lg shadow-md"
            />
            </div>
            </BlurFade>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-black">
                <TextAnimate animation="slideLeft" by="character" delay={0.1}>
                  {`Hi, I'm ${user.name}`}
                </TextAnimate>

              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mt-2">
                <TextAnimate animation="slideUp" by="word" delay={0.1}>
                {user.description}
                </TextAnimate>
              </p>
            </div>
          </div>

<div className="flex gap-4 mt-4">
  {user.socials.map((social, index) => (
    <BlurFade key={social.name} delay={0.2 * index + 0.3}>
      <a
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:opacity-80 transition text-${social.text} ${social.bgColor} ${social.customStyle}`}
      >
        <Image
          src={social.image}
          alt={social.name}
          width={24}
          height={24}
          className="invert"
        />
        <span className="text-sm font-medium">{social.name}</span>
      </a>
    </BlurFade>
  ))}
</div>


          <div className="mt-12 w-full">
            
            <h2 className="text-xl font-semibold text-black mb-4">
              <BlurFade delay={0.7}>
              Tech Stack
              </BlurFade>
              </h2>
            <div className="flex flex-wrap gap-3">
              {user.techstack.map((techstack, index) => (
                <TechStackItem
                  key={techstack.name}
                  name={techstack.name}
                  logo={techstack.logo}
                  delay={index}
                />
              ))}
            </div>
          </div>

          <div className="mt-12 w-full">
            <h2 className="text-xl font-semibold text-black mb-4">
              <BlurFade delay={0.9}>
              Projects
              </BlurFade>
              </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {user.projects.map((project, index) => (
                <Project
                  key={project.name}
                  name={project.name}
                  image={project.image}
                  timeline={project.timeline}
                  description={project.description}
                  link={project.link}
                  website={project.website}
                  tags={project.tags}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
