
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form"
import { FormFieldType } from "./forms/PatientForm"
import Image from "next/image"


interface CustomProps {
  control: Control<any>
  name: string
  label?: string
  placeholder?: string
  desc?: string
  fieldType: FormFieldType
  iconSrc?: string
  iconAlt?: string
  dateFormat?: string
  showTimeSelect?: boolean
  children?: React.ReactNode
  renderSkeleton?: (field: any) => React.ReactNode
}

const RenderField = ({ field, props }:
  { field: any, props: CustomProps }) => {
  switch (props.fieldType) {

    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <Image
              src={"/assets/icons/" + props.iconSrc}
              width={24}
              height={24}
              alt={props.iconAlt || 'alt pic'}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className="shad-input border-0"
            />
          </FormControl>
        </div>
      )
      break;
    default:
      break;
  }
}

export const CutomFormField = (props: CustomProps) => {
  const { control, name, label, placeholder, fieldType } = props
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem >
          {
            fieldType !== FormFieldType.CHECKBOX && label && (
              <FormLabel>{label}</FormLabel>
            )
          }
          <RenderField
            field={field} props={props} />
        </FormItem>
      )}
    />
  )
}
