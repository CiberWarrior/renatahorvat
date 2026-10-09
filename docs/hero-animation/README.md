# Prompt za Cursor

U projektu `/Users/renchi/Documents/Cursor/renatahorvat` dovršili smo novu SVG animaciju hero sekcije. Nastavi od postojećeg koda; ne zamjenjuj je novim dizajnom bez Renatine upute.

## Što je napravljeno

- `src/components/HeroMagic.astro` sadrži originalni stilizirani stroj inspiriran razigranošću Baltazara: tirkizne cijevi, metalni spojevi, boje CreativeStar loga, propeler s tri jednake tanke lopatice, tri zupčanika, mali kardiogram, barometar, raketicu i jedan kišobran na vrhu.
- `src/components/Hero.astro` prikazuje veću ilustraciju uz postojeći tekst i CTA gumbe. Uklonjeni su okvir i podloga stare ilustracije. Desktop raspored koristi `max-w-7xl` i stupce `1fr / 1.25fr`.
- Petnaest zvjezdica putuje jedna iza druge. Prolazak kroz cijev traje 8 sekundi; nove zvjezdice kreću u razmaku od 0,55 sekundi. Svaka druga se rotira.
- Izlaskom prve zvjezdice odmah počinje iscrtavanje okvira weba (oko 1,25 sekundi). Sljedeće skupine grade zaglavlje, sliku, tekst i gumbe. Gotov web ostaje vidljiv.
- Propeler i zupčanici postupno usporavaju tijekom zadnje 2,4 sekunde i zaustavljaju se. Kišobran se polako otvara i zatvara tijekom animacije te ostaje otvoren na kraju.

- Zelene linije usklađene su s bojom stranice `#1f6b5c`, a svijetle plohe s pozadinom `#f5f7f4`. Ljubičasti i tirkizni detalji ostaju naglasci loga.

## Tehničke odluke

- Astro komponenta koristi inline SVG, izolirane CSS selektore `.hero-machine` i SVG ID-je s prefiksom `rh-`.
- Ne dodavati biblioteku za animiranje, video, GIF ili vanjske zahtjeve: ova animacija nema dodatne ovisnosti.
- Jedna `requestAnimationFrame` petlja upravlja zvjezdicama, kazaljkom, kišobranom i vrtnjom. Uzorci putanje i reference na elemente spremaju se jednom.
- `IntersectionObserver` pokreće animaciju kada ilustracija uđe u vidljivi dio zaslona. Skrivena kartica pauzira vrijeme animacije. Nakon završetka petlja se gasi, a čestice uklanjaju.
- Uz `prefers-reduced-motion` prikazuje se završna statična ilustracija. Bez JavaScripta web i otvoreni kišobran također moraju biti vidljivi; kupola i rebra zato imaju početne SVG putanje.
- Ne vraćati globalne selektore poput `body`, `button` ili `svg` koji bi utjecali na druge dijelove stranice.

## Provjera i objava

Pokreni `npm run build`, provjeri desktop i mobitel te da se svih pet dijelova weba prikaže do završetka. Projekt koristi Vercel (`vercel.json`), a javna domena je `renatahorvat.com`. Trenutačna radna grana je `hero-test-tube`; push na tu granu ne treba automatski smatrati objavom na produkciju. Provjeri produkcijsku granu i deployment prije objave. Ne uključuj lokalne `.claude/`, `.cursor/` ni automatski generirane `.astro/` izmjene u commit ove animacije.

Lokalni pregled projekta: `http://127.0.0.1:4322/`. Samostalni prototip je u `/Users/renchi/Documents/Cursor/renatahorvat/docs/hero-animation/prototype.html`.

Završni commit: `0548469`, poslan na `origin/hero-test-tube`. Produkcijski build prolazi. U pregledniku potvrđen je završetak svih pet dijelova weba, uklanjanje zvjezdica i odsutnost JavaScript pogrešaka. Provjereni su i prikaz bez JavaScripta te simulirano ponašanje sa smanjenim kretanjem. Produkcijska objava nije izvršena.

## Organizacija datoteka

Produkcijska animacija uređuje se u `src/components/HeroMagic.astro`. Ova mapa čuva upute, samostalni `prototype.html` i sve snimke razvoja u `screenshots/`. Prototip je razvojna referenca; ne učitava se na javnoj stranici. Datoteke u `docs/` nisu dio Astro produkcijskog paketa.

## Prilagodba proporcija i mobitela

Nacrtani web povećan je 20 % oko točke ulaza (620, 240). Odredišta zvjezdica i sjena usklađeni su s novim proporcijama. SVG viewBox je 1060 × 530. Na zaslonima do 767 px prikazuje se gotova statična ilustracija, a od 768 px animacija se pokreće pri ulasku u vidljivi dio stranice. Razmak između teksta i ilustracije smanjen je na mobitelu. Build je prošao; vizualnu provjeru ove izmjene treba dovršiti jer je preglednik blokirala provjera pristupa.

## Odobrena završna dorada

U produkcijsku komponentu preneseni su gradijenti cijevi i spojeva, diskretan sjaj zvjezdica, kratki impulsi izlaska i dolaska te mekše pojavljivanje i iscrtavanje sadržaja weba. Manje proporcije weba iz posljednje Cursor verzije ostaju. Mobilni prikaz je statičan. Usporedni prototipovi `polished-prototype.html` i `motion-prototype.html` ostaju u ovoj mapi.

## Ulaz dokumenata u produkcijski hero

