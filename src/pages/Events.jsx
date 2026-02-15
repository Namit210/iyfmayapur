export default function Events() {
  return (
    <div className="py-15 px-2">
      <h1 className="text-7xl font-bold mb-4 text-center">Events Page</h1>
      <p className="text-lg text-center text-black bg-black/20 p-4 rounded-lg">
        Welcome to the Events page. Here you can find information about our upcoming events and activities.
      </p>

    <div className="mt-10">
      <div className="flex justify-center px-4">
        <div className="flex w-[50%] bg-[rgb(210,255,128)] p-2 items-center justify-center text-2xl">
          Anubhava Youth Festival 2025
        </div>
        <div className="w-[50%] bg-[url('/anubhava.jpg')] h-[70vh] bg-cover bg-center" />
      </div>

      <div className="flex justify-center px-4">
        <div className="w-[50%] bg-[url('/LifestyleManagement.jpeg')] h-[70vh] bg-cover bg-[50%_70%]" />
        <div className="flex w-[50%] bg-black/20 p-2 items-center justify-center text-2xl">
          Seminar On Lifestyle Manangement
        </div>
      </div>

      <div className="flex justify-center px-4">
        <div className="flex w-[50%] bg-[rgb(210,255,128)] p-2 items-center justify-center text-2xl">
          Summer Camp 2025
        </div>
        <div className="w-[50%] bg-[url('/mayapurSummerCamp.png')] h-[50vh] bg-cover bg-center" />
      </div>

      <div className="flex justify-center px-4">
        <div className="w-[50%] bg-[url('/Kurukshetra.jpeg')] h-[70vh] bg-cover bg-[50%_40%]" />
        <div className="flex w-[50%] bg-black/20 p-2 items-center justify-center text-2xl">
          Kurukshetra alumini yatra 2025
        </div>
      </div>
      </div>
    </div>
  )
}