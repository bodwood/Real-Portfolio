import { NextResponse } from 'next/server';
const fs = require('fs');
const path = require('path');

export async function POST(request: NextResponse) {
  const data = await request.json();

  const filePath = path.resolve(process.cwd(), 'app/data/submission.json');

  let submissions: any = [];

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    submissions = JSON.parse(data);
  } catch (error) {
    console.log('Error reading file: ', error);
  }

  submissions.push(data);

  try {
    const newData = JSON.stringify(submissions, null, 2);
    fs.writeFileSync(filePath, newData, 'utf8');
  } catch (error) {
    console.log('Error writing file: ', error);
  }

  return NextResponse.json({
    data: data,
    message: 'This message has been sent successfully!',
  });
}
// export async function GET() {
//   return NextResponse.json ({
//   message: "It's time to Code!!",
//   });
// }
