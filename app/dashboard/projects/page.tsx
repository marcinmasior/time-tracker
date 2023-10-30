import PageHeader from "@/components/shared/page/PageHeader";
import DataHandlerServer from "@/components/shared/data/DataHandlerServer";
import { headers } from "next/headers"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import ProjectsTable from "@/components/projects/ProjectsTable";

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/dashboard/projects`, {
    method: "GET",
    headers: headers()
  })

  if (!res.ok) {
    return { status: 'error', message: 'Failed to fetch data', data: []}
  }

  return res.json()
}

export default async function Projects() {
  const jsonData = await getData()

  return (
    <section>
      <PageHeader pageTitle="Projects">
        <Button asChild>
          <Link href="/dashboard/projects/new">Add New Project</Link>
        </Button>
      </PageHeader>

      <DataHandlerServer
        status={jsonData.status}
        message={jsonData.message}
        data={jsonData.data}
        emptyTitle="No Timesheets Found"
        emptyDescription="You haven't added any projects yet. Start by adding your first project."
      >
        <ProjectsTable projects={jsonData.data} />
      </DataHandlerServer>
    </section>
  );
}