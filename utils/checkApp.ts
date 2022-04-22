const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME;

export const isCDL = () => APP_NAME.toLowerCase() === "cdl";