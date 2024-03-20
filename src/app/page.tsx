import Project from './project/page'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6 py-2">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl tracking-tight">Meus Projetos:</h2>
        <span className="text-xs text-muted-foreground">
          Clique em um projeto para abrí-lo.
        </span>
      </div>

      <div className="flex flex-col items-center gap-8">
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}
