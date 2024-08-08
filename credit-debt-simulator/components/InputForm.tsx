"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import KidForm from "./KidForm"

const formSchema = z.object({
  numKids: z.coerce.number().int().nonnegative().min(1).max(5),
  monthlyIncome: z.coerce.number().int().nonnegative(),
  monthlyExpense: z.coerce.number().int().nonnegative(),
})


const InputForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      numKids: 1,
      monthlyIncome: 0,
      monthlyExpense: 0,
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const [numKids, setNumKids] = useState(0)

  useEffect(() => {
    setNumKids(form.getValues('numKids'))
    console.log(numKids)
  }, [form.getValues('numKids')])

  return (
    <div >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="numKids"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Kids</FormLabel>
                <FormControl>
                  <Input placeholder="1" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {Array.from({ length: numKids }).map((_, index) => (
            <KidForm key={index} />
          ))}
          <FormField
            control={form.control}
            name="monthlyIncome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Income</FormLabel>
                <FormControl>
                  <Input placeholder="1000" {...field} />
                </FormControl>
                <FormDescription>
                  This is your monthly income
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="monthlyExpense"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Monthly Expense</FormLabel>
                <FormControl>
                  <Input placeholder="800" {...field} />
                </FormControl>
                <FormDescription>
                  This is your monthly expense
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default InputForm;