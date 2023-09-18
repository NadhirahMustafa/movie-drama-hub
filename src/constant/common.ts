export const windowHeight = window.innerHeight;
export const documentHeight = document.documentElement.scrollHeight;
export const scrollTop = window.scrollY;
export const tempArrayFilter = (
  item: any,
  index: any,
  array: string | any[]
) => {
  return array.indexOf(item) === index;
};
export const uniqueArrayFilter = (value: any, index: any, self: any[]) =>
  self.findIndex((item) => item.id === value.id) === index;
