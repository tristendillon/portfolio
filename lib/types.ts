import projectComponents from '@/lib/project-components'

export type ProjectComponentType = keyof typeof projectComponents

export type ComponentPropsMap = {
  [K in ProjectComponentType]: React.ComponentProps<
    (typeof projectComponents)[K]
  >
}

export interface ProjectComponent<T extends ProjectComponentType> {
  component: T
  props: ComponentPropsMap[T]
}
export type ProjectMeta = {
  title: string
  description: string
  image: string
}

export type Projects = Record<
  string,
  {
    meta: ProjectMeta
    components: ProjectComponent<ProjectComponentType>[]
  }
>
