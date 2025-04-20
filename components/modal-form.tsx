import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import React from "react"

interface ModalFormProps {
  buttonTrigger: string
  children: React.ReactNode
  title: string
  subtitle: string
}

const ModalForm: React.FC<ModalFormProps> = ({
  buttonTrigger,
  children,
  title,
  subtitle,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="max-w-36">
        <Button variant="outline">{buttonTrigger}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] relative">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default ModalForm
