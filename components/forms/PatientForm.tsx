"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form } from "@/components/ui/form"
import { CutomFormField } from "../CutomFormField"
import { useState } from "react"
import { SubmitButton } from "../SubmitButton"
import { UserFormValidation } from "@/lib/validators"

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  TEXTAREA = "textarea",
  DATE_PIKER = "datePicker",
  PHONE_INPUT = "phoneInput",
  SELECT = "select",
  SKELETON = "skeleton"
}


export const PatientForm = () => {

  const [isLoading, setIsLoading] = useState(false)


  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: ""
    }
  })

  async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true)

    try {
      const userData = { name, email, phone }
    } catch (error) {
      console.log(error)
    }

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

        <SubmitButton
          isLoading={isLoading}
          onClick={() => onSubmit()}
        >
          Get Started
        </SubmitButton>
      </form>
    </Form>
  )
}
