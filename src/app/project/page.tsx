import { Ellipsis, Github, Globe, Video } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import gato1 from '~/public/gato1.png'

export default function Project() {
  return (
    <div className="group relative flex w-full transform flex-col items-center justify-between gap-2 rounded-lg border bg-card  p-2 transition-transform duration-200 ease-in-out hover:z-40 hover:scale-125 hover:cursor-pointer xs:flex-row">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="absolute right-2 top-2 z-50 h-6 rounded-xl p-2"
          >
            <Ellipsis className="opacity-0 group-hover:opacity-70 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuItem className="p-0">
            <Link href="" className="flex flex-grow items-center gap-2 p-2">
              <Globe />
              Projeto na web
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link href="" className="flex flex-grow items-center gap-2 p-2">
              <Video />
              Vídeo demo
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link href="" className="flex flex-grow items-center gap-2 p-2">
              <Github />
              Frontend
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="p-0">
            <Link href="" className="flex flex-grow items-center gap-2 p-2">
              <Github />
              Backend
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex flex-col items-center">
        <h2 className="xs:hidden">Project Title</h2>
        <div className="relative box-border h-52 w-52 border">
          <Image src={gato1} alt="" fill className="object-cover" />
        </div>
      </div>
      <div>
        <h2 className="hidden xs:block">Delivery Shop</h2>
        <p className="text-justify font-serif text-sm text-muted-foreground">
          Responsivo, com design acessível e bonito no frontend, robusto, com
          boa cobertura de testes e bem estruturado no backend, o Delivery Shop
          auxilia restaurantes com as operações de entrega, cadastro de clientes
          e produtos.
        </p>
        <div>
          <span>Tecnologias: </span>
          <span className="font-serif text-sm text-muted-foreground">
            Typescript, React, Node.js
          </span>
        </div>
      </div>
    </div>
  )
}
