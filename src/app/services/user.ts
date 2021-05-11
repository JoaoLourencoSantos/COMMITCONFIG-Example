class UserService {
  findAll = async (): Promise<string[]> => {
    return ["João", "Marcos", "Érika", "Pedro"];
  };
}

export default new UserService();
