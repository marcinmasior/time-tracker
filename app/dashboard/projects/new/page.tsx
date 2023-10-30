import PageHeader from "@/components/shared/page/PageHeader";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import ProjectForm from "@/components/projects/ProjectForm";

export default async function New() {

  return (
    <section>
      <PageHeader pageTitle="New Project">
        <Button asChild>
          <Link href="/dashboard/projects">Back To Project</Link>
        </Button>
      </PageHeader>

      <ProjectForm />
    </section>
  );
}