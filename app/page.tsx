import Bookings from "@/components/Bookings/Bookings";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="">
          <Bookings />
        </div>
        <div className="col-span-2 bg-orange-400">Map</div>
      </div>
    </div>
  );
}
