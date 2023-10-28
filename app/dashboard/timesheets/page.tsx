"use client"

import PageHeader from "@/components/shared/page/PageHeader";
import {Button} from "@/components/ui/button";
import EmptyDataPlaceholder from "@/components/shared/data/EmptyDataPlaceholder";
import DialogWithContent from "@/components/shared/DialogWithContent";
import TimeSheetForm from "@/components/timesheets/TimeSheetForm";


export default function TimeSheets() {
  return (
    <section>
      <PageHeader pageTitle="Time Sheets">
        <DialogWithContent buttonTitle='Add New Time Sheet' title='New Time Sheet'>
          <TimeSheetForm />
        </DialogWithContent>
      </PageHeader>

      <EmptyDataPlaceholder
        title="No Timesheets Found"
        description="You haven't added any timesheets yet. Start by adding your first timesheet."
      />
    </section>
  )
}