import { generateDatesFromYearBegining } from "../utils/generate-dates-from-year-begining"
import { HabitDay } from "./HabitDay"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBegining()

const minimumSummaryDatesSize = 18 * 7 //18 semanas
const amoutOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable() {
	return (
		<div className="w-full flex">
			<div className="grid grid-rows-7 grid-flow-row gap-3">
				{weekDays.map((d, i) => {
					return (
						<div key={`${d}-${i}`} className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center">
							{d}
						</div>
					)
				})}
			</div>

			<div className="grid grid-rows-7 grid-flow-col gap-3">
				{summaryDates.map(date => {
					return <HabitDay key={date.toString()} />
				})}

				{amoutOfDaysToFill > 0 && Array.from({ length: amoutOfDaysToFill }).map((_, i) => {
					return (
						<div
							key={i}
							className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
						/>
					)
				})}
			</div>
		</div>
	)
}