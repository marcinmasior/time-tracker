import React from 'react';
import {TimeSheet} from ".prisma/client";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import TimeSheetDeleteButton from "@/components/timesheets/TimeSheetDeleteButton";

interface TimeSheetsTableProps {
  timeSheets: TimeSheet[]
}

const TimeSheetsTable: React.FC<TimeSheetsTableProps> = ({timeSheets}) => {

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {timeSheets.map((timeSheet) => (
          <TableRow key={timeSheet.id}>
            <TableCell className="font-medium"><Link href='/'>{timeSheet.name}</Link></TableCell>
            <TableCell>
              <div className="flex justify-end gap-x-2">
                <Button asChild>
                  <Link href={`/dashboard/timesheets/${timeSheet.id}/edit`}>Edit</Link>
                </Button>
                <TimeSheetDeleteButton id={timeSheet.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TimeSheetsTable;

