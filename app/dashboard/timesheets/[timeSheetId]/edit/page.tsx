import PageHeader from "@/components/shared/page/PageHeader";
import TimeSheetForm from "@/components/timesheets/TimeSheetForm";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {headers} from "next/headers";

async function getData(timeSheetId: string) {

  const res = await fetch(`${process.env.BASE_URL}/api/timesheets/${timeSheetId}`, {
    method: "GET",
    headers: headers(),
    cache: 'no-cache',
  })

  if (!res.ok) {
    return { status: 'error', message: 'Failed to fetch data', data: []}
  }

  return res.json()
}

export default async function Edit({ params }: { params: { timeSheetId: string } }) {
  const jsonData = await getData(params.timeSheetId);

  return (
    <section>
      <PageHeader pageTitle="Edit Time Sheet">
        <Button asChild>
          <Link href="/dashboard/timesheets">Back To Time Sheets</Link>
        </Button>
      </PageHeader>

      <TimeSheetForm timeSheet={jsonData.data} />
    </section>
  );
}