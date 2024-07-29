import { ReactNode } from "react"

interface TemplateType {
  children: ReactNode
}

const PublicTemplate = ({ children }: TemplateType) => {
  return (
    <div className="w-screen h-screen text-xs bg-blue-500">
        <span>Public</span>
        {children}
    </div>
  )
}

export default PublicTemplate