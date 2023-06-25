import { useEffect } from "react";
import { User } from "@prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { useAccount } from "wagmi";

const Dashboard = ({ data: users }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { address, isConnected } = useAccount();
  const { data: sessionData } = useSession();

  useEffect(() => {
    sessionData && console.log(sessionData);
  }, [sessionData]);

  useEffect(() => {
    users && console.log(users);
  }, [users]);

  return (
    <div className="container pt-12 min-h-[calc(100vh-56px)] text-center">
      <h2 className="text-4xl font-medium">Dashboard</h2>
      {address && <p>Connected address: {address}</p>}
      {isConnected ? <p>User is connected</p> : <p>No wallet connected :(</p>}
      {sessionData && sessionData.user.id}
    </div>
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
