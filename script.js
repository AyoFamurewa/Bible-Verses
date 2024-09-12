function generate(){
    var quotes = {
        "-John 1:1 KJV" : '"In the beginning was the Word, and the Word was with God, and the Word was God."',
        "-Ezekiel 37:7-8 KJV" : '"So I prophesied as I was commanded: and as I prophesied, there was a noise, and behold a shaking, and the bones came together, bone to his bone. And when I beheld, lo, the sinews and the flesh came up upon them, and the skin covered them above: but there was no breath in them."',
        "-Lamentations 3:37 KJV" : '"Who is he that saith, and it cometh to pass, When the Lord commandeth it not?"',
        "-Jeremiah 33:3 KJV" : '"Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not."',
        "-Psalm 65:2 KJV" : '"O thou that hearest prayer, Unto thee shall all flesh come."',
        "-Psalm 99:1 KJV" : '"The LORD reigneth; let the people tremble: He sitteth between the cherubims; let the earth be moved."',
        "-Psalm 91:1 KJV" : '"He that dwelleth in the secret place of the Most High Shall abide under the shadow of the Almighty."'
    }
    
    var authors = Object.keys(quotes);
    
    var author = authors[Math.floor(Math.random() * authors.length)];
    
    var quote = quotes[author];
    
    document.getElementById("quote").innerHTML = quote;
    
    document.getElementById("author").innerHTML = author;
}

