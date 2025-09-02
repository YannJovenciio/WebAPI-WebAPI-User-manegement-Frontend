import { TableUsers } from "../TableUsers/TableUsers";
import { useGetPermissions } from "../../test/useGetPermissions";

export const ListUsers = () => {
  const { data, isLoading } = useGetPermissions();
  return <TableUsers Names={data} isLoading={isLoading}></TableUsers>;
};
