import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Play } from 'lucide-react';

const slides = [
  {
    type: "video",
    source: "/night-to-day-time-lapse-of-sunrise-at-singapore-2023-11-27-05-29-48-utc.mp4",
    alt: "Student learning",
    title: "Learn at Your Own Pace",
    description: "Flexible learning schedules designed around your life"
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    alt: "Group study",
    title: "Collaborative Learning",
    description: "Join a community of passionate learners"
  },
  {
    type: "image",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    alt: "Student with laptop",
    title: "Modern Education",
    description: "Access cutting-edge learning resources"
  }
];

const Banner = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);

  const toggleVideo = (videoElement: HTMLVideoElement) => {
    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying(true);
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="hero-banner relative bg-[#f8f9ff] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content - Centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2d2d5f]">
            Brightening The <span className="text-[#ff6b6b]">Journey</span>
            <br />to Success Ahead
          </h1>
          <p className="mt-6 text-gray-600">
            Where students are encouraged to reach their full potential through rigorous coursework,
            innovative research, and a supportive learning environment.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Key Statistics Column - 3 columns */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-xl font-semibold text-[#2d2d5f] mb-6">Key statistics</h2>
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Total courses</div>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <div className="text-4xl font-bold text-green-600">115</div>
              <div className="text-gray-600">Expert tutors</div>
            </div>
          </div>

          {/* Center Column - Swiper - 6 columns */}
          <div className="md:col-span-6 w-full max-w-2xl mx-auto">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              cardsEffect={{
                perSlideOffset: 8,
                perSlideRotate: 2,
                rotate: true,
                slideShadows: false,
              }}
              className="w-full swiper-cards"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl transition-all duration-300">
                    {slide.type === 'video' ? (
                      <>
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                          id="bannerVideo"
                        >
                          <source src={slide.source} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <button
                          onClick={() => {
                            const video = document.getElementById('bannerVideo') as HTMLVideoElement;
                            toggleVideo(video);
                          }}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 
                                     bg-black/50 hover:bg-black/70 text-white w-16 h-16 rounded-full
                                     flex items-center justify-center transition-all duration-300"
                        >
                          {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z" />
                            </svg>
                          )}
                        </button>
                      </>
                    ) : (
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                        <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
                          {slide.title}
                        </h3>
                        <p className="text-base text-gray-100 max-w-[280px] mx-auto drop-shadow-lg">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Ratings Column - 3 columns */}
          <div className="md:col-span-3 text-end space-y-6">
            <div className="flex justify-end -space-x-2">
              <img src="public/avatar1.png" alt="Student" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="public/avatar2.png" alt="Student" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="public/avatar3.png" alt="Student" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="public/avatar4.png" alt="Student" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <div className="flex justify-end">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div>
              <p className="text-lg font-semibold">Rated 5 out of 5</p>
              <p className="text-gray-600">by 15,000+ students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;