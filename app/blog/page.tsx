import { ModeToggle } from "@/components/ModeToggle"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <div className="flex min-h-screen items-start justify-center font-sans pt-8">
        <main className="flex flex-col items-center max-w-3xl w-full p-8 sm:p-12">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>

          <Separator className="w-full mb-6" />

          <p>still in work</p>
        </main>
      </div>
    </>
  )
}
