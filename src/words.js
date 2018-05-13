
export default function trans(str){
  let translation = str

  // "ar"
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2) 
  }

  // start z
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  //  10 words-
  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length/2))
    const secondHalf = translation.slice(Math.round(length/2))
    translation = `${firstHalf}-${secondHalf}`
  }

  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  // palindrome
  if (str == reverse(str)) {
    return minMay(str)
  }

  return translation
}
