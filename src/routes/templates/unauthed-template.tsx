import { ReactNode } from "react"

interface TemplateType {
  children: ReactNode
}

const UnauthedTemplate = ({ children }: TemplateType) => {
  return (
    <div className="w-screen h-screen text-xs bg-blue-500">
        <span>Unauthed</span>
        {children}
    </div>
  )
}

export default UnauthedTemplate