"use client"

import React from 'react';
import {TimeSheet} from ".prisma/client";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";

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
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TimeSheetsTable;

