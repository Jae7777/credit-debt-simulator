
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

const formSchema = z.object({
  age: z.coerce.number().int().nonnegative(),
  expectedCollegeExpenses: z.coerce.number().int().nonnegative(),
  currentSavings: z.coerce.number().int().nonnegative(),
})

const KidForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 0,
      expectedCollegeExpenses: 0,
      currentSavings: 0,
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input placeholder="13" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="expectedCollegeExpenses"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Expected College Expense</FormLabel>
              <FormControl>
                <Input placeholder="50000" {...field} />
              </FormControl>
              <FormDescription>
                This is how much you expect to spend on colege
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="currentSavings"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Savings</FormLabel>
              <FormControl>
                <Input placeholder="50000" {...field} />
              </FormControl>
              <FormDescription>
                This is how much you have saved for this kid
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default KidForm;