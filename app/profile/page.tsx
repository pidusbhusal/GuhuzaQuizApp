
import React from "react";
import QuizLevelSections from "../components/quizLevelSections";
import LeaderBoard from "../components/leaderBoard";
import ProfileHerosection from "../components/profileHerosection";
import LeaderBoardSection from "../components/leaderBoardSection";
import { auth } from "@/auth";
import fetchUser from "@/utils/fUser";
import LoginButton from "../components/buttons/loginBtn";





async function  Profile() {
  const session = await auth();
  if(session) { 
    const user = session?.user;
    const name = user?.firstName == null ? "Anonymous" :user?.firstName 

    const player = await fetchUser(
      Number(user?.memberId),
      name,
      user?.email || ""
    );
    const playerLevel = player?.Level_Id ?? 1;
    return (
      <div className="p-6 min-h-screen">
    
        <ProfileHerosection  player = {player} />
         <div className="mt-12">
          <QuizLevelSections playerLevel={playerLevel}/>
        </div>
        {/* Leaderboard Section */}
  
        <div className=" mt-12 container">
          {/* <LeaderBoard  /> */}
          <LeaderBoardSection/>
        </div>
      </div>
    );
  } return (
      <div className="flex h-full">
        <div className="px-8 my-32 rounded py-8 border-2 mx-auto w-fit bg-white">
          <div className="">
            <h1 className="title mb-5 w-32">Log in Required</h1>
            <p>
             You  have to login in order to acess this page
            </p>
  
            <div>
              <div className="mt-5 w-full">
                <LoginButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
 
}

export default Profile;
