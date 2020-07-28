interface ReturnType {
  PORT: number;
}

export default function(): ReturnType {
  return {
    PORT: parseInt(process.env.PORT) || 5000,
  };
}
