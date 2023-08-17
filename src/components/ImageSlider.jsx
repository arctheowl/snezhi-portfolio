'use client'

import { Carousel, IconButton } from '@material-tailwind/react'
import ImageModal from './Modal'

export default function CarouselCustomNavigation(Props) {
  return (
    <>
      <h1 className="text-center text-4xl pt-24">{Props.title}</h1>
      <div className="mx-auto flex h-[40rem] w-1/2 ">
        <Carousel
          autoplay={true}
          style={{
            base: {
              carousel: {
                position: 'relative',
                width: 'w-full',
                height: 'h-full',
                overflowX: '',
                display: 'flex',
              },

              slide: {
                width: 'w-full',
                height: 'h-full',
                display: 'inline-block',
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
              <div key={image} className="mx-[35%]">
                <ImageModal image={image} title={`${image}`} />
              </div>
            )
          })}
        </Carousel>
      </div>
    </>
  )
}

const theme = {
  carousel: {
    // defaultProps: {
    //   prevArrow: ({ loop, handlePrev, firstIndex }) => {
    //     return (
    //       <button
    //         onClick={handlePrev}
    //         disabled={!loop && firstIndex}
    //         className="!absolute left-4 top-2/4 grid h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //       >
    //         <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
    //       </button>
    //     )
    //   },
    //   nextArrow: ({ loop, handleNext, lastIndex }) => (
    //     <button
    //       onClick={handleNext}
    //       disabled={!loop && lastIndex}
    //       className="!absolute right-4 top-2/4 grid h-12 max-h-[48px] w-12 max-w-[48px] -translate-y-2/4 select-none place-items-center rounded-full text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //     >
    //       <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
    //     </button>
    //   ),
    //   navigation: ({ setActiveIndex, activeIndex, length }) => (
    //     <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
    //       {new Array(length).fill('').map((_, i) => (
    //         <span
    //           key={i}
    //           className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
    //             activeIndex === i ? 'bg-white' : 'bg-white/50'
    //           }`}
    //           onClick={() => setActiveIndex(i)}
    //         />
    //       ))}
    //     </div>
    //   ),
    autoplay: false,
    autoplayDelay: 5000,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
    loop: false,
    className: '',
  },
  styles: {
    base: {
      carousel: {
        position: 'relative',
        width: 'w-full',
        height: 'h-full',
        overflowX: 'overflow-x-hidden',
        display: 'flex',
      },

      slide: {
        width: 'w-full',
        height: 'h-full',
        display: 'inline-block',
        flex: 'flex-none',
      },
    },
  },
}
