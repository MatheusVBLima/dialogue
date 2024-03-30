import MeetingTypeList from "@/components/MeetingTypeList";

function page() {
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
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h1 className="glassmorphism max-w-[270px] rounded py-2 text-center font-normal">
            Upcoming Meeting at: 12:30 PM
          </h1>
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-extrabold lg:text-7xl">{time}</h2>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
}

export default page;