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

export type GridItem = {
  width: 1 | 2 | 3
  component: ProjectComponent<ProjectComponentType>
}

export type GridSection = {
  type: 'grid'
  title?: string
  description?: string
  items: GridItem[]
}

export type StandardSection = {
  type: 'standard'
  component: ProjectComponent<ProjectComponentType>
}

export type ProjectSection = GridSection | StandardSection

export type ProjectMeta = {
  title: string
  description: string
  image: string
  github?: string
}

export type Projects = Record<
  string,
  {
    meta: ProjectMeta
    sections: ProjectSection[]
  }
>
