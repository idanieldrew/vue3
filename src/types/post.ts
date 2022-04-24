export interface Post {
      title: string,
      slug: string
      details: string
      description: string
      user: User
      created_at: string
}

interface User {
      name: string
      email: string
}