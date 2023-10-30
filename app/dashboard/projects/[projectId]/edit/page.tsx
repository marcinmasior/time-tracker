import PageHeader from "@/components/shared/page/PageHeader";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {headers} from "next/headers";
import ProjectForm from "@/components/projects/ProjectForm";

async function getData(projectId: string) {

  const res = await fetch(`${process.env.BASE_URL}/api/dashboard/projects/${projectId}`, {
    method: "GET",
    headers: headers()
  })

  if (!res.ok) {
    return { status: 'error', message: 'Failed to fetch data', data: []}
  }

  return res.json()
}

export default async function Edit({ params }: { params: { projectId: string } }) {
  const jsonData = await getData(params.projectId);

  return (
    <section>
      <PageHeader pageTitle="Edit Project">
        <Button asChild>
          <Link href="/dashboard/projects">Back To Projects</Link>
        </Button>
      </PageHeader>

      <ProjectForm project={jsonData.data} />
    </section>
  );
}