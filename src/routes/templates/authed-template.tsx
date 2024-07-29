import { ReactNode } from "react"

interface TemplateType {
  children: ReactNode
}

const AuthedTemplate = ({ children }: TemplateType) => {
  return (
    <div className="w-screen h-screen text-xs bg-blue-500">
        <span>Authed</span>
        {children}
    </div>
  )
}

export default AuthedTemplate