const copyToClipboard = async (text: string) => {
  if ('clipboard' in navigator) return await navigator.clipboard.writeText(text)
  // Support for IE
  return document.execCommand('copy', true, text)
}

export { copyToClipboard }
