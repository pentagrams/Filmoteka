export default function SvgGenerator({ id, className }) {
  switch (id) {
    case 'logo':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.82 2H4.18C2.97602 2 2 2.97602 2 4.18V19.82C2 21.024 2.97602 22 4.18 22H19.82C21.024 22 22 21.024 22 19.82V4.18C22 2.97602 21.024 2 19.82 2Z"
            stroke="#818181"
          />
          <path d="M7 2V22" stroke="#818181" />
          <path d="M17 2V22" stroke="#818181" />
          <path d="M2 12H22" stroke="#818181" />
          <path d="M2 7H7" stroke="#818181" />
          <path d="M2 17H7" stroke="#818181" />
          <path d="M17 17H22" stroke="#818181" />
          <path d="M17 7H22" stroke="#818181" />
        </svg>
      );
    case 'close':
      return (
        <svg
          className={className}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 8L22 22" stroke="black" />
          <path d="M8 22L22 8" stroke="black" />
        </svg>
      );
    case 'search':
      return (
        <svg
          className={className}
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 9.5C7.70914 9.5 9.5 7.70914 9.5 5.5C9.5 3.29086 7.70914 1.5 5.5 1.5C3.29086 1.5 1.5 3.29086 1.5 5.5C1.5 7.70914 3.29086 9.5 5.5 9.5Z"
            stroke="white"
          />
          <path d="M10.5 10.5002L8.32495 8.3252" stroke="white" />
        </svg>
      );
  }
}
