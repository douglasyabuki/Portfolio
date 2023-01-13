  // Function to smoothly scroll into the selected link
  export const scrollOnClick = (link: string) => {
    const element = document.getElementById(link);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };
