class Formatter {
  static capitalize(word){
    return word.charAt(0).toUpperCase()+word.slice(1)
  }

  static sanitize(sentence){
    return sentence.replace(/[^\w\-' ]/g,'')
  }

  static titleize(sentence){
    const exception = {
      the: "the",
      a: "a",
      an: "an",
      but: "but",
      of: "of",
      and: "and",
      for: "for",
      at: "at",
      by: "by", 
      and: "and", 
      from: "from"
    } 
    sentence = sentence[0].toUpperCase()+sentence.slice(1)
     return sentence.split(" ").map(word =>{
      return exception[word]  ? word :  word.charAt(0).toUpperCase()+word.slice(1)
    }).join(" ")
  }
    
    
    
   //another way of doing the same thing     
    /*let finalArray = []
    let newSentence = sentence.split(" ")
    const word = newSentence.shift()
    let endOfArray = newSentence.slice(0)
    let firstWord = word.charAt(0).toUpperCase()+word.slice(1)
      finalArray.push(firstWord)
      const exception = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    endOfArray.forEach(word => {
      if(exception.includes(word)){
        finalArray.push(word)
      }
      else{
        const string = word.charAt(0).toUpperCase()+word.slice(1)
        finalArray.push(string)
      }
    })
  return finalArray.join(" ")
  }*/
}
