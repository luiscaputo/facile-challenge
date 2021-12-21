export const encript = (name: string) => {
  return Buffer.from(name).toString("base64");
};

export const decript = (name: string) => {
  return Buffer.from(name, "base64").toString("utf-8");
};
