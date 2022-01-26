//Guide document https://date-fns.org/v2.28.0/docs/Time-Zones
//Author: Santiago Tonarelli :D 
import {parseISO} from "date-fns";
import {utcToZonedTime, format} from "date-fns-tz";

export enum PredefinedFormats {
	ShortDateTime = "P p",
	LongDateTime = "P pp",
	ShortDate = "P",
	ShortTime = "hh:mm a",
	LongTime = "pp",
}

/**
 * Formats an ISO date/time string in UTC in the specific timezone with provided pattern.
 * @param date An ISO date or date/time string in UTC.
 * @param pattern A predefined pattern string or a custom string as defined in the date-fns documentation at https://date-fns.org/
 * @param timeZone An IANA time zone name. Defaults to 'America/Cancun' or EST.
 */
const formatUTCToSpecificTimezone = (
	date: string,
	pattern: string = PredefinedFormats.ShortDateTime,
	timeZone: string = "America/Cancun"
): string | null => {
	let result = null;

	try {
		if (date) {
			// Only process when date is not null or undefined for UI.
			const parsedDate: Date = parseISO(date);

			const zonedDate: Date = utcToZonedTime(parsedDate, timeZone);

			result = format(zonedDate, pattern, {timeZone});
		}
	} catch (err) {
		console.error(err);
	}
	return result;
};

console.log(formatUTCToSpecificTimezone("2018-09-01T16:01:36.386Z"));
