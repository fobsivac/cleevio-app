import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
  
  body {
    height: 100vh;
  }
  
  // react-datepicker
  .react-datepicker {
    border: 1px solid ${colors.gray2};
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.05);
    
    animation: 0.2s fade-in ease-in-out;
  }
  
  .react-datepicker-popper {
    margin-top: 0;
  }

  .react-datepicker__triangle {
    display: none;
  }
  
  .react-datepicker-wrapper {
    width: 100%;
  }
  
  .react-datepicker__navigation {
    top: 1.1rem;
  }
  
  .react-datepicker__header {
    background-color: ${colors.white};
    border: none;
  }
  
  .react-datepicker__day-names {
    margin: 0.4rem 0;
  }
  
  .react-datepicker__day  {
    color: ${colors.gray6};
    margin: 0.25rem 0.5rem;
  }

  .react-datepicker__day-name {
    color: ${colors.gray3};
    margin: 0.5rem 0.5rem 0.25rem 0.5rem;
  }
  
  .react-datepicker__current-month {
    margin: 0.4rem 0;
    color: ${colors.gray6};
    font-weight: 400;
  }

  .react-datepicker__day--today {
    background-color: ${colors.secondaryDark};
  }

  .react-datepicker__day--keyboard-selected {
    color: ${colors.white};
    background-color: ${colors.gray5};
    
    &:hover {
      background-color: ${colors.gray6};
    }
  }
  
  .react-datepicker__day--selected {
    color: ${colors.white};
    background-color: ${colors.black}; 
    
    &:hover {
      background-color: ${colors.gray7};
    }
  }
  
  @keyframes fade-in {
    0%{
      transform: translateY(-1rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
