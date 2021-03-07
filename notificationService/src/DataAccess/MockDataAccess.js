const mockNotiifcationDB = [
    {
        originDomain: '127.0.0.1',
        domainToSendTo: 'todolist.com'
    }
]

export const getUserToNotify = (origin) => {

    try {
        const appToSendNotification = mockNotiifcationDB.find(app => {
            return app.originDomain === origin;
        });
        return appToSendNotification.domainToSendTo;
    } catch (err) {
        throw new Error("No such client registered")
    }
    
}

