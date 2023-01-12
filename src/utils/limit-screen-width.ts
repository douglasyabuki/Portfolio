const limit = 1024;

export const limitScreenWidth = ():boolean => {
  let screenWidth = screen.width;
  return screenWidth < limit ?  true : false;
}
