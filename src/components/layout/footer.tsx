import { Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <div className="flex flex-col gap-4 py-10">
      <span className="text-center">Entre em contato:</span>
      <div className="flex flex-col gap-8">
        <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:gap-8">
          <div className="flex items-center gap-1">
            <Linkedin size={16} />
            <Link href="http://linkedin/in/victor-assis-oliveira">
              <span>/victor-assis-oliveira</span>
            </Link>
          </div>

          <div className="flex items-center gap-1">
            <Mail size={16} />
            <span>victor_assis@poli.ufrj.br</span>
          </div>
        </div>
      </div>
    </div>
  )
}
