
export interface AppRepository {
    getAll?: any
    put(hash: string, url: string): Promise<string>;
    get(hash: string): Promise<string>;
  }

  export const AppRepositoryTag = 'AppRepository';