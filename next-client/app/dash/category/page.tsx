import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircleIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CategoryTable } from "./_components/data-table/category-table";
import { columns } from "./_components/data-table/columns";
import { Card } from "@/components/ui/card";
import { axiosServer } from "@/lib/axios/helper";
import toast from "react-hot-toast";
import CategoryForm from "./_components/category-form";

interface CategoryPageProps {}

const CategoryPage: FC<CategoryPageProps> = async ({}) => {
  const data = await axiosServer
    .get("/categories")
    .then((res) => res.data)
    .catch((err) => {
      toast.error(err.response.data.message);
    });
  return (
    <div className=" md:px-8">
      <div className=" flex flex-row items-center justify-between ">
        <div>
          <h1 className=" mb-2 mt-4 text-2xl font-semibold text-accent-foreground">
            Categorys
          </h1>
        </div>
        <Dialog>
          <DialogTrigger className={cn(buttonVariants())}>
            <PlusCircleIcon className="mr-3 size-5 " /> Add Category
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Category</DialogTitle>
            </DialogHeader>
            <CategoryForm />
          </DialogContent>
        </Dialog>
      </div>
      <Card className=" bg-card md:container py-4 my-8 mx-auto w-full md:w-2/3 ">
        <CategoryTable
          columns={columns}
          data={
            data?.categories.map(
              (
                item: {
                  name: string;
                  _id: string;
                  createdAt: string;
                  updatedAt: string;
                },
                index: number
              ) => {
                return {
                  index: index + 1,
                  name: item.name,
                  id: item._id,
                  createdAt: item.createdAt,
                  updatedAt: item.updatedAt,
                };
              }
            ) || []
          }
        />
      </Card>
    </div>
  );
};

export default CategoryPage;