U hero je prenesen odobreni ulazni tok iz prototipa: dva dokumenta i dvije slikovne kartice ulaze glatko i redom u lijevak. Zvijezde putuju unutar maske cijevi te izlaze prema webu; prolaz je neznatno ubrzan. Monitor prikazuje jedan kardiogramski vrh i kratke oznake koda, a monitor i raketa spojeni su na cijevi kabelima. Na mobitelu i uz smanjeno kretanje ostaje završna statična ilustracija, bez ulaznih kartica.

## Tri mjerača i završna antenica (9. listopada 2026.)

Odobrena varijanta `three-dials-prototype.html` prenesena je u `HeroMagic.astro`: tri povezana mjerača s kazaljkama u žutoj, zelenoj, crvenoj i plavoj boji, tri izvorna zupčanika bez remena, kratka antenica u donjoj cijevi s manjom ljubičastom kuglicom i tanji obrubi svih dijelova cijevi. Kazaljke koriste postojeću animacijsku petlju i zajedno sa zupčanicima postupno staju. Mobilni prikaz i smanjeno kretanje ostaju statični. Hero raspored ima više prostora za ilustraciju na desktopu i tabletu. Prototipovi s remenom i treperećim lampicama ostaju lokalne neodobrene alternative; nisu dio produkcije.

## Animacija na mobitelu (9. listopada 2026.)

Na Renatin zahtjev mobilni prikaz sada pokreće istu animaciju pri ulasku ilustracije u ekran. Statična završna ilustracija ostaje uz `prefers-reduced-motion` i bez JavaScripta. Početno skrivanje završnog stanja vrijedi na svim širinama kako bi se izbjegao treptaj. Na mobitelu se preskaču samo dekorativni impulsi i završni sjaj; dokumenti, zvjezdice, kazaljke, zupčanici i izgradnja weba rade u postojećoj petlji koja se gasi nakon završetka.

## Vidljiv okvir i dorada nacrtanog weba

Prazan okvir, gornja traka i točkice vidljivi su diskretno prije početka animacije. Izlaskom prve zvjezdice okvir pojačava vidljivost i pojavljuje se prvo zaglavlje sadržaja. Sljedeće skupine dodaju sliku, tekst i gumbe. Nacrtani web ima traku adrese, detaljniju navigaciju i gumbe, tanje linije te jedan kratki završni sjaj bez dodatnih biblioteka ili zahtjeva. Prikaz bez JavaScripta i uz smanjeno kretanje ostaje potpun i statičan. Razvojni pregled: `web-reveal-prototype.html`.

## Završno čišćenje i optimizacija (9. listopada 2026.)

Ova odluka zamjenjuje starije opise mobilnog prikaza i antene u ovoj dokumentaciji. Produkcijska komponenta i `web-reveal-prototype.html` koriste istu animacijsku logiku.

- Animacija radi jednom, na desktopu i mobitelu. Nema gumba za ponovno pokretanje. Uz smanjeno kretanje, bez JavaScripta ili bez IntersectionObservera prikazuje se završna ilustracija.
- Donja antenica ima malu ljubičastu kuglicu, tanak rub i oprugu vezanu uz nepomično ležište. Nema dodatnog propelera. Postojeći propeler u okruglom kućištu ostaje.
- Usklađeni su rubovi lijevka, rakete, kišobrana i spojevi postolja. Sadržaj nacrtanog weba ima unutarnju masku. Suvišne ukrasne crte uklonjene su.
- Donji mali zupčanik približen je velikom; početni kutovi i brzine usklađeni su s brojem zuba. Zvjezdice interpoliraju spremljene uzorke putanje te pri izlasku prelaze iz maske cijevi u slobodan sloj.
- RAF i CSS animacije pauziraju kada ilustracija izađe iz vidljivog područja ili je kartica skrivena. Nastavak zadržava proteklo vrijeme. Zvjezdice se uklanjaju odmah nakon dolaska; završetak zaustavlja RAF i odspaja observer.
- Antena i kazaljka nježno se smiruju. Pojedini dijelovi weba dobiju kratak naglasak dolaska, bez ponavljanja cijele animacije.
- Hero CTA gumbi na mobitelu imaju najveću širinu 18rem. Nema novih biblioteka, vanjskih zahtjeva, videa ili bitmap animacija.

Provjera: produkcijski build i test izdvojene stvarne animacijske skripte s kontroliranim DOM/RAF objektima. Test pokriva završetak, pauzu/nastavak, uklanjanje čestica, smanjeno kretanje i odsutnost observera. Vizualna provjera u pregledniku nije dovršena jer je pristup pregledniku blokiran pravilom okruženja. Produkcijska objava nije dio ove provjere.

## Jednostavniji nacrtani web

Uklonjena je mala oznaka ispod teksta, dvije donje kartice i donja ukrasna linija. Ostaju jedna naslovna i dvije tekstne linije te jedan zeleni gumb ispod teksta. Okvir je skraćen da prati sadržaj; odredište završnih zvjezdica i naglasak dolaska usklađeni su s novim gumbom.

## Usklađena paleta nacrtanog weba

Zeleni gumbi koriste isti svijetli gradijent kao cijevi, s tankim zelenim rubom i zelenim oznakama. Naslovna linija stanjena je na 1,6. Podloga weba prati pozadinu stranice, gornja traka metalne spojeve, a ljubičasta slika ima nježniji gradijent. Tirkizni detalji preuzimaju ton postojećeg propelera.

## Modernija završna ilustracija weba

Navigacija je prozračnija s jednom oznakom brenda; kontrole preglednika su manje. Slika ima mekše zaobljene kutove i zakrivljenu ilustraciju krajolika precizno ograničenu maskom. Tri tekstne linije imaju jasnije razmake i različite duljine, a glavni gumb oblik kapsule. Zadržani su postojeća paleta, pet skupina sadržaja i jedan prolaz animacije.
