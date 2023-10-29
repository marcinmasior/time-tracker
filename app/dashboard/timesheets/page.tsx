import PageHeader from "@/components/shared/page/PageHeader";
import TimeSheetsTable from "@/components/timesheets/TimeSheetsTable";
import DataHandlerServer from "@/components/shared/data/DataHandlerServer";
import { headers } from "next/headers"
import {Button} from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/timesheets`, {
    method: "GET",
    headers: headers(),
    cache: 'no-cache',
  })

  if (!res.ok) {
    return { status: 'error', message: 'Failed to fetch data', data: []}
  }

  return res.json()
}

export default async function TimeSheets() {
  const jsonData = await getData()

  return (
    <section>
      <PageHeader pageTitle="Time Sheets">
        <Button asChild>
          <Link href="/dashboard/timesheets/new">Add New Time Sheet</Link>
        </Button>
      </PageHeader>

      <DataHandlerServer
        status={jsonData.status}
        message={jsonData.message}
        data={jsonData.data}
        emptyTitle="No Timesheets Found"
        emptyDescription="You haven't added any timesheets yet. Start by adding your first timesheet."
      >
        <TimeSheetsTable timeSheets={jsonData.data} />
      </DataHandlerServer>
    </section>
  );
}