export default function BirthdaySite() {
  const photos = [
    "/Cat mommy.jpg",
    "/photo_4.jpg",
    "/photo_5.jpg",
    "/photo_7.jpg",
    "/photo_8.jpg",
    "/photo_10.jpg",
    "/photo_11.jpg",
    "/photo_12.jpg",
  ];

  const captions = [
    "Such a cutie you are",
    "MOMMMYYYYYY!!!!!!!!",
    "Gosh, those eyes, the most beautiful set of things I've ever seen",
    "Seeeeee, how gorgeous she isss",
    "Yum yummmmm",
    "Stop being so cuteeeeeeeee",
    "Aaaaaaaahhhhhhh",
    "My first glimpse of you",
  ];

  return (
    <>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatUp {
          0% { transform: translateY(100%); opacity: 0; }
          5% { opacity: 1; }
          100% { transform: translateY(-200%); opacity: 0; }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fade-in { animation: fade-in 1.5s ease-in-out forwards; }
        .hover-zoom { transition: transform 0.5s ease; }
        .hover-zoom:hover { transform: scale(1.05) rotate(1deg); }
        .bg-animated-gradient {
          background: linear-gradient(-45deg, #ffafcc, #ffc8dd, #fda4af, #fed7aa);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        .hearts-container {
          pointer-events: none;
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          overflow: hidden;
        }
        .heart {
          position: absolute;
          color: #ff5e6c;
          font-size: 2rem;
          animation: floatUp 10s linear infinite;
        }
        .heart:nth-child(1) { left: 20%; animation-delay: 0s; }
        .heart:nth-child(2) { left: 50%; animation-delay: 2s; }
        .heart:nth-child(3) { left: 80%; animation-delay: 4s; }
        .heart:nth-child(4) { left: 30%; animation-delay: 6s; }
        .heart:nth-child(5) { left: 70%; animation-delay: 8s; }
        .heart:nth-child(6) { left: 10%; animation-delay: 10s; }
        .heart:nth-child(7) { left: 60%; animation-delay: 12s; }
        .heart:nth-child(8) { left: 40%; animation-delay: 14s; }
        .heart:nth-child(9) { left: 25%; animation-delay: 16s; }
        .heart:nth-child(10) { left: 75%; animation-delay: 18s; }
      `}</style>

      {/* SOUND CLOUD EMBED */}
      <section className="mx-auto my-4" style={{ maxWidth: 400 }}>
        <iframe
          title="Love For You by lovelilori"
          width="0%"
          height="0"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lovelilori/love-for-you&color=%23ff0066&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
        ></iframe>
      </section>

      <div className="relative min-h-screen bg-animated-gradient flex flex-col items-center justify-center text-center px-4 py-8">
        {/* Floating Hearts */}
        <div className="hearts-container">
          {Array.from({ length: 10 }).map((_, i) => (
            <span className="heart" key={i}>
              ❤️
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="w-full max-w-2xl animate-fade-in space-y-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-900 mb-2">
              Happy Birthday, My Miracle
            </h1>
            <h2 className="text-xl sm:text-2xl text-pink-700">To Sally 💖</h2>
          </div>

          {/* Message */}
          <section className="bg-white bg-opacity-80 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-pink-800 mb-4">
              A Message for You
            </h3>
            <p className="text-gray-800 leading-relaxed text-left space-y-4">
              <span className="block">
                Helloo my loveee, I'm sorry for keeping you waiting,
              </span>
              <span className="block">
                I can’t believe how lucky I am to have you in my life. You’re
                everything I never knew I needed — fun, fearless, and absolutely
                mesmerizing.
              </span>
              <span className="block">
                Today’s your birthday, and I can’t help but think about how your
                smile, your vibe, and your heart make the world a brighter
                place.
              </span>
              <span className="block">
                Life with you is an adventure I never want to end. You drive me
                crazy in the best way, and I wouldn’t have it any other way.
              </span>
              <span className="block">
                Happy Birthday, beautiful. Here’s to more laughter, more kisses,
                and for our purest love. I love you sooooo much, I love you more
                than anythingggg
              </span>
              <span className="block mt-4">
                All my love,
                <br />
                Your Shavi
              </span>
            </p>
          </section>

          {/* You Are My... */}
          <section className="bg-white bg-opacity-80 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-pink-800 mb-4">
              You Are My...
            </h3>
            <ul className="list-inside text-gray-800 space-y-2 text-left">
              <li>...first thought in the morning and last dream at night.</li>
              <li>...favorite distraction and my sweetest addiction.</li>
              <li>...partner in crime for every wild idea.</li>
              <li>...my miracle.</li>
              <li>...my haunting beauty.</li>
              <li>...my world.</li>
              <li>...reason to believe in something bigger than myself.</li>
              <li>...my everything.</li>
            </ul>
          </section>

          {/* Gallery */}
          <section className="bg-white bg-opacity-80 rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-pink-800 mb-4">
              A small collage for my beautiful darlinggg
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((src, index) => (
                <div
                  key={index}
                  className="relative group hover-zoom rounded-lg overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Sally #${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-40 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs">{captions[index]}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="text-pink-900 mt-10">
            Made with mad love just for you, my soulmate
          </footer>
        </div>
      </div>
    </>
  );
}
