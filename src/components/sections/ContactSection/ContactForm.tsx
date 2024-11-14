'use client'

import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

type FormFieldProps = {
  label: string
  id: keyof FormData
  type?: string
  placeholder: string
  isTextArea?: boolean
}

const FormField = ({ label, id, type = "text", placeholder, isTextArea = false }: FormFieldProps) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    {isTextArea ? (
      <Textarea 
        id={id}
        placeholder={placeholder}
        className="min-h-[150px] bg-purple-50/50"
      />
    ) : (
      <Input 
        id={id}
        type={type}
        placeholder={placeholder}
        className="bg-purple-50/50"
      />
    )}
  </div>
)

export function ContactForm() {
  const { handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Handle form submission
  }

  const fields: FormFieldProps[] = [
    {
      label: "Name",
      id: "name",
      placeholder: "Abdullah"
    },
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "fayazaftab@gmail.com"
    },
    {
      label: "Subject",
      id: "subject",
      placeholder: "+625 216 6552"
    },
    {
      label: "Leave us messages",
      id: "message",
      placeholder: "Hi Gen",
      isTextArea: true
    }
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {fields.map((field) => (
        <FormField key={field.id} {...field} />
      ))}
      
      <Button 
        type="submit" 
        className="w-full bg-purple-500 hover:bg-purple-600 text-white"
      >
        Send Messages
      </Button>
    </form>
  )
}