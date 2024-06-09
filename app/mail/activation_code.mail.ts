import mail from "@adonisjs/mail/services/main"

const sendMailWithCode = async (email: string, code: string) => {
    await mail.sendLater((message) => {
        message
            .from('support@celazon.fr')
            .to(email)
            .subject('Activation code')
            .htmlView('emails/verify_email_html', { code: code })
    })
}

export {sendMailWithCode}