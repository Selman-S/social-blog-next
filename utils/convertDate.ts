export function convertDateFormat(inputDate: string | number | Date) {
 const months = [
   'January', 'February', 'March', 'April', 'May', 'June',
   'July', 'August', 'September', 'October', 'November', 'December'
 ];

 const dateObject = new Date(inputDate);
 const year = dateObject.getFullYear();
 const month = months[dateObject.getMonth()];
 const day = dateObject.getDate();

 const formattedDate = `${month} ${day}, ${year}`;
 return formattedDate;
}