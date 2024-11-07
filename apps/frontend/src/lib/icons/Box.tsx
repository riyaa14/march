export const Box = (): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 1H5C2.79086 1 1 2.79086 1 5V15C1 17.2091 2.79086 19 5 19H15C17.2091 19 19 17.2091 19 15V5C19 2.79086 17.2091 1 15 1Z"
        stroke="#EDEDED"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export const CheckedBox = (): JSX.Element => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.1">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H2ZM13.95 6.796C14.1376 6.60849 14.2431 6.35412 14.2432 6.08885C14.2433 5.82358 14.138 5.56914 13.9505 5.3815C13.763 5.19386 13.5086 5.08839 13.2434 5.0883C12.9781 5.0882 12.7236 5.19349 12.536 5.381L9.707 8.21C8.53561 9.38139 6.6364 9.3814 5.465 8.21C5.37216 8.11709 5.26192 8.04338 5.14059 7.99307C5.01926 7.94276 4.8892 7.91684 4.75785 7.9168C4.49258 7.9167 4.23814 8.02199 4.0505 8.2095C3.86286 8.39701 3.75739 8.65138 3.7573 8.91665C3.7572 9.18192 3.86249 9.43636 4.05 9.624L6.808 12.382C6.91015 12.4842 7.03144 12.5653 7.16493 12.6206C7.29842 12.6759 7.4415 12.7044 7.586 12.7044C7.7305 12.7044 7.87358 12.6759 8.00707 12.6206C8.14056 12.5653 8.26185 12.4842 8.364 12.382L13.95 6.796Z"
          fill="#EDEDED"
        />
      </g>
    </svg>
  )
}
