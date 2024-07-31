const searchInp = document.querySelector('.search')
const searchOpt = document.querySelector('.options')

const Hotels = [
    'bude',
    'gold guest house',
    'minervahome','pano hotel',
    'studio gonio lemon',
    'gogi resort',
    'gudauri lodge',
    'hotel carpe diem gudauri',
    'quadrum hotel','zen summer gudauri',
    'casa del mar',
    'hotel montana',
    'hotel otsneba',
    'kvariati beach',
    'villadeluxe kvariati',
    'forest apartments',
    'hotel samta',
    'tskaltubo epic hotel & spa',
    'tskaltubo plaza hotel',
    'tskaltubo village - nature resort',
    'Dialog Kokhta','Hydeout Bakuriani',
    'Kokhta-amount-two',
    'Snow King Hotel',
    'Villa Mtashi'
]

const places = []

const getHotel = (word,hotels) => {  // getHotel - არის ფუნქცია რომელიც იღებს 2 არგუმენტს, word-სიტყვა რომელსაც ვეძებთ და hotels - სასტუმტოების სია 
    return hotels.filter(h => { // filter მეთოდი აბრუნებს ახალ სასტუმროების სიას, რომელთა სახელების ელემენტები ემთხვევა და  h ემატება სიაში 
    
    const regex = new RegExp(word,'gi'); // regex  არის საჭირო იმისთვის რომ შემოსული სიტყვა მოძებნოს იმის მიუხედავად დიდი ასოებით ეწერება თუ პატარათი word - საძიებო სიტყვა და 'gi' - აღნიშნავს გლობალურ ძებნას რომლის პუნქციაც ვთქვი აქამდე.

        return h.match(regex)
    })
}   

function displayHotels () {
    console.log( 'this.value >>',this.value) //  This  არის ინფუთის ამჟამინდელი მნიშვნელობა
    
    const opt = getHotel(this.value, Hotels) // აქ ვფილტრავთ სასტუმროებს 'getHotel' ფუნქციით, ანუ ამჟამინდელ მნიშვნელობას ვეძებთ სიაში
    const html = opt   //  აბრუნებს ახალ სიას სადაც თითოეულ ელემენტს opt-ში გარდაქმნის HTML ხაზად
    .map(hotel => {
        const regex = new RegExp(this.value, 'gi')
        const hotelName = hotel.replace(regex, // აქ  გამოვყოფთ იმ ასოებს რომელიც ემთხვევა და ვანიჭებთ მათ კლასს hl რომელიც აის მოქცეული სპანში და შემდგომ css-ში ვუცვლით ბექგრაუნდის ფერს
            `<span class="hl">${this.value}</span>`
        )
        return `<li><span>${hotelName}</span></li>`
    })
    .slice(0,10)
    .join('') // აერთიანებს ლისტის ხაზებს ერთ ხაზში, რადგან HTML-ში ისინი არ იყვნენ გამოყოფილი მძიმეებით
    
    searchOpt.innerHTML = this.value ? html: null; // ტერნერ ოპერატორი ამოწმებს იმას თუ არის თუ არა ტექსტი დაწერილი.ცარიელი სტრინგების თავდაპირველი მნიშვნელობაა FALSE  ამიტომაც თუ ტექსტი არის ის მას გამოიტანს ნუ არადა გამოიტანს null - რომელიც არაფერია
                                                    // 'searchOpt' არის HTML ელემენტი სადაც გამოდის შედეგი. 
}


searchInp.addEventListener('change', displayHotels);
searchInp.addEventListener('keyup', displayHotels);



