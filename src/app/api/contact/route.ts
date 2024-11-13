import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body
    
    // Here you would typically send an email or save to a database
    console.log('Received contact form submission:', { name, email, message })
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ message: 'Error sending message' }, { status: 500 })
  }
}