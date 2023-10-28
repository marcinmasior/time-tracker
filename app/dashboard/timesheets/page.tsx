import PageHeader from "@/components/shared/page/PageHeader";
import {Button} from "@/components/ui/button";
import EmptyDataPlaceholder from "@/components/shared/data/EmptyDataPlaceholder";


export default function TimeSheets() {
  return (
    <section>
      <PageHeader pageTitle="Time Sheets">
        <Button>Add New Time Sheet</Button>
      </PageHeader>

      <EmptyDataPlaceholder
        title="No Timesheets Found"
        description="You haven't added any timesheets yet. Start by adding your first timesheet."
      />
    </section>
  )
}