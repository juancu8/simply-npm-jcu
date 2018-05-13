
const expect = require('chai').expect
const trans = require('..').default

describe('#words', function(){
  it(' The word ends in ar eliminates ar', function(){
    const translation = trans("Programar")
    expect(translation).to.equal("Program")
  })
  it('The word starts with z is added pe at the end', function(){
    const translation = trans("Zorro")
    expect(translation).to.equal("Zorrope")
  })
  it('The word has 10 or more letters it is split in half and joined with a -', function(){
    const translation = trans("Abecedario")
    expect(translation).to.equal("Abece-dario")
  })
  it('The word is a palindrome, no account and the same word is returned interspersing uppercase and lowercase', function(){
    const translation = trans("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
})
