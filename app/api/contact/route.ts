import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
      })
    }

    const saved = await prisma.query.create({
      data: {
        name,
        email,
        message,
        // resolved is optional since it defaults to false
      },
    })

    return new Response(JSON.stringify({ message: 'Message saved', data: saved }), {
      status: 201,
    })
  } catch (error) {
    console.error('API Error:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
    })
  }
}
