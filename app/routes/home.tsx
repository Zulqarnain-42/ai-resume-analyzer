import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ai Resume Analyzer" },
    { name: "description", content: "Smart Resume Analyzer!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review Your Submission and check AI-powered feedback.</h2>
      </div>
      {resumes && resumes.length > 0 && (
        <div className="resumes-section">
          {resumes.map((resume:Resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </section>
  </main>;  
}
