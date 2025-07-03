import { ReactNode } from "react"

type AppHeaderProps = {
    title: string
    children?: ReactNode
}

export default function AppHeader ({ title, children }: AppHeaderProps) {
    return (
        <header className="mb-5.5 flex items-center justify-between">
            <h1 className="text-xl font-bold">{ title }</h1>
            {children && (
                <nav className="flex items-center space-x-2">
                    {children}
                </nav>
            )}
        </header>
    )
}