import { NextResponse } from 'next/server'
import { createAssessmentResult, type AssessmentInput } from '@/lib/assessment-mock'

export async function POST(request: Request) {
  const body = (await request.json()) as Partial<AssessmentInput>

  const input: AssessmentInput = {
    companyName: body.companyName ?? '',
    industry: body.industry ?? '',
    employees: body.employees ?? '',
    website: body.website ?? '',
    timeConsumingProcesses: body.timeConsumingProcesses ?? '',
    currentTools: body.currentTools ?? '',
    goals: body.goals ?? '',
    contactName: body.contactName ?? '',
    email: body.email ?? '',
    phone: body.phone ?? ''
  }

  const result = createAssessmentResult(input)

  return NextResponse.json({
    result,
    meta: {
      mode: 'mock',
      nextIntegrationPoint: 'Replace createAssessmentResult with a real AI orchestration call.'
    }
  })
}
