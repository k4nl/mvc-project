export default function (status: number, message: string) {
  const error = new Error(message);
  return {...error, status };
};