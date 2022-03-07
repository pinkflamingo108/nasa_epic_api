/*Here we are getting the most recent date data */
export let dateObj = new Date();
/*This gets todays months info */
export let default_month = dateObj.getUTCMonth() + 1;
export let current_month =
 default_month <= 9 ? "0" + default_month : default_month;
/*This gets todays day info */
export let default_day = dateObj.getUTCDate() - 1;
export let current_day = default_day <= 9 ? "0" + default_day : default_day;
/*This gets todays year info */
export let default_year = dateObj.getUTCFullYear();
export let newdate = default_year + "/" + current_month + "/" + current_day;
export let maxDate = default_year + "-" + current_month + "-" + current_day;
