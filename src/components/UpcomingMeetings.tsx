"use client";
import { useGetCalls } from "@/hooks/useGetCalls";

export default function UpcomingMeetings() {
  const { upcomingCalls } = useGetCalls();
  const length = upcomingCalls?.length;
  return (
    <span className="glassmorphism  rounded py-2 px-2 text-center font-normal">
      You have {length}{" "}
      {length ? (length > 1 ? "upcoming meetings" : "upcoming meeting") : ""}{" "}
      today
    </span>
  );
}
