import { Footer } from "@/components/footer"
import { ProjectsPageContent } from "@/components/projects-page-content"

export const metadata = {
  title: "Projects | Durva Kadam",
  description: "Explore all projects by Durva Kadam - Full Stack Developer",
}

export default function ProjectsPage() {
  return (
    <>
      <main className="pt-20 min-h-screen">
        <ProjectsPageContent />
      </main>
      <Footer />
    </>
  )
}
