import { useEffect } from "react";
import Image from "next/image";
import { User } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import EventsCarousel from "~~/components/dashboard/events/EventsCarousel";
import Signup from "~~/components/dashboard/index";

const Dashboard = ({ data: users }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: sessionData } = useSession();

  const fetcher = (url: string) => fetch(url).then(res => res.json());
  const { data: userData, isLoading } = useSWR(`http://localhost:3000/api/users?id=${sessionData?.user.id}`, fetcher);

  useEffect(() => {
    sessionData && console.log(sessionData);
  }, [sessionData]);

  useEffect(() => {
    userData && console.log(userData);
    users && console.log(users);
  }, [userData, users]);

  if (isLoading) {
    return (
      <div className="container pt-12 min-h-[calc(100vh-56px)] text-center">
        <p>Loading user...</p>
      </div>
    );
  } else if (userData && !userData.role) {
    return (
      <div className="min-h-[calc(100vh-56px)] text-center flex justify-center w-full">
        <div className="absolute inset-0 -z-10 h-[calc(100vh-56px)] w-full object-cover">
          <Image alt="Nounish background" src="/assets/background/dashboard_signup_1.png" fill quality={100} />
        </div>
        <Signup />
      </div>
    );
  } else
    return (
      <div className="grid grid-cols-5 grid-rows-5 gap-4 w-full h-[calc(100vh-56px)] rounded-lg">
        <div className="col-span-2 row-span-5 bg-slate-300 rounded-md"></div>
        <div className="col-span-3 row-span-3 col-start-3 bg-red-600/90 rounded-md">
          <EventsCarousel />
        </div>
        <div className="col-span-2 row-span-2 col-start-3 row-start-4 bg-blue-700 rounded-md"></div>
        <div className="row-span-2 col-start-5 row-start-4 bg-emerald-600 rounded-md"></div>
      </div>
      // <div className="container pt-12 min-h-[calc(100vh-56px)] text-center flex justify-center">
      //   <h2 className="text-4xl font-medium">Dashboard</h2>
      //   {address && <p>Connected address: {address}</p>}
      //   {isConnected ? <p>User is connected</p> : <p>No wallet connected :(</p>}
      //   {sessionData && sessionData.user.id}
      //   {error && <p>{error}</p>}
      // </div>
    );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps<{ data: User[] }> = async () => {
  // fetching data here
  const response = await fetch("http://localhost:3000/api/users");

  const users: User[] = await response.json();
  // Return the data as props
  return {
    props: {
      data: users,
    },
  };
};
