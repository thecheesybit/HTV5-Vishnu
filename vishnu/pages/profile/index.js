import { useRouter } from "next/router";
import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import Image from "next/image";
import load from "/public/loading.gif";

function Profile() {
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
      <p className="center">Welcome to Profile!</p>
    </div>
  );

}
export default Profile;