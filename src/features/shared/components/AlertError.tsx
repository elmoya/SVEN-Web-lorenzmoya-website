import { Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertProps } from "../types/AlertProps"

export function AlertError({ title = "Something went wrong", description }: AlertProps) {
	return (
		<Alert variant="destructive">
			<Terminal className="h-4 w-4" />
			<AlertTitle>{title}</AlertTitle>
			<AlertDescription>{description}</AlertDescription>
		</Alert>
	)
}
