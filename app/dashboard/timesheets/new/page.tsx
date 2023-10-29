import PageHeader from "@/components/shared/page/PageHeader";
import TimeSheetForm from "@/components/timesheets/TimeSheetForm";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default async function New() {

  return (
    <section>
      <PageHeader pageTitle="New Time Sheet">
        <Button asChild>
          <Link href="/dashboard/timesheets">Back To Time Sheets</Link>
        </Button>
      </PageHeader>

      <TimeSheetForm />
    </section>
  );
}