import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import TimeSheetDeleteButton from "@/components/timesheets/TimeSheetDeleteButton";
import {Project} from ".prisma/client";
import {Check, X} from "lucide-react";

interface ProjectsTableProps {
  projects: Project[]
}

const ProjectsTable: React.FC<ProjectsTableProps> = ({projects}) => {

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Active</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell className="font-medium"><Link href='/'>{project.name}</Link></TableCell>
            <TableCell>{project.active ? <Check />: <X />}</TableCell>
            <TableCell>
              <div className="flex justify-end gap-x-2">
                <Button asChild>
                  <Link href={`/dashboard/projects/${project.id}/edit`}>Edit</Link>
                </Button>
                <TimeSheetDeleteButton id={project.id} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProjectsTable;

