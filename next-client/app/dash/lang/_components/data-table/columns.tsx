"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { EditIcon, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import LangForm from "../lang-form";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type LangColumn = {
  index: number;
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export const columns: ColumnDef<LangColumn>[] = [
  {
    accessorKey: "index",
    header: "Index",
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return new Date(row.original.createdAt).toDateString();
    },
  },

  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      return new Date(row.original.updatedAt).toDateString();
    },
  },
  {
    cell: ({ row }) => (
      <Dialog>
        <DialogTrigger
          className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
        >
          <EditIcon className="size-5 " />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Lang</DialogTitle>
          </DialogHeader>
          {/*  add form data */}
          <LangForm initialData={row.original} />
        </DialogContent>
      </Dialog>
    ),
    enableSorting: false,
    id: "expander",
  },
  {
    cell: ({ row }) => (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size={"icon"}
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
          >
            <Trash2 className="size-5 " />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
    enableSorting: false,
    id: "expander",
  },
];
