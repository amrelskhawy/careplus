"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { Form } from "@/components/ui/form"
import { CutomFormField } from "../CutomFormField"

export enum FormFieldType {
  INPUT = "input" ,
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  DATE_PIKER = "datePicker",
  PHONE_INPUT = "phoneInput",
  SELECT = "select",
  SKELETON = "skeleton"
}

const formSchema = z.object({
  username: z.string().min(2, {
    message : "username should be 2 letters or more"
  }).max(50)
})

export const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>

        {/* Full Name Input */}
        <CutomFormField 
          control={form.control}
          name={'name'}
          label={"Full Name"}
          fieldType={FormFieldType.INPUT}
          placeholder={"John Doe"}
          iconSrc={"user.svg"} 
          iconAlt={"user"}          
        />

        {/* Full Name Input */}
        <CutomFormField 
          control={form.control}
          name={'email'}
          label={"Email"}
          fieldType={FormFieldType.INPUT}
          placeholder={"johndoe@example.com"}
          iconSrc={"email.svg"} 
          iconAlt={"email"}          
        />

        {/* Full Name Input */}
        <CutomFormField 
          control={form.control}
          name={'phone'}
          label={"Phone"}
          fieldType={FormFieldType.PHONE_INPUT}
          placeholder={"(+20) 103 4567 890"}
          iconSrc={"phone.svg"} 
          iconAlt={"phone"}          
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
