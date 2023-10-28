import PageHeader from "@/components/shared/page/PageHeader";
import DialogWithContent from "@/components/shared/DialogWithContent";
import TimeSheetForm from "@/components/timesheets/TimeSheetForm";
import TimeSheetsTabel from "@/components/timesheets/TimeSheetsTabel";
import DataHandlerServer from "@/components/shared/data/DataHandlerServer";
import { headers } from "next/headers"

async function getData() {
  const res = await fetch(`${process.env.BASE_URL}/api/timesheets`, {
    method: "GET",
    headers: headers(),
    cache: 'no-cache'
  })

  if (!res.ok) {
    return { status: 'error', message: 'Failed to fetch data', data: []}
  }

  return res.json()
}

export default async function TimeSheets() {
  const data = await getData()


  return (
    <section>
      <PageHeader pageTitle="Time Sheets">
        <DialogWithContent buttonTitle='Add New Time Sheet' title='New Time Sheet'>
          <TimeSheetForm />
        </DialogWithContent>
      </PageHeader>

      <DataHandlerServer status={data.status} message={data.message} data={data.data}>
        <TimeSheetsTabel timeSheets={data.data} />
      </DataHandlerServer>
    </section>
  );
}