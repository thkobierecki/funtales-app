import { NextResponse } from 'next/server'

import { saveDataToAirtable } from '../../utils/saveDataToAirtable'

export async function POST(req, res) {
  try {
    const body = await req.json()
    const records = await saveDataToAirtable(body)
    return NextResponse.json({ records },{ status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message },{ status: 500 })
  }
}
