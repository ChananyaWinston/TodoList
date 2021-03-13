const mockNotiifcationDB = [
    {
        originDomain: 'host.docker.internal',
        domainToSendTo: 'todolist.com'
    }
]

export const getUserToNotify = (origin) => {

    try {
        console.log(origin);
        const appToSendNotification = mockNotiifcationDB.find(app => {
            return app.originDomain === origin;
        });
        return appToSendNotification.domainToSendTo;
    } catch (err) {
        throw new Error("No such client registered")
    }
    
}

