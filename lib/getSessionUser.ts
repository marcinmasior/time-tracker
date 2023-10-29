import {getServerSession} from "next-auth";
import authOptions from "@/lib/authOptions";


const getSessionUser = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
}

export default getSessionUser;