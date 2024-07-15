import fs from 'fs';

export async function GET() {
	const body = fs.readFileSync('resume.pdf');

	const status = 200;
	const headers = {
		'Content-type': 'application/pdf',
		'Content-Disposition': 'attachment; filename=resume.pdf'
	};
	return new Response(body, { status, headers });
}
