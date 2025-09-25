import { Appbar } from "../components/Appbar";
import { redirect } from "next/navigation";
import { AuthOptions, getServerSession } from "next-auth";
export default async function Home(){

  const session = await getServerSession();
  if(session?.user){
    redirect("/dashboard");
  }
  else{
    redirect("/auth/signin")
  }
}