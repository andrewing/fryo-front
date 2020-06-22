export const processLinkGdrive = link => {
  const regex = /(?<=https:\/\/drive.google.com\/file\/d\/\s*).*(?=\s*\/.*)/g
  return `https://drive.google.com/uc?export=view&id=${link.match(regex)}`
}