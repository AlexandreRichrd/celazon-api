import mail from "@adonisjs/mail/services/main"

const sendMailOrder = async (email: string, count: number) => {
    await mail.sendLater((message) => {
        message
            .from('support@celazon.fr')
            .to(email)
            .subject('Thank you for your order')
            .htmlView('emails/order_notification_html.edge', { count: count})
    })
}

export {sendMailOrder}