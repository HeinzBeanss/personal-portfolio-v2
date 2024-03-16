import beebuddiesmain from "../assets/projects/beebuddies/beebuddiesmain.webm";
import beebuddiesmobile from "../assets/projects/beebuddies/beebuddiesmobile.png";
import beebuddieslogin from "../assets/projects/beebuddies/beebuddieslogin.png";
import star from "../assets/star.svg";

const ProjectBeeBuddies = () => {
  return (
    <div className="relative mt-24 flex w-full gap-10 parallax-wrap">
      <div className="flex flex-col w-[40%] justify-center pt-12">
        <h3 className="text-lightest/90 text-left text-sm font-light  tracking-widest mb-5">
          <a href="https://www.beebuddies.co.uk">
            BeeBuddies
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-external-link inline ml-1 mb-0.5"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </h3>

        <h3 className="text-lightest/90 text-left text-2xl font-light leading-6 tracking-widest mb-5">
          A buzzing social media app.
        </h3>

        <p className="font-thin text-base text-left">
          BeeBuddies is a social media platform crafted with a unique front-end
          client built on React, complemented by a back-end API that is curated
          through RESTful practices. This dynamic combination utilizes NodeJS
          and Express, coupled with MongoDB for database storage.
        </p>

        <p className="font-thin text-base text-left mt-5">
          Feel free to log in as a guest and have a look around.
        </p>

        <div className="mt-10 flex gap-6 justify-end pr-6">
          <svg viewBox="0 0 128 128" className="w-10 rounded-lg">
            <path
              fill="url(#a)"
              d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
            ></path>
            <path
              fill="url(#b)"
              d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"
            ></path>
            <path
              fill="url(#c)"
              d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"
            ></path>
            <defs>
              <linearGradient
                id="a"
                x1="34.513"
                x2="27.157"
                y1="15.535"
                y2="30.448"
                gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E4faff"></stop>
                <stop offset=".33" stopColor="#E4faff"></stop>
                <stop offset=".637" stopColor="#E4faff"></stop>
                <stop offset=".934" stopColor="#E4faff"></stop>
                <stop offset="1" stopColor="#E4faff"></stop>
              </linearGradient>
              <linearGradient
                id="b"
                x1="30.009"
                x2="50.533"
                y1="23.359"
                y2="8.288"
                gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".138" stopColor="#E4faff"></stop>
                <stop offset=".402" stopColor="#E4faff"></stop>
                <stop offset=".713" stopColor="#E4faff"></stop>
                <stop offset=".908" stopColor="#E4faff"></stop>
              </linearGradient>
              <linearGradient
                id="c"
                x1="21.917"
                x2="40.555"
                y1="22.261"
                y2="22.261"
                gradientTransform="translate(-129.242 -73.715) scale(6.18523)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".092" stopColor="#E4faff"></stop>
                <stop offset=".287" stopColor="#E4faff"></stop>
                <stop offset=".598" stopColor="#E4faff"></stop>
                <stop offset=".862" stopColor="#E4faff"></stop>
              </linearGradient>
            </defs>
          </svg>

          <svg viewBox="0 0 128 128" className="w-10">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#EAfaff"
              d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"
            ></path>
          </svg>

          <svg viewBox="0 0 128 128" className="w-12 rounded-lg">
            <g fill="#EAfaff">
              <circle cx="64" cy="64" r="11.4"></circle>
              <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="w-[600px] h-96 relative">
        <div className="absolute right-0 top-1/4 z-20 h-56 max-w-[60%]">
          <video
            autoPlay
            muted
            loop
            src={beebuddiesmain}
            alt="BeeBuddies Website"
            className="rounded-lg object-cover object-center h-full w-full drop-shadow-images shadow-images"
            type="video/webm"
          />
        </div>
        <div className="absolute z-10 h-52 max-w-[50%]">
          <img
            src={beebuddieslogin}
            alt="beebuddies login screen"
            className="rounded-lg object-cover object-center h-full w-full drop-shadow-images shadow-images"
          />
        </div>
        <div className="absolute z-30 w-[30%] h-80 left-8 top-44">
          <img
            src={beebuddiesmobile}
            alt="beebuddies mobile screen"
            className="rounded-lg object-cover object-bottom w-full h-full drop-shadow-images shadow-images"
          />
        </div>
      </div>
      <img
        src={star}
        alt="star"
        className="star-parallax absolute -top-72 -left-96 max-w-10"
        value="-2"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-24 -left-48 opacity-60"
        value="4"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 bottom-80 -right-40 opacity-80"
        value="4"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 -top-40 -right-72 opacity-80"
        value="6"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-48 -inset-x-1/3 opacity-40"
        value="-3"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-60 right-32 opacity-80"
        value="-5"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-1/2 -right-80 opacity-80"
        value="-2"
      />
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 top-32 right-1/3 opacity-50"
        value="3"
      />{" "}
      <img
        src={star}
        alt="star"
        className="star-parallax absolute max-w-10 -top-48 left-48 opacity-80"
        value="-2"
      />
    </div>
  );
};

export default ProjectBeeBuddies;
