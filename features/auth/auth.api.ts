import { post } from "../../utils/fetcher"

export const apiRegisterUserId = async () => {
  const { data, error } = await post({ endpoint: "/api/users/register-id" });
  return {
    error,
    userId: error ? '' : data?.userId
  }
}