import { getCurrentUser } from "@/app/actions/getCurrentUser";
import DashboardClient from "@/components/dashboard/DashboardClient";

export default async function Dashboard() {
  const currentUser = await getCurrentUser();
    return (
    <DashboardClient currentUser={currentUser}/>
  );
}
