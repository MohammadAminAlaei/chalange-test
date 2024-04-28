export default function useInputById(id: string): string | undefined {
  const input = document.getElementById(id) as HTMLInputElement;

  if (input) return input.value;
}
