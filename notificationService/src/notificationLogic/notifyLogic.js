import { getUserToNotify } from '../DataAccess/MockDataAccess.js'

const sendNotification = async (data, domainToSendTo) => {
    console.log("Sent notification Successfully");
}

export const notify = async (data, origin) => {
    const domainToSendTo = getUserToNotify(origin);
    await sendNotification(data, domainToSendTo);
    return true
}