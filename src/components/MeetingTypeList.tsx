"use client";
import React, { useState } from "react";
import Image from "next/image";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

function MeetingTypeList() {
  const router = useRouter();
  const [meetingState, setmeetingState] = useState<
    "idScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();

  function createMeeting() {}
  return (
    <section className="grid place-items-center grid-col-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleclick={() => {
          setmeetingState("isJoiningMeeting");
        }}
        className="bg-orange-1"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        handleclick={() => {
          setmeetingState("idScheduleMeeting");
        }}
        className="bg-blue-1"
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your past meetings"
        handleclick={() => router.push("/recordings")}
        className="bg-purple-1"
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        handleclick={() => setmeetingState("isJoiningMeeting")}
        className="bg-yellow-1"
      />
      <MeetingModal
        isOpen={meetingState !== "isInstantMeeting"}
        onClose={() => setmeetingState(undefined)}
        title="Start an instant meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
}
export default MeetingTypeList;
