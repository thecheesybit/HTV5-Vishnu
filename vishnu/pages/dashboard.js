import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import load from "/public/loading.gif";
import DashboardScreen from "../components/dashboard/dashboard-screen";

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        getSession().then((session) => {
        if (!session) {
            router.replace("/");
        } else {
            setIsLoading(false);
        }
        });
    }, [router]);

    if (isLoading) {
        return (
        <div className="center">
            <Image
            src={load}
            alt="loading"
            width={65}
            height={65}
            className="center"
        />
        </div>
        );
    }

  return (
    <div>
      <p className="center">Welcome to Dashboard!</p>
      <DashboardScreen></DashboardScreen>
    </div>
  );
}

export default Dashboard;
