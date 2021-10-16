// import { useRouter } from "next/router";
// import { getSession } from "next-auth/client";
// import { useEffect, useState } from "react";
import Image from "next/image";
import load from "/public/loading.gif";

import EmergencyScreen from "../../components/emergency-screen/emergency-screen";

function Emergency() {
   
  return (
    <div>
      <EmergencyScreen></EmergencyScreen>
    </div>
  );

  }
export default Emergency;
