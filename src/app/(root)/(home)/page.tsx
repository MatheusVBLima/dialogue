import MeetingTypeList from "@/components/MeetingTypeList";
import UpcomingMeetings from "@/components/UpcomingMeetings";
import WelcomeUser from "@/components/WelcomeUser";

function Home() {
  const now = new Date();
  const time = now.toLocaleTimeString("pt-BR", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const date = new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
  }).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full px-4 flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <WelcomeUser />
          <div>
            <UpcomingMeetings />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-4xl font-extrabold lg:text-7xl lg:ml-0">
              {time}
            </h3>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl lg:ml-0">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}

export default Home;
