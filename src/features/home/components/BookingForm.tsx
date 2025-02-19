"use client"

import React, { useState } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { CalendarIcon, Loader } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { AlertSuccess } from "@/features/shared/components/AlertSucces"
import { AlertError } from "@/features/shared/components/AlertError"

axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.withCredentials = true

const formSchema = z.object({
	pet_name: z.string().min(2, {
		message: "Must be at least 2 characters.",
	}),
	owner_name: z.string().min(2, {
		message: "Must be at least 2 characters.",
	}),
	owner_email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	service_type: z.string().min(2, {
		message: "Must be at least 2 characters.",
	}),
	appointment_date: z.date({
		required_error: "Please select a valid date",
	}),
	notes: z.string().optional(),
})

export default function BookingForm() {
	const [isLoading, setIsLoading] = useState(false)
	const [response, setResponse] = useState<any>()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			pet_name: "",
			owner_name: "",
			owner_email: "",
			service_type: "",
			appointment_date: new Date(),
			notes: "",
		},
	})

	const resetForm = () => {
		form.reset({
			pet_name: "",
			owner_name: "",
			owner_email: "",
			service_type: "",
			appointment_date: new Date(), // Reset date to today
			notes: "",
		})
	}

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setIsLoading(true) // Set loading to true when submitting

		try {
			const payload = {
				pet_name: values.pet_name,
				owner_name: values.owner_name,
				owner_email: values.owner_email,
				service_type: values.service_type,
				appointment_date: format(values.appointment_date, "yyyy-MM-dd"),
				notes: values.notes,
			}

			await axios.get("/sanctum/csrf-cookie", {
				withCredentials: true,
				withXSRFToken: true,
			})
			const response = await axios.post("/api/appointments", payload, {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				withCredentials: true,
				withXSRFToken: true,
			})

			console.log({ response })
			setResponse(response)
			resetForm()
		} catch (error) {
			console.error("Error:", error)
			setResponse(error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="space-y-6">
			<h2 className="text-2xl font-bold text-slate-800">We'll take your dog for a walk. Just tell us when!</h2>
			<div className="space-y-6" id="bookingForm">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="pet_name"
							render={({ field }) => (
								<FormItem className="p-2">
									<FormLabel>Pet Name</FormLabel>
									<FormControl>
										<Input placeholder="" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="owner_name"
							render={({ field }) => (
								<FormItem className="p-2">
									<FormLabel>Owner Name</FormLabel>
									<FormControl>
										<Input placeholder="" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="owner_email"
							render={({ field }) => (
								<FormItem className="p-2">
									<FormLabel>Owner Email</FormLabel>
									<FormControl>
										<Input placeholder="" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="service_type"
							render={({ field }) => (
								<FormItem className="p-2">
									<FormLabel>Service Type</FormLabel>
									<FormControl>
										<Input placeholder="" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="appointment_date"
							render={({ field }) => (
								<FormItem className="p-2 flex flex-col">
									<FormLabel>Appointment Date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-[240px] pl-3 text-left font-normal",
														!field.value && "text-muted-foreground"
													)}
												>
													{field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0" align="start">
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="notes"
							render={({ field }) => (
								<FormItem className="p-2">
									<FormLabel>Notes</FormLabel>
									<FormControl>
										<Textarea placeholder="Tell us a little bit about yourself" className="resize-none" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" disabled={isLoading} className="w-full bg-slate-800 text-white hover:bg-slate-700">
							{isLoading ? (
								<>
									<Loader className="mr-2 h-4 w-4 animate-spin" /> Submitting...
								</>
							) : (
								"Submit"
							)}
						</Button>
					</form>

					{response?.status == 201 && <AlertSuccess title={response.data.message} />}
					{response?.status >= 400 && response?.status <= 500 && <AlertError title={"Something went wrong."} />}
				</Form>
			</div>
		</div>
	)
}
