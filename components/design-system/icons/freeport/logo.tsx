const LogoMark = ({ className = 'h-6 w-6' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="256"
      // height="256"
      className={className}
      viewBox="0 0 256 256"
    >
      <g fill="none" fillRule="evenodd">
        <circle
          cx="128"
          cy="128"
          r="120"
          stroke="currentColor"
          strokeWidth="16"
        />
        <rect
          width="146"
          height="28"
          x="55"
          y="97"
          fill="currentColor"
          rx="14"
        />
        <rect
          width="78"
          height="28"
          x="55"
          y="133"
          fill="currentColor"
          rx="14"
        />
      </g>
    </svg>
  )
}

const LogoType = ({ className }: { className?: string }) => {
  return (
    <svg
      width="84"
      height="30"
      viewBox="0 0 84 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.84 13.68H5V22H1.58V13.68H0.339996V10.84H1.58V10.52C1.58 9.14667 1.97333 8.10667 2.76 7.40001C3.54666 6.68001 4.7 6.32001 6.22 6.32001C6.47333 6.32001 6.66 6.32667 6.78 6.34001V9.24001C6.12666 9.20001 5.66666 9.29334 5.4 9.52001C5.13333 9.74667 5 10.1533 5 10.74V10.84H6.84V13.68Z"
        fill="currentColor"
      />
      <path
        d="M11.867 12.7C12.267 12.0867 12.767 11.6067 13.367 11.26C13.967 10.9 14.6337 10.72 15.367 10.72V14.34H14.427C13.5737 14.34 12.9337 14.5267 12.507 14.9C12.0804 15.26 11.867 15.9 11.867 16.82V22H8.44703V10.84H11.867V12.7Z"
        fill="currentColor"
      />
      <path
        d="M27.5217 16.24C27.5217 16.56 27.5017 16.8933 27.4617 17.24H19.7217C19.775 17.9333 19.995 18.4667 20.3817 18.84C20.7817 19.2 21.2684 19.38 21.8417 19.38C22.695 19.38 23.2884 19.02 23.6217 18.3H27.2617C27.075 19.0333 26.735 19.6933 26.2417 20.28C25.7617 20.8667 25.155 21.3267 24.4217 21.66C23.6884 21.9933 22.8684 22.16 21.9617 22.16C20.8684 22.16 19.895 21.9267 19.0417 21.46C18.1884 20.9933 17.5217 20.3267 17.0417 19.46C16.5617 18.5933 16.3217 17.58 16.3217 16.42C16.3217 15.26 16.555 14.2467 17.0217 13.38C17.5017 12.5133 18.1684 11.8467 19.0217 11.38C19.875 10.9133 20.855 10.68 21.9617 10.68C23.0417 10.68 24.0017 10.9067 24.8417 11.36C25.6817 11.8133 26.335 12.46 26.8017 13.3C27.2817 14.14 27.5217 15.12 27.5217 16.24ZM24.0217 15.34C24.0217 14.7533 23.8217 14.2867 23.4217 13.94C23.0217 13.5933 22.5217 13.42 21.9217 13.42C21.3484 13.42 20.8617 13.5867 20.4617 13.92C20.075 14.2533 19.835 14.7267 19.7417 15.34H24.0217Z"
        fill="currentColor"
      />
      <path
        d="M39.8459 16.24C39.8459 16.56 39.8259 16.8933 39.7859 17.24H32.0459C32.0993 17.9333 32.3193 18.4667 32.7059 18.84C33.1059 19.2 33.5926 19.38 34.1659 19.38C35.0193 19.38 35.6126 19.02 35.9459 18.3H39.5859C39.3993 19.0333 39.0593 19.6933 38.5659 20.28C38.0859 20.8667 37.4793 21.3267 36.7459 21.66C36.0126 21.9933 35.1926 22.16 34.2859 22.16C33.1926 22.16 32.2193 21.9267 31.3659 21.46C30.5126 20.9933 29.8459 20.3267 29.3659 19.46C28.8859 18.5933 28.6459 17.58 28.6459 16.42C28.6459 15.26 28.8793 14.2467 29.3459 13.38C29.8259 12.5133 30.4926 11.8467 31.3459 11.38C32.1993 10.9133 33.1793 10.68 34.2859 10.68C35.3659 10.68 36.3259 10.9067 37.1659 11.36C38.0059 11.8133 38.6593 12.46 39.1259 13.3C39.6059 14.14 39.8459 15.12 39.8459 16.24ZM36.3459 15.34C36.3459 14.7533 36.1459 14.2867 35.7459 13.94C35.3459 13.5933 34.8459 13.42 34.2459 13.42C33.6726 13.42 33.1859 13.5867 32.7859 13.92C32.3993 14.2533 32.1593 14.7267 32.0659 15.34H36.3459Z"
        fill="currentColor"
      />
      <path
        d="M45.0702 12.42C45.4035 11.9 45.8635 11.48 46.4502 11.16C47.0368 10.84 47.7235 10.68 48.5102 10.68C49.4302 10.68 50.2635 10.9133 51.0102 11.38C51.7568 11.8467 52.3435 12.5133 52.7702 13.38C53.2102 14.2467 53.4302 15.2533 53.4302 16.4C53.4302 17.5467 53.2102 18.56 52.7702 19.44C52.3435 20.3067 51.7568 20.98 51.0102 21.46C50.2635 21.9267 49.4302 22.16 48.5102 22.16C47.7368 22.16 47.0502 22 46.4502 21.68C45.8635 21.36 45.4035 20.9467 45.0702 20.44V27.32H41.6502V10.84H45.0702V12.42ZM49.9502 16.4C49.9502 15.5467 49.7102 14.88 49.2302 14.4C48.7635 13.9067 48.1835 13.66 47.4902 13.66C46.8102 13.66 46.2302 13.9067 45.7502 14.4C45.2835 14.8933 45.0502 15.5667 45.0502 16.42C45.0502 17.2733 45.2835 17.9467 45.7502 18.44C46.2302 18.9333 46.8102 19.18 47.4902 19.18C48.1702 19.18 48.7502 18.9333 49.2302 18.44C49.7102 17.9333 49.9502 17.2533 49.9502 16.4Z"
        fill="currentColor"
      />
      <path
        d="M60.3044 22.16C59.211 22.16 58.2244 21.9267 57.3444 21.46C56.4777 20.9933 55.791 20.3267 55.2844 19.46C54.791 18.5933 54.5444 17.58 54.5444 16.42C54.5444 15.2733 54.7977 14.2667 55.3044 13.4C55.811 12.52 56.5044 11.8467 57.3844 11.38C58.2644 10.9133 59.251 10.68 60.3444 10.68C61.4377 10.68 62.4244 10.9133 63.3044 11.38C64.1844 11.8467 64.8777 12.52 65.3844 13.4C65.891 14.2667 66.1444 15.2733 66.1444 16.42C66.1444 17.5667 65.8844 18.58 65.3644 19.46C64.8577 20.3267 64.1577 20.9933 63.2644 21.46C62.3844 21.9267 61.3977 22.16 60.3044 22.16ZM60.3044 19.2C60.9577 19.2 61.511 18.96 61.9644 18.48C62.431 18 62.6644 17.3133 62.6644 16.42C62.6644 15.5267 62.4377 14.84 61.9844 14.36C61.5444 13.88 60.9977 13.64 60.3444 13.64C59.6777 13.64 59.1244 13.88 58.6844 14.36C58.2444 14.8267 58.0244 15.5133 58.0244 16.42C58.0244 17.3133 58.2377 18 58.6644 18.48C59.1044 18.96 59.651 19.2 60.3044 19.2Z"
        fill="currentColor"
      />
      <path
        d="M71.3788 12.7C71.7788 12.0867 72.2788 11.6067 72.8788 11.26C73.4788 10.9 74.1454 10.72 74.8788 10.72V14.34H73.9388C73.0854 14.34 72.4454 14.5267 72.0188 14.9C71.5921 15.26 71.3788 15.9 71.3788 16.82V22H67.9587V10.84H71.3788V12.7Z"
        fill="currentColor"
      />
      <path
        d="M82.7334 19.1V22H80.9934C79.7534 22 78.7868 21.7 78.0934 21.1C77.4001 20.4867 77.0534 19.4933 77.0534 18.12V13.68H75.6934V10.84H77.0534V8.12001H80.4734V10.84H82.7134V13.68H80.4734V18.16C80.4734 18.4933 80.5534 18.7333 80.7134 18.88C80.8734 19.0267 81.1401 19.1 81.5134 19.1H82.7334Z"
        fill="currentColor"
      />
    </svg>
  )
}

type FreeportLogoProps = {
  className?: string
  typeClassName?: string
  variant?: 'logo-mark' | 'logo-type'
}

const FreeportLogo = ({
  className = 'w-6 h-6',
  typeClassName,
  variant = 'logo-mark',
}: FreeportLogoProps) => {
  if (variant === 'logo-mark') return <LogoMark className={className} />
  return (
    <div className="flex flex-row items-center gap-x-2">
      <LogoMark className={className} />
      <LogoType className={typeClassName} />
    </div>
  )
}

export { FreeportLogo }
