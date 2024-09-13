export function passwordValidator(password) {
  if (!password) return "Não esqueça desse campo."
  if (password.length < 8) return 'A senha precisa ter pelo menos 8 caracteres.'
  return ''
}
