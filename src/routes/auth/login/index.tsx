import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '@/pages/auth'

export const Route = createFileRoute('/auth/login/')({
  component: RouteComponent,
})

export function RouteComponent() {
    return (
        <LoginForm />
    )
}
