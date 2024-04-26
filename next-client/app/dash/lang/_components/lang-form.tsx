"use client";
import { FC, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { EyeIcon, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { axiosClient } from "@/lib/axios/helper";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { DialogClose } from "@/components/ui/dialog";
import { LangColumn } from "./data-table/columns";
const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
});
interface LangFormProps {
  initialData?: LangColumn;
}

const LangForm: FC<LangFormProps> = ({ initialData = {} as LangColumn }) => {
  const isEdit = initialData.id ? true : false;
  const title = isEdit ? "Edit Lang" : "Add Lang";
  const description = isEdit ? "Edit your Lang" : "Add your Lang";
  const buttonLabel = isEdit ? "Update" : "Create";

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData.name ? initialData.name : "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
    if (isEdit) {
      const data = await axiosClient
        .put(`/langs/${initialData.id}`, values)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Lang Updated Successfully");
            return res.data;
          }
        })
        .catch((err) => {
          toast.error(err.response?.data.message);
        });
    } else {
      const data = await axiosClient
        .post("/langs", values)
        .then((res) => {
          if (res.status === 201) {
            toast.success("Lang Created Successfully");
            return res.data;
          }
        })
        .catch((err) => {
          toast.error(err.response?.data.message);
        });
    }
    setIsLoading(false);
    form.reset();
    router.refresh();
    router.refresh();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name </FormLabel>
              <FormControl>
                <Input
                  placeholder="username"
                  {...field}
                  autoFocus
                  className="h-12"
                />
              </FormControl>
              <FormDescription>
                Name must be at least of 2 characters
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className=" ml-auto  flex justify-center items-center gap-x-3">
          <DialogClose asChild>
            <Button variant={"outline"}> Cancel </Button>
          </DialogClose>
          <Button type="submit" disabled={isLoading}>
            {buttonLabel}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LangForm;
