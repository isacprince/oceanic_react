export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Não esqueça desse campo."
  if (!re.test(email)) return 'Coloque um email válido.'
  return ''
}