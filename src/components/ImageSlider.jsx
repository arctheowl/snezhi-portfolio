'use client'

import { Carousel, IconButton } from '@material-tailwind/react'
import ImageModal from './Modal'

export default function CarouselCustomNavigation(Props) {
  return (
    <>
      <h1 className="pt-24 text-center text-4xl">{Props.title}</h1>
      <div className="mx-auto flex h-[40rem] w-1/2 ">
        <Carousel
          // autoplay={true}
          loop={true}
          transition={{
            type: 'tween',
            duration: 0.5,
          }}
          style={{
            base: {
              carousel: {
                position: 'relative',
                width: 'w-full',
                height: 'h-full',
                overflowX: 'overflow-hidden',
                display: 'flex',
              },

              slide: {
                width: 'w-full',
                height: 'h-full',
                display: '',
                flex: 'flex-row',
              },
            },
          }}
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute left-4 top-2/4 -translate-y-2/4 text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute !right-4 top-2/4 -translate-y-2/4 text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          className="rounded-xl "
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill('').map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? 'w-8 bg-blue-800' : 'w-3 bg-gray-400'
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {Props.CarouselImages?.map((image) => {
            return (
              <div key={image} className="bg-white h-[40rem] w-[50rem] relative mx-auto">
                <ImageModal image={image} title={`${image}`} />
              </div>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}
