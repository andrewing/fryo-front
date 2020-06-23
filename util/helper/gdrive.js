export const processLinkGdrive = link => {
  const regex = /https:\/\/drive.google.com\/file\/d\/(.*)\/view\?usp=sharing/
  return `https://drive.google.com/uc?export=view&id=${link?.match(regex)[1]}`
}