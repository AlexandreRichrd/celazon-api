import mail from "@adonisjs/mail/services/main";


const sendResetEmail = async (email: string, code: string) => {
    await mail.sendLater((message) => {
        message
            .from('support@celazon.fr')
            .to(email)
            .subject('Reset your password')
            .htmlView('emails/reset_password_email_html', { code: code })
    })
}

export default sendResetEmail