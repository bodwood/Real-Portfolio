import React from 'react';
import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';
import Message from '../../../models/Message';

export async function POST(req: NextRequest, res: NextResponse) {
  const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.p1luivz.mongodb.net/`;

  let client;

  try {
    client = await mongoose.connect(MONGODB_URI);
    console.log('Connected to DB');
  } catch (error) {
    console.log('Error connecting to DB: ' + error);
  }

  const data = await req.json();

  const { first_name, last_name, email, message } = data;

  //validation
  if (
    !first_name ||
    !last_name ||
    !email ||
    !message ||
    !email.includes('@') ||
    message.trim() === '' ||
    first_name.trim() === '' ||
    last_name.trim() === ''
  ) {
    NextResponse.json({ message: 'Invalid input - fill all fields' }, { status: 422 });
    return;
  }
  const newData = {
    ...data,
    data: new Date(),
  };

  try {
    await Message.create(newData);
    console.log('Message sent');
    return NextResponse.json({ message: 'Message sent' }, { status: 201 });
  } catch (error) {
    console.log('Error sending message: ' + error);
    return NextResponse.json({ message: 'Error sending message' }, { status: 500 });
  }
}
