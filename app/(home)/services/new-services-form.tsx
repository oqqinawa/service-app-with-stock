"use client"

import DatePicker from "@/components/date-picker"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DialogClose, DialogFooter } from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { formServiceSchema, ServiceFormData } from "@/schemas/form-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { DialogTrigger } from "@radix-ui/react-dialog"
import React from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

interface NewServiceFormProps {
  submitTitle: string
  disabled?: boolean
}

const NewServiceForm: React.FC<NewServiceFormProps> = ({
  submitTitle,
  disabled,
}) => {
  const today = new Date()
  const [date, setDate] = React.useState<Date | undefined>(today)

  const form = useForm<ServiceFormData>({
    resolver: zodResolver(formServiceSchema),
    defaultValues: {
      name: "",
      jenis: "",
      merk: "",
      model: "",
      serial: "",
      date: today,
      dp: "",
      kelengkapan: "",
      kerusakan: "",
      agreement: false,
      penerima: "",
    },
  })

  function onSubmit(values: z.infer<typeof formServiceSchema>) {
    try {
      if (!values.agreement) {
        toast.error("Anda harus menyetujui syarat dan ketentuan.")
        return // Prevent form submission
      }
      console.log(values)
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>,
        { duration: 2000 }
      )
    } catch (error) {
      console.error("Form submission error", error)
      toast.error("Failed to submit the form. Please try again.")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <div>
                  <FormControl>
                    <DatePicker
                      date={date}
                      setDate={setDate}
                      {...field}
                      disabled={disabled}
                    />
                  </FormControl>
                  <FormMessage />
                  <div className="flex items-center gap-2 mt-2">
                    <Checkbox />
                    <Label>Enable Date</Label>
                  </div>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <Label>Pemilik Barang</Label>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="jenis"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <Label>Jenis Barang</Label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Jenis Barang" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Pilih Jenis Barang</SelectLabel>
                        <SelectItem value="hp">Hp</SelectItem>
                        <SelectItem value="laptop">Laptop</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="merk"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <Label>Merk Barang</Label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Merk Barang" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Pilih Merk Barang</SelectLabel>
                        <SelectItem value="samsung">Samsung</SelectItem>
                        <SelectItem value="iphone">Iphone</SelectItem>
                        <SelectItem value="xiaomi">Xiaomi</SelectItem>
                        <SelectItem value="vivo">Vivo</SelectItem>
                        <SelectItem value="oppo">Oppo</SelectItem>
                        <SelectItem value="infinix">Infinix</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <Label>Model/Seri Barang</Label>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serial"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <Label>Serial Number/IMEI</Label>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kelengkapan"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <Label>Kelengkapan Unit</Label>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kerusakan"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <Label>Detail Kerusakan/ Keluhan</Label>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dp"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <Label>DP/Uang Muka</Label>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="penerima"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-col space-y-1.5">
                  <Label>Penerima</Label>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agreement"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 p-4 col-span-2">
                <FormControl>
                  <Checkbox
                    id="agreement-checkbox"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <Label
                    htmlFor="agreement-checkbox"
                    className="cursor-pointer"
                  >
                    Dengan ini NAMA setuju Menerima Service Masuk
                  </Label>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
        <DialogFooter className="flex gap-2">
          <DialogClose asChild>
            <Button type="button" size={"default"}>
              Batal
            </Button>
          </DialogClose>
          {form.getValues("agreement") ? (
            <DialogTrigger asChild>
              <Button type="submit" size={"default"}>
                {submitTitle}
              </Button>
            </DialogTrigger>
          ) : (
            <div>
              <Button type="submit" size={"default"}>
                {submitTitle}
              </Button>
            </div>
          )}
        </DialogFooter>
      </form>
    </Form>
  )
}

export default NewServiceForm
