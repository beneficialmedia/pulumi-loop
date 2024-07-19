import SurveyForm from "./reviews/SurveyForm";

export default function Home() {
  return (
    <div>
      <header className="h-40 sm:h-64 bg-gradient-to-b from-purple-600 via-purple-500 to-purple-400 py-10 sm:py-20 text-center relative">
        <h3 className="font-bold text-3xl bg-gradient-to-r from-white to-purple-200 inline-block text-transparent bg-clip-text">
          Rate Craig
        </h3>
        <div className="h-32 w-32 sm:h-48 sm:w-48 m-auto absolute inset-x-0 top-[100px] sm:top-[150px]">
          <img
            src="https://raw.githubusercontent.com/beneficialmedia/assets/main/SteamboatWillie.png"
            className="rounded-full shadow-2xl"
            alt="Craig"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
          />
        </div>
      </header>

      <main className="mt-24 sm:mt-32 rounded shadow mx-auto w-full w-10/12 lg:w-8/12 xl:w-6/12">
        <SurveyForm />
      </main>
    </div>
  );
}
