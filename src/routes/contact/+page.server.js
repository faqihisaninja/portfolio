import { fail } from '@sveltejs/kit';

import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetup.server.js';

export const actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();
			const name = String(data.get('name'));
			const email = String(data.get('email'));
			const subject = String(data.get('subject'));
			const messageBody = String(data.get('message'));
			const emailRegex =
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			const emailErr = !emailRegex.test(email);
			if (emailErr) {
				return fail(400, { name, email, subject, messageBody, invalidEmail: true });
			}
			let html = `
                <h2>This loser wants to talk to you:</h2>
                <h3>${name}</h3>
                <h2>This is his email:</h2>
                <h3>${email}</h3>
                <h2>What he said (if you give a fk):</h2>
                <pre>${messageBody}</pre>
            `;

			const message = {
				to: GOOGLE_EMAIL,
				subject,
				html
			};

			const sendEmail = async (message) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							console.error(err);
							reject(err);
						} else {
							resolve(info);
						}
					});
				});
			};

			await sendEmail(message);

			return {
				success: 'Email is sent'
			};
		} catch (error) {
			console.error(error);
		}
	}
};
