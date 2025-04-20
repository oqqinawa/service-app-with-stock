import React, { forwardRef } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "./ui/calendar"

interface DatePickerProps {
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  className?: string
  disabled?: boolean
}

const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  ({ date, setDate, className, disabled }, ref) => {
    return (
      <div className={`flex flex-col space-y-1.5 ${className}`}>
        <Label>Tanggal</Label>
        <Popover>
          <Button variant={"outline"} asChild disabled={disabled}>
            <PopoverTrigger ref={ref}>
              <div className="flex items-center gap-4">
                <CalendarIcon />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </div>
            </PopoverTrigger>
          </Button>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }
)

DatePicker.displayName = "DatePicker" // Menetapkan displayName untuk debugging

export default DatePicker
