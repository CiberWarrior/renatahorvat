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
