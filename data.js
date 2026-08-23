(function () {
  var destinations = [
    {
      id: 'd1', slug: 'tbilisi', name: 'თბილისი', region: 'ქალაქი თბილისი', theme: 'th-2', icon: 'city',
      tagline: 'ძველი ქუჩები, გოგირდის აბანოები და საათობით ხეტიალი',
      description: 'თბილისი აერთიანებს აღმოსავლურ და ევროპულ არქიტექტურას, ვიწრო ქუჩებს ძველ უბანში, ისტორიულ გოგირდის აბანოებს და მდინარე მტკვრის ორივე ნაპირზე გადაჭიმულ პანორამას. დღისით — მუზეუმები და ბაზრობები, საღამოს — საროსტორნო ცხოვრება და ღვინის ბარები.',
      bestTime: 'აპრილი–ივნისი და სექტემბერი–ნოემბერი', climate: 'ზომიერი კონტინენტური, ზაფხულში ცხელი',
      highlights: ['ძველი თბილისი და ნარიყალას ციხე', 'აბანოთუბანი და გოგირდის აბანოები', 'მშრალი ხიდი და ანტიკვარული ბაზარი', 'ფუნიკულიორი და მთაწმინდის პარკი'],
      tips: ['ძველ ქალაქში საუკეთესოა ფეხით სეირნობა', 'აბანოში ვიზიტისთვის დაჯავშნეთ ცალკე ოთახი წინასწარ']
    },
    {
      id: 'd2', slug: 'kazbegi', name: 'ყაზბეგი (სტეფანწმინდა)', region: 'მცხეთა-მთიანეთი', theme: 'th-1', icon: 'mountain',
      tagline: 'გერგეტის სამება მყინვარწვერის ფონზე',
      description: 'სტეფანწმინდა მდებარეობს საქართველოს სამხედრო გზაზე, მყინვარწვერის (ყაზბეგის) ძირას. აქედან იწყება ასვლა გერგეტის სამების ეკლესიამდე — ერთ-ერთი ყველაზე ცნობადი ხედი საქართველოში — და მთის ლაშქრობის მარშრუტები ტრუსოს ხეობისკენ.',
      bestTime: 'მაისი–ოქტომბერი', climate: 'მაღალმთიანი, ღამით გრილი ზაფხულშიც კი',
      highlights: ['გერგეტის სამების ეკლესია', 'მყინვარწვერის პანორამა', 'ტრუსოს ხეობა', 'დარიალის ხეობა'],
      tips: ['აიღეთ თბილი ტანსაცმელი ზაფხულშიც', 'გზა შეიძლება დაიხუროს ავარიულ ამინდში']
    },
    {
      id: 'd3', slug: 'batumi', name: 'ბათუმი', region: 'აჭარა', theme: 'th-3', icon: 'wave',
      tagline: 'შავი ზღვის სანაპირო და სუბტროპიკული ბაღები',
      description: 'ბათუმი აერთიანებს თანამედროვე ბულვარს, ღამის სანათებით მოსილ ცათამბჯენებს და ატმოსფერულ ძველ უბანს. ახლომდებარეობს ბათუმის ბოტანიკური ბაღი და აჭარის მთიანეთისკენ მიმავალი გზები.',
      bestTime: 'ივნისი–სექტემბერი (საზღვაო სეზონი), გაზაფხული და შემოდგომა ბუნების დათვალიერებისთვის', climate: 'სუბტროპიკული, ტენიანი',
      highlights: ['ბათუმის ბულვარი და საზღვაო სანაპირო', 'ბოტანიკური ბაღი', 'ძველი ბათუმი', 'ალუბნის მთის საბაგირო'],
      tips: ['ზაფხულში ითვალისწინეთ დიდი ნაკადი — სასტუმროები წინასწარ დაჯავშნეთ', 'საღამოს მუსიკალური შადრევანი ბულვარზე ღირს ნახვად']
    },
    {
      id: 'd4', slug: 'svaneti', name: 'სვანეთი (მესტია)', region: 'სამეგრელო-ზემო სვანეთი', theme: 'th-4', icon: 'peak',
      tagline: 'შუა საუკუნეების კოშკები 5000+ მეტრიან მწვერვალებს შორის',
      description: 'სვანეთი — საქართველოს ყველაზე მაღალმთიანი რეგიონია, ცნობილი ქვის კოშკებით და უშგულის თემით, ევროპის ერთ-ერთი უმაღლესი მუდმივად დასახლებული სოფლით. მესტიიდან იწყება ლაშქრობის მარშრუტები უშბასა და თეთნულდისკენ.',
      bestTime: 'ივნისი–სექტემბერი', climate: 'მაღალმთიანი, თოვლი გვხვდება ადრეულ სეზონზეც',
      highlights: ['უშგულის თემი', 'მესტიის ისტორიული მუზეუმი', 'თეთნულდის და უშბას პანორამები', 'სვანური კოშკები'],
      tips: ['მთის გზები საჭიროებს ჯიპს ან გამოცდილ მძღოლს', 'ცალკეული მარშრუტებისთვის საჭიროა კარგი ფიზიკური ფორმა']
    },
    {
      id: 'd5', slug: 'kakheti', name: 'კახეთი (სიღნაღი, თელავი)', region: 'კახეთი', theme: 'th-5', icon: 'grape',
      tagline: '8000-წლიანი ღვინის ტრადიცია ქვევრში',
      description: 'კახეთი საქართველოს ღვინის რეგიონია — ვაზის მწკრივები ალაზნის ველზე, ისტორიული სიღნაღის ციხე-ქალაქი და ალავერდის მონასტერი. მოინახულეთ საოჯახო მარანი და გასინჯეთ ქვევრში დაყენებული ღვინო.',
      bestTime: 'სექტემბერი–ოქტომბერი (რთველი), მაისი–ივნისი', climate: 'ზომიერად კონტინენტური, მზიანი',
      highlights: ['სიღნაღის ციხე-ქალაქი', 'ალავერდის მონასტერი', 'ბოდბის მონასტერი', 'საოჯახო მარნები'],
      tips: ['რთველის სეზონზე (სექტემბერი) ღვინის ტურები განსაკუთრებით საინტერესოა', 'დაგეგმეთ დრო დეგუსტაციისთვის — ჩქარობა არ ღირს']
    },
    {
      id: 'd6', slug: 'borjomi', name: 'ბორჯომი', region: 'სამცხე-ჯავახეთი', theme: 'th-6', icon: 'leaf',
      tagline: 'მინერალური წყალი და ეროვნული პარკის ტყეები',
      description: 'ბორჯომი ცნობილია მინერალური წყლით და ეროვნული პარკით, სადაც არის ლაშქრობის, საბაგირო და ველოსიპედის მარშრუტები. ახლოს მდებარეობს ბაკურიანის სამთო-სათხილამურო კურორტი.',
      bestTime: 'მაისი–ოქტომბერი (ბუნება), დეკემბერი–მარტი (ბაკურიანი, თხილამურები)', climate: 'ზომიერი, ტყით დაცული',
      highlights: ['ბორჯომ-ხარაგაულის ეროვნული პარკი', 'მინერალური წყლის პარკი და საბაგირო', 'რომანოვების სასახლის კომპლექსი', 'ბაკურიანის სათხილამურო ტრასები'],
      tips: ['ეროვნულ პარკში რამდენიმე დღიანი ლაშქრობის მარშრუტებიცაა', 'ზამთარში დამატებით ეწვიეთ ბაკურიანს']
    },
    {
      id: 'd7', slug: 'vardzia', name: 'ვარძია და ახალციხე', region: 'სამცხე-ჯავახეთი', theme: 'th-7', icon: 'castle',
      tagline: 'კლდეში ნაკვეთი შუა საუკუნეების ქალაქი',
      description: 'ვარძია — მე-12 საუკუნის კლდეში ნაკვეთი სამონასტრო კომპლექსია რამდენიმე ასეული ოთახით. მახლობლად მდებარეობს ახალციხის რაბათის ციხე-სიმაგრე, განახლებული ღია ცის მუზეუმის სახით.',
      bestTime: 'აპრილი–ოქტომბერი', climate: 'მშრალი კონტინენტური',
      highlights: ['ვარძიის კლდის მონასტერი', 'რაბათის ციხე, ახალციხე', 'ვარდზიის გვირაბები', 'სოფლის პანორამა მდინარე მტკვარზე'],
      tips: ['კლდეში საფეხურები ციცაბოა — მოსახერხებელი ფეხსაცმელი აიღეთ', 'ორივე ობიექტი ერთ დღეს ერგება']
    },
    {
      id: 'd8', slug: 'martvili', name: 'მარტვილი და ოქაცე', region: 'სამეგრელო-ზემო სვანეთი', theme: 'th-8', icon: 'canyon',
      tagline: 'ზურმუხტისფერი კანიონები და ჩანჩქერები',
      description: 'მარტვილის კანიონი ცნობილია ბრწყინვალე ფირუზისფერი წყლით და ნავით სეირნობით, ხოლო ოქაცეს კანიონი — გამჭვირვალე ბილიკებით და ჩანჩქერით კლდეების თავზე.',
      bestTime: 'აპრილი–ოქტომბერი', climate: 'ტენიანი სუბტროპიკული',
      highlights: ['მარტვილის კანიონი და ნავით სეირნობა', 'ოქაცეს კანიონის შუშის ბილიკი', 'კინტრიშის ჩანჩქერი', 'ბალთა ჩანჩქერი'],
      tips: ['ორივე კანიონის მონახულება ერთ დღეში შესაძლებელია', 'ზაფხულში ადრეული ვიზიტი ამცირებს ხალხმრავლობას']
    },
    {
      id: 'd9', slug: 'tusheti', name: 'თუშეთი', region: 'კახეთი (მთა)', theme: 'th-9', icon: 'path',
      tagline: 'ერთ-ერთი ყველაზე იზოლირებული მთის რეგიონი',
      description: 'თუშეთი ხელმისაწვდომია მხოლოდ ივნისიდან ოქტომბრამდე აბანოს უღელტეხილზე გავლით. აქ დაცულია ავთენტური სოფლები, კოშკები და მთის ლაშქრობის მარშრუტები, გაუფასურებელი პანორამებით.',
      bestTime: 'ივნისის ბოლო–სექტემბერი', climate: 'მაღალმთიანი, სწრაფად ცვალებადი ამინდი',
      highlights: ['აბანოს უღელტეხილი', 'ომალოს ციხე-სოფელი', 'შატილისკენ მიმავალი ბილიკები', 'ხახმატის ჯვარი'],
      tips: ['გზა შედეგიანია მხოლოდ ზაფხულში და მოითხოვს შესაბამის მანქანას', 'დღით ადრე დაგეგმეთ გასვლა ამინდის გამო']
    }
  ];

  function itin(day, title, desc) { return { day: day, title: title, desc: desc }; }

  var tours = [
    {
      id: 't1', slug: 'tbilisi-old-town-walk', destinationId: 'd1', title: 'თბილისის ძველი ქალაქის ჯადო',
      type: 'cultural', typeLabel: 'კულტურული', durationDays: 1, difficulty: 'easy', difficultyLabel: 'ადვილი',
      groupMin: 2, groupMax: 15, rating: 4.8, reviewCount: 132, featured: true, discount: 0,
      priceBasic: 85, priceStandard: 120, pricePremium: 180,
      summary: 'ნახევარდღიანი ფეხით სეირნობა ძველ თბილისში — ნარიყალადან აბანოთუბნამდე, ადგილობრივი გიდის თანხლებით.',
      inclusions: ['ლიცენზირებული გიდი', 'ნარიყალას საბაგირო', 'დეგუსტაცია ადგილობრივ მარანში', 'ჯგუფური ფოტოსესია'],
      exclusions: ['სადილი', 'პირადი ხარჯები', 'სასტუმრო'],
      meetingPoint: 'თავისუფლების მოედანი, მეტროს გამოსასვლელთან',
      languages: ['ქართული', 'ინგლისური', 'რუსული'],
      itinerary: [
        itin(1, 'თავისუფლების მოედანი → ძველი ქალაქი', 'შეხვედრა გიდთან, სეირნობა სიონის საკათედრო ტაძრამდე და მშრალ ხიდამდე.'),
      ],
      theme: 'th-2', icon: 'city',
      reviews: [
        { name: 'ნინო კ.', initials: 'ნკ', rating: 5, date: '2026-06-02', text: 'გიდმა საოცრად საინტერესოდ მოყვა ისტორია — არ ველოდი ამდენ დეტალს ერთ ტურში.', verified: true },
        { name: 'დავით მ.', initials: 'დმ', rating: 4, date: '2026-05-14', text: 'კარგი ტემპი, ოღონდ ზაფხულში ცხელა ამ საათებში სეირნობა.', verified: true }
      ]
    },
    {
      id: 't2', slug: 'kazbegi-gergeti', destinationId: 'd2', title: 'ყაზბეგი და გერგეტის სამება',
      type: 'daytrip', typeLabel: 'ერთდღიანი', durationDays: 1, difficulty: 'moderate', difficultyLabel: 'საშუალო',
      groupMin: 2, groupMax: 12, rating: 4.9, reviewCount: 214, featured: true, discount: 10,
      priceBasic: 110, priceStandard: 150, pricePremium: 220,
      summary: 'გასვლა თბილისიდან სამხედრო გზით, გაჩერებები ანანურის ციხესთან და ჟინვალის წყალსაცავთან, ასვლა გერგეტის სამებამდე.',
      inclusions: ['ტრანსპორტი კომფორტული მიკროავტობუსით', 'გიდი', '4x4-ით ასვლა ეკლესიამდე', 'შუადღის ერთი კერძი'],
      exclusions: ['დამატებითი კვება', 'პირადი ხარჯები'],
      meetingPoint: 'დიდუბის ავტოსადგური ან სასტუმროდან აყვანა (დამატებით)',
      languages: ['ქართული', 'ინგლისური'],
      itinerary: [
        itin(1, 'თბილისი → ანანური → ჟინვალი → სტეფანწმინდა → გერგეტი', 'გაჩერებები გზაზე, თავისუფალი დრო გერგეტის სამებასთან, დაბრუნება საღამოს.')
      ],
      theme: 'th-1', icon: 'mountain',
      reviews: [
        { name: 'თამარ ჯ.', initials: 'თჯ', rating: 5, date: '2026-07-20', text: 'ხედი მართლაც სიცოცხლეში ერთხელაა სანახავი. მადლობა კარგად ორგანიზებულ დღეზე.', verified: true },
        { name: 'გიორგი ა.', initials: 'გა', rating: 5, date: '2026-06-30', text: '4x4-ით ასვლა ღირს ფასად — ფეხით გრძელი გზაა.', verified: true }
      ]
    },
    {
      id: 't3', slug: 'svaneti-mestia-ushguli', destinationId: 'd4', title: 'სვანეთი: მესტია–უშგული',
      type: 'trekking', typeLabel: 'მთის ტრეკინგი', durationDays: 4, difficulty: 'hard', difficultyLabel: 'რთული',
      groupMin: 4, groupMax: 10, rating: 4.9, reviewCount: 88, featured: true, discount: 0,
      priceBasic: 780, priceStandard: 980, pricePremium: 1350,
      summary: '4 დღიანი მოგზაურობა მესტიაში და უშგულში, კოშკებით სავსე სოფლებში სეირნობით და თეთნულდის პანორამით.',
      inclusions: ['საცხოვრებელი გესთჰაუსებში', 'ტრანსპორტი მთელი მარშრუტზე', 'გიდი', 'საუზმეები'],
      exclusions: ['სადილი და ვახშამი (გარდა 1-ლი დღისა)', 'სამოგზაურო დაზღვევა'],
      meetingPoint: 'ქუთაისის აეროპორტი ან თბილისი (დამატებითი ტრანსფერი)',
      languages: ['ქართული', 'ინგლისური'],
      itinerary: [
        itin(1, 'თბილისი/ქუთაისი → მესტია', 'გზა მთის სერპანტინებით, დასახლება, საღამოს სეირნობა მესტიაში.'),
        itin(2, 'მესტიის მუზეუმი და გარშემო სოფლები', 'სვანური კოშკების დათვალიერება, თეთნულდის ხედვის პუნქტამდე ლაშქრობა.'),
        itin(3, 'მესტია → უშგული', 'ერთ-ერთი ევროპის უმაღლესი მუდმივად დასახლებული სოფლის მონახულება, თავისუფალი დრო ფოტოებისთვის.'),
        itin(4, 'უშგული → მესტია → გამგზავრება', 'დილის სეირნობა, დაბრუნება და ტრანსფერი გამგზავრების პუნქტამდე.')
      ],
      theme: 'th-4', icon: 'peak',
      reviews: [
        { name: 'სალომე ვ.', initials: 'სვ', rating: 5, date: '2026-08-05', text: 'ყველაზე ლამაზი მარშრუტი რაც კი გამივლია საქართველოში. გიდი ძალიან გამოცდილი იყო.', verified: true },
        { name: 'ლუკა ხ.', initials: 'ლხ', rating: 5, date: '2026-07-11', text: 'ფიზიკურად საკმაოდ დამღლელია, მაგრამ ღირს ყოველი ნაბიჯი.', verified: true }
      ]
    },
    {
      id: 't4', slug: 'batumi-seaside-escape', destinationId: 'd3', title: 'ბათუმის საზღვაო დასვენება',
      type: 'seaside', typeLabel: 'ზღვისპირა', durationDays: 5, difficulty: 'easy', difficultyLabel: 'ადვილი',
      groupMin: 1, groupMax: 20, rating: 4.6, reviewCount: 176, featured: false, discount: 15,
      priceBasic: 650, priceStandard: 890, pricePremium: 1290,
      summary: '5 დღიანი დასვენება ბათუმში საზღვაო სასტუმროში, ბოტანიკური ბაღით და ერთი დღით მთისკენ გასვლით.',
      inclusions: ['სასტუმრო საუზმით', 'ტრანსფერი აეროპორტიდან', 'ბოტანიკური ბაღის ბილეთი', 'ერთდღიანი ტური მთისკენ'],
      exclusions: ['ფრენა', 'სადილ-ვახშმები', 'სპა პროცედურები'],
      meetingPoint: 'ბათუმის აეროპორტი',
      languages: ['ქართული', 'ინგლისური', 'რუსული'],
      itinerary: [
        itin(1, 'ჩამოსვლა და დასახლება', 'თავისუფალი საღამო ბულვარზე სეირნობისთვის.'),
        itin(2, 'ძველი ბათუმი და ბულვარი', 'გიდით სეირნობა, საღამოს მუსიკალური შადრევანი.'),
        itin(3, 'ბოტანიკური ბაღი', 'მთელი დღე ბაღში, საზღვაო ხედებით.'),
        itin(4, 'გასვლა მთისკენ (ხულო/გოდერძი)', 'ერთდღიანი ტური აჭარის მთიანეთში.'),
        itin(5, 'თავისუფალი დრო და გამგზავრება', 'პლაჟზე დასვენება, ტრანსფერი აეროპორტამდე.')
      ],
      theme: 'th-3', icon: 'wave',
      reviews: [
        { name: 'ანა ს.', initials: 'ან', rating: 5, date: '2026-07-28', text: 'იდეალური ბალანსი ზღვასა და მთას შორის.', verified: true },
        { name: 'ირაკლი ბ.', initials: 'ირ', rating: 4, date: '2026-06-19', text: 'ყველაფერი კარგად ორგანიზებული იყო, სასტუმროც კომფორტული.', verified: true }
      ]
    },
    {
      id: 't5', slug: 'kakheti-wine-tour', destinationId: 'd5', title: 'კახეთის ღვინის მარშრუტი',
      type: 'wine', typeLabel: 'ღვინის ტური', durationDays: 2, difficulty: 'easy', difficultyLabel: 'ადვილი',
      groupMin: 2, groupMax: 14, rating: 4.9, reviewCount: 201, featured: true, discount: 0,
      priceBasic: 240, priceStandard: 340, pricePremium: 490,
      summary: 'ორდღიანი მოგზაურობა კახეთში — საოჯახო მარნები, ქვევრში ღვინის დაყენების ტრადიცია და სიღნაღის ღამისთევა.',
      inclusions: ['ტრანსპორტი', 'გიდი', 'ღვინის დეგუსტაცია 3 მარანში', 'ღამისთევა სასტუმროში სიღნაღში', 'ერთი სადილი'],
      exclusions: ['დამატებითი ღვინის შეძენა', 'ვახშამი მე-2 დღეს'],
      meetingPoint: 'დიდუბის ავტოსადგური, თბილისი',
      languages: ['ქართული', 'ინგლისური'],
      itinerary: [
        itin(1, 'თბილისი → წინანდალი → სიღნაღი', 'წინანდლის მამულის მონახულება, საღამოს ღამისთევა სიღნაღში.'),
        itin(2, 'ბოდბე → საოჯახო მარანი → თბილისი', 'ბოდბის მონასტერი, ქვევრში ღვინის დამზადების დემონსტრაცია, დაბრუნება.')
      ],
      theme: 'th-5', icon: 'grape',
      reviews: [
        { name: 'ეკა ლ.', initials: 'ეკ', rating: 5, date: '2026-09-15', text: 'რთველის დროს წასვლა საუკეთესო გადაწყვეტილება იყო — ატმოსფერო დაუვიწყარია.', verified: true },
        { name: 'ვახტანგ ტ.', initials: 'ვტ', rating: 5, date: '2026-05-22', text: 'მარნები ძალიან ავთენტური, არა ტურისტული.', verified: true }
      ]
    },
    {
      id: 't6', slug: 'borjomi-nature-spa', destinationId: 'd6', title: 'ბორჯომი-ბაკურიანის ბუნება',
      type: 'family', typeLabel: 'საოჯახო', durationDays: 2, difficulty: 'easy', difficultyLabel: 'ადვილი',
      groupMin: 2, groupMax: 16, rating: 4.7, reviewCount: 96, featured: false, discount: 0,
      priceBasic: 260, priceStandard: 360, pricePremium: 520,
      summary: 'ორდღიანი საოჯახო მოგზაურობა ბორჯომში — მინერალური წყლის პარკი, საბაგირო და ბაკურიანის ტყეები.',
      inclusions: ['ტრანსპორტი', 'გიდი', 'საბაგიროს ბილეთი', 'ერთი ღამე სასტუმროში'],
      exclusions: ['კვება (გარდა საუზმისა)', 'დამატებითი გასართობები'],
      meetingPoint: 'დიდუბის ავტოსადგური, თბილისი',
      languages: ['ქართული', 'ინგლისური', 'რუსული'],
      itinerary: [
        itin(1, 'თბილისი → ბორჯომი', 'მინერალური წყლის პარკი, საბაგირო, თავისუფალი საღამო.'),
        itin(2, 'ბაკურიანი → თბილისი', 'ტყის სეირნობა, დაბრუნება საღამოს.')
      ],
      theme: 'th-6', icon: 'leaf',
      reviews: [
        { name: 'მარიამ ღ.', initials: 'მღ', rating: 5, date: '2026-06-10', text: 'ბავშვებთან ერთად საუკეთესო ვარიანტი — ტემპი მშვიდი და მოსახერხებელი.', verified: true }
      ]
    },
    {
      id: 't7', slug: 'vardzia-akhaltsikhe', destinationId: 'd7', title: 'ვარძია და რაბათის ციხე',
      type: 'cultural', typeLabel: 'კულტურული', durationDays: 1, difficulty: 'moderate', difficultyLabel: 'საშუალო',
      groupMin: 2, groupMax: 15, rating: 4.7, reviewCount: 64, featured: false, discount: 0,
      priceBasic: 95, priceStandard: 135, pricePremium: 190,
      summary: 'ერთდღიანი ტური კლდეში ნაკვეთ ვარძიის მონასტერსა და ახალციხის რაბათის ციხე-სიმაგრეში.',
      inclusions: ['ტრანსპორტი', 'გიდი', 'ორივე ობიექტის ბილეთი'],
      exclusions: ['სადილი', 'პირადი ხარჯები'],
      meetingPoint: 'დიდუბის ავტოსადგური, თბილისი',
      languages: ['ქართული', 'ინგლისური'],
      itinerary: [ itin(1, 'თბილისი → ახალციხე (რაბათი) → ვარძია → თბილისი', 'დილით რაბათის ციხე, შუადღეს ვარძია, საღამოს დაბრუნება.') ],
      theme: 'th-7', icon: 'castle',
      reviews: [
        { name: 'ნატა ხ.', initials: 'ნხ', rating: 5, date: '2026-08-01', text: 'გვირაბებში სეირნობა საოცარი გამოცდილებაა.', verified: true }
      ]
    },
    {
      id: 't8', slug: 'martvili-okatse-canyon', destinationId: 'd8', title: 'მარტვილის და ოქაცეს კანიონები',
      type: 'adventure', typeLabel: 'სათავგადასავლო', durationDays: 1, difficulty: 'moderate', difficultyLabel: 'საშუალო',
      groupMin: 2, groupMax: 12, rating: 4.8, reviewCount: 143, featured: true, discount: 5,
      priceBasic: 100, priceStandard: 140, pricePremium: 200,
      summary: 'ერთდღიანი ტური ორ ულამაზეს კანიონში — ნავით სეირნობა მარტვილში და შუშის ბილიკი ოქაცეში.',
      inclusions: ['ტრანსპორტი', 'გიდი', 'ნავით სეირნობის ბილეთი', 'ორივე კანიონის შესასვლელი'],
      exclusions: ['სადილი', 'პირადი ხარჯები'],
      meetingPoint: 'ქუთაისის ცენტრი (თბილისიდან დამატებითი ტრანსფერით)',
      languages: ['ქართული', 'ინგლისური'],
      itinerary: [ itin(1, 'ქუთაისი → მარტვილის კანიონი → ოქაცეს კანიონი → ქუთაისი', 'დილით მარტვილი და ნავით სეირნობა, შუადღეს ოქაცეს ბილიკი და ჩანჩქერი.') ],
      theme: 'th-8', icon: 'canyon',
      reviews: [
        { name: 'ბექა ს.', initials: 'ბს', rating: 5, date: '2026-07-09', text: 'წყლის ფერი წარმოუდგენელია — არ დამჯერდი სანამ თვითონ არ ვნახე.', verified: true },
        { name: 'ხატია რ.', initials: 'ხრ', rating: 4, date: '2026-06-25', text: 'ზაფხულში საკმაოდ ხალხმრავალია, დილით ადრე წასვლას გირჩევთ.', verified: true }
      ]
    },
    {
      id: 't9', slug: 'tusheti-highland-trek', destinationId: 'd9', title: 'თუშეთის მთის ტრეკინგი',
      type: 'trekking', typeLabel: 'მთის ტრეკინგი', durationDays: 3, difficulty: 'hard', difficultyLabel: 'რთული',
      groupMin: 4, groupMax: 8, rating: 4.9, reviewCount: 41, featured: false, discount: 0,
      priceBasic: 590, priceStandard: 760, pricePremium: 990,
      summary: '3 დღიანი ექსპედიცია აბანოს უღელტეხილზე გავლით თუშეთში, ომალოსა და მიმდებარე სოფლების მონახულებით.',
      inclusions: ['4x4 ტრანსპორტი უღელტეხილზე', 'გიდი', 'საცხოვრებელი გესთჰაუსში', 'საუზმეები'],
      exclusions: ['სადილ-ვახშმები', 'სამოგზაურო დაზღვევა'],
      meetingPoint: 'თელავი',
      languages: ['ქართული', 'ინგლისური'],
      itinerary: [
        itin(1, 'თელავი → აბანოს უღელტეხილი → ომალო', 'გრძელი მთის გზა, ხედები კავკასიონზე.'),
        itin(2, 'ომალო → დარტლო → სოფლების ლაშქრობა', 'ლაშქრობა ისტორიულ სოფლებს შორის.'),
        itin(3, 'ომალო → აბანოს უღელტეხილი → თელავი', 'დაბრუნება, გზაში დამატებითი გაჩერებები.')
      ],
      theme: 'th-9', icon: 'path',
      reviews: [
        { name: 'გვანცა მ.', initials: 'გმ', rating: 5, date: '2026-08-14', text: 'ყველაზე ველური და ავთენტური ადგილი რაც მინახავს საქართველოში.', verified: true }
      ]
    },
    {
      id: 't10', slug: 'grand-georgia-luxury', destinationId: 'd1', title: 'დიდი საქართველო: ლუქს ტური',
      type: 'luxury', typeLabel: 'ლუქსი', durationDays: 7, difficulty: 'easy', difficultyLabel: 'ადვილი',
      groupMin: 2, groupMax: 6, rating: 5.0, reviewCount: 37, featured: true, discount: 0,
      priceBasic: 1890, priceStandard: 2450, pricePremium: 3400,
      summary: '7 დღიანი პრემიუმ მარშრუტი — თბილისი, კახეთი, ყაზბეგი და სვანეთი, საუკეთესო სასტუმროებით და პირადი გიდით.',
      inclusions: ['პირადი გიდი მთელი მარშრუტისთვის', '4-5 ვარსკვლავიანი სასტუმროები', 'ყველა ტრანსფერი კომფორტული მანქანით', 'შერჩეული სადილ-ვახშმები საუკეთესო რესტორნებში'],
      exclusions: ['საერთაშორისო ფრენა', 'პირადი ხარჯები', 'სპა პროცედურები'],
      meetingPoint: 'თბილისის საერთაშორისო აეროპორტი',
      languages: ['ქართული', 'ინგლისური', 'რუსული', 'ფრანგული (მოთხოვნით)'],
      itinerary: [
        itin(1, 'ჩამოსვლა თბილისში', 'პირადი ტრანსფერი, დასახლება, მისალმების ვახშამი.'),
        itin(2, 'თბილისის კერძო ტური', 'ძველი ქალაქი, აბანოები, ღვინის დეგუსტაცია.'),
        itin(3, 'კახეთი — ღვინის მამულები', 'პრემიუმ მარნების ვიზიტი, ვახშამი მამულში.'),
        itin(4, 'ყაზბეგი', 'გერგეტის სამება, ხედების პუნქტები.'),
        itin(5, 'გადაადგილება სვანეთისკენ', 'ფრენა ან კერძო ტრანსფერი მესტიაში.'),
        itin(6, 'სვანეთის მარშრუტები', 'უშგული და მთის პანორამები.'),
        itin(7, 'დაბრუნება და გამგზავრება', 'ტრანსფერი აეროპორტამდე.')
      ],
      theme: 'th-2', icon: 'city',
      reviews: [
        { name: 'ელენე დ.', initials: 'ელ', rating: 5, date: '2026-07-02', text: 'ყველა დეტალი გააზრებული იყო — ნამდვილად საუკეთესო მოგზაურობა.', verified: true }
      ]
    },
    {
      id: 't11', slug: 'family-georgia-week', destinationId: 'd1', title: 'ოჯახური მოგზაურობა საქართველოში',
      type: 'family', typeLabel: 'საოჯახო', durationDays: 6, difficulty: 'easy', difficultyLabel: 'ადვილი',
      groupMin: 2, groupMax: 10, rating: 4.8, reviewCount: 79, featured: false, discount: 10,
      priceBasic: 990, priceStandard: 1290, pricePremium: 1750,
      summary: '6 დღიანი მარშრუტი ბავშვებთან ერთად მოსაგზავრებლად — თბილისი, ბორჯომი-ბაკურიანი და ერთი დღით ზღვასთან.',
      inclusions: ['ოჯახური ოთახები სასტუმროებში', 'ტრანსპორტი მთელი მარშრუტისთვის', 'გიდი', 'ბავშვებისთვის ფასდაკლება'],
      exclusions: ['ფრენა', 'ზოგიერთი კვება'],
      meetingPoint: 'თბილისის საერთაშორისო აეროპორტი',
      languages: ['ქართული', 'ინგლისური'],
      itinerary: [
        itin(1, 'ჩამოსვლა თბილისში', 'დასახლება, მსუბუქი სეირნობა.'),
        itin(2, 'თბილისი ბავშვებთან ერთად', 'ფუნიკულიორი, პარკი, ატრაქციონები.'),
        itin(3, 'ბორჯომი-ბაკურიანი', 'მინერალური წყლის პარკი, საბაგირო.'),
        itin(4, 'ბაკურიანი — ბუნება', 'ტყის სეირნობა, ცხენოსნობა (მოთხოვნით).'),
        itin(5, 'დაბრუნება თბილისში', 'თავისუფალი დღე შოპინგისთვის.'),
        itin(6, 'გამგზავრება', 'ტრანსფერი აეროპორტამდე.')
      ],
      theme: 'th-6', icon: 'leaf',
      reviews: [
        { name: 'თეა ბ.', initials: 'თბ', rating: 5, date: '2026-06-28', text: 'ბავშვები აღფრთოვანებულები დარჩნენ, ტემპი ზუსტად მათზე იყო მორგებული.', verified: true }
      ]
    },
    {
      id: 't12', slug: 'tbilisi-kazbegi-2day', destinationId: 'd2', title: 'თბილისი–ყაზბეგი უიკენდი',
      type: 'adventure', typeLabel: 'სათავგადასავლო', durationDays: 2, difficulty: 'moderate', difficultyLabel: 'საშუალო',
      groupMin: 2, groupMax: 12, rating: 4.8, reviewCount: 59, featured: false, discount: 0,
      priceBasic: 220, priceStandard: 310, pricePremium: 430,
      summary: 'უიკენდის მარშრუტი — პირველი დღე თბილისის ძველ უბანში, მეორე დღე ყაზბეგში ლაშქრობით.',
      inclusions: ['სასტუმრო თბილისში', 'ტრანსპორტი ყაზბეგისკენ', 'გიდი', 'საუზმე'],
      exclusions: ['სადილ-ვახშმები', 'პირადი ხარჯები'],
      meetingPoint: 'თავისუფლების მოედანი, თბილისი',
      languages: ['ქართული', 'ინგლისური'],
      itinerary: [
        itin(1, 'თბილისის ძველი ქალაქი', 'გიდით სეირნობა, საღამო თავისუფალი.'),
        itin(2, 'ყაზბეგი', 'გასვლა დილით ადრე, ასვლა გერგეტის სამებამდე, საღამოს დაბრუნება.')
      ],
      theme: 'th-1', icon: 'mountain',
      reviews: [
        { name: 'სანდრო ვ.', initials: 'სვ', rating: 5, date: '2026-08-10', text: 'ორ დღეში ორივე მხარე ვნახეთ — საუკეთესო ვარიანტი მოკლე ვიზიტისთვის.', verified: true }
      ]
    }
  ];

  var blogPosts = [
    {
      id: 'b1', slug: 'packing-list-georgia', title: 'რას ჩავალაგოთ საქართველოში მოსაგზავრებლად', category: 'რჩევები',
      author: 'ნინო ხარაზი', publishedAt: '2026-05-12', readMinutes: 6, theme: 'th-2', icon: 'city',
      excerpt: 'სეზონისა და მარშრუტის მიხედვით მორგებული ჩამონათვალი — მთიდან ზღვამდე.',
      content: [
        'საქართველოში ერთდროულად შეხვდებით მთასაც და ზღვასაც, ამიტომ ჩანთის დაწყობა დამოკიდებულია იმაზე, სად მიემგზავრებით.',
        'მთის რეგიონებში (ყაზბეგი, სვანეთი, თუშეთი) აუცილებელია თბილი ფენები ზაფხულშიც კი — საღამოს ტემპერატურა მკვეთრად ეცემა.',
        'ბათუმისა და დაბლობის მარშრუტებისთვის საკმარისია მსუბუქი ტანსაცმელი და მზისგან დამცავი საშუალებები.',
        'ხანგრძლივი ლაშქრობის მარშრუტებისთვის აუცილებელია მოსახერხებელი ფეხსაცმელი და წყლის მინიმუმ 1.5 ლიტრი ერთ ადამიანზე.'
      ]
    },
    {
      id: 'b2', slug: 'best-time-visit-georgia', title: 'როდის ჩამოხვიდეთ საქართველოში: სეზონების გზამკვლევი', category: 'დაგეგმვა',
      author: 'გიორგი მაისურაძე', publishedAt: '2026-03-04', readMinutes: 7, theme: 'th-6', icon: 'leaf',
      excerpt: 'თითოეულ სეზონს თავისი დანიშნულებები აქვს — გირჩევთ, როგორ დაგეგმოთ მარშრუტი თვეების მიხედვით.',
      content: [
        'გაზაფხული (აპრილი-ივნისი) იდეალურია თბილისისა და კახეთისთვის — ბუნება მწვანეა და ტემპერატურა კომფორტული.',
        'ზაფხული (ივლისი-აგვისტო) საუკეთესოა მთის მარშრუტებისთვის — სვანეთი, ყაზბეგი და თუშეთი მხოლოდ ამ პერიოდში ხდება სრულად ხელმისაწვდომი.',
        'შემოდგომა (სექტემბერი-ოქტომბერი) რთველის სეზონია კახეთში და საუკეთესო დროა ღვინის ტურებისთვის.',
        'ზამთარი (დეკემბერი-მარტი) მოსახერხებელია ბაკურიან-გუდაურის სამთო-სათხილამურო კურორტებისთვის.'
      ]
    },
    {
      id: 'b3', slug: 'georgian-cuisine-guide', title: 'ქართული სამზარეულოს გზამკვლევი დამწყებთათვის', category: 'კულინარია',
      author: 'თამარ ბერიძე', publishedAt: '2026-04-18', readMinutes: 5, theme: 'th-5', icon: 'grape',
      excerpt: 'ხინკლიდან ხაჭაპურამდე — რა უნდა გასინჯოთ პირველ ვიზიტზე.',
      content: [
        'ხინკალი — ხორცის წვნიანი პელმენი, საუკეთესოა ხელით ჭამა, ყუნწის დატოვებით.',
        'ხაჭაპური განსხვავდება რეგიონის მიხედვით — აჭარული ყველითა და კვერცხით, იმერული — მხოლოდ ყველით.',
        'ღვინო ქვევრში მზადდება ათასწლეულებია — მოძებნეთ „ქვევრის ღვინო" მენიუში ავთენტური გემოსთვის.',
        'შესანიშნავია აგრეთვე ლობიო, ბადრიჯანი ნიგვზით და ჩურჩხელა — ბუნებრივი ტკბილეული.'
      ]
    },
    {
      id: 'b4', slug: 'svaneti-towers-history', title: 'სვანური კოშკები: ისტორია მთებში', category: 'კულტურა',
      author: 'ლევან წულაძე', publishedAt: '2026-06-22', readMinutes: 8, theme: 'th-4', icon: 'peak',
      excerpt: 'რატომ აშენდა ასობით ქვის კოშკი სვანეთის სოფლებში და რას მოგვითხრობენ ისინი დღეს.',
      content: [
        'სვანური კოშკები აშენდა IX-XIII საუკუნეებში, თავდაცვისა და ოჯახის ქონების შესანახად.',
        'უშგულის თემში დღემდე შემორჩენილია ასეულობით კოშკი, რაც მას იუნესკოს მსოფლიო მემკვიდრეობის ძეგლად აქცევს.',
        'კოშკების არქიტექტურა მორგებულია მკაცრ მთის კლიმატსა და ისტორიულ საფრთხეებზე.',
        'დღეს ბევრი კოშკი გადაკეთებულია მინი-მუზეუმად, სადაც შეგიძლიათ ინტერიერის დათვალიერება.'
      ]
    },
    {
      id: 'b5', slug: 'wine-culture-kakheti', title: 'ქვევრში დაყენებული ღვინო: კახეთის ტრადიცია', category: 'კულინარია',
      author: 'თამარ ბერიძე', publishedAt: '2026-09-02', readMinutes: 6, theme: 'th-5', icon: 'grape',
      excerpt: 'იუნესკოს მიერ აღიარებული ღვინის დაყენების მეთოდი, რომელიც არ შეცვლილა 8000 წელია.',
      content: [
        'ქვევრი — თიხის დიდი ჭურჭელია, რომელიც მიწაშია ჩაფლული და გამოიყენება ღვინის დუღილისა და შენახვისთვის.',
        'მეთოდი შეტანილია იუნესკოს არამატერიალური კულტურული მემკვიდრეობის სიაში.',
        'რთველის სეზონზე (სექტემბერი-ოქტომბერი) ბევრი საოჯახო მარანი სტუმრებს იწვევს ყურძნის დაწურვის პროცესში მონაწილეობისთვის.',
        'კახური ღვინოები ხშირად მუქი ქარვისფერია და მკაფიო, მძაფრი გემო აქვს თეთრსაც კი — მარცვლის კანთან ერთად დუღილის გამო.'
      ]
    },
    {
      id: 'b6', slug: 'hiking-safety-tips', title: 'უსაფრთხო ლაშქრობა საქართველოს მთებში', category: 'რჩევები',
      author: 'ლევან წულაძე', publishedAt: '2026-07-30', readMinutes: 5, theme: 'th-9', icon: 'path',
      excerpt: 'რამდენიმე მარტივი წესი, რომელიც მთის მარშრუტს უსაფრთხოს გახდის.',
      content: [
        'ყოველთვის შეამოწმეთ ამინდის პროგნოზი გასვლამდე — მთის ამინდი სწრაფად იცვლება.',
        'აცნობეთ ვინმეს თქვენი მარშრუტისა და დაბრუნების სავარაუდო დროის შესახებ.',
        'გამოცდილი გიდის თანხლება განსაკუთრებით მნიშვნელოვანია რთულ მარშრუტებზე, როგორიცაა თუშეთი და ზემო სვანეთი.',
        'აიღეთ საკმარისი წყალი, პირველადი დახმარების ნაკრები და დამატებითი თბილი ტანსაცმელი.'
      ]
    }
  ];

  function byId(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function bySlug(list, slug) { for (var i = 0; i < list.length; i++) if (list[i].slug === slug) return list[i]; return null; }

  function allTours() {
    var store = window.HT_STORE;
    if (!store) return tours.slice();
    var added = store.getAddedTours();
    var edits = store.getTourEdits();
    var deleted = store.getDeletedTourIds();
    return tours.concat(added)
      .filter(function (t) { return deleted.indexOf(t.id) === -1; })
      .map(function (t) { return edits[t.id] ? Object.assign({}, t, edits[t.id]) : t; });
  }

  var HT_DATA = {
    destinations: destinations,
    tours: tours,
    blogPosts: blogPosts,

    getAllTours: allTours,

    getDestinations: function () { return destinations.slice(); },
    getDestinationBySlug: function (slug) { return bySlug(destinations, slug); },
    getDestinationById: function (id) { return byId(destinations, id); },

    getTours: function (filters) {
      var list = allTours();
      filters = filters || {};
      if (filters.q) {
        var q = filters.q.trim().toLowerCase();
        list = list.filter(function (t) {
          var dest = byId(destinations, t.destinationId);
          return t.title.toLowerCase().indexOf(q) !== -1 ||
            (dest && dest.name.toLowerCase().indexOf(q) !== -1) ||
            t.summary.toLowerCase().indexOf(q) !== -1;
        });
      }
      if (filters.destinationId) list = list.filter(function (t) { return t.destinationId === filters.destinationId; });
      if (filters.type) list = list.filter(function (t) { return t.type === filters.type; });
      if (filters.difficulty) list = list.filter(function (t) { return t.difficulty === filters.difficulty; });
      if (filters.maxPrice) list = list.filter(function (t) { return t.priceBasic <= filters.maxPrice; });
      if (filters.minDays) list = list.filter(function (t) { return t.durationDays >= filters.minDays; });
      if (filters.maxDays) list = list.filter(function (t) { return t.durationDays <= filters.maxDays; });
      if (filters.sort) {
        var s = filters.sort;
        list.sort(function (a, b) {
          if (s === 'price-asc') return a.priceBasic - b.priceBasic;
          if (s === 'price-desc') return b.priceBasic - a.priceBasic;
          if (s === 'rating') return b.rating - a.rating;
          if (s === 'duration') return a.durationDays - b.durationDays;
          return 0;
        });
      }
      return list;
    },
    getTourBySlug: function (slug) { return bySlug(allTours(), slug); },
    getTourById: function (id) { return byId(allTours(), id); },
    getFeaturedTours: function (limit) { return allTours().filter(function (t) { return t.featured; }).slice(0, limit || 6); },
    getRelatedTours: function (tour, limit) {
      return allTours().filter(function (t) { return t.id !== tour.id && (t.destinationId === tour.destinationId || t.type === tour.type); }).slice(0, limit || 3);
    },
    finalPrice: function (tour, tier) {
      var base = tier === 'premium' ? tour.pricePremium : (tier === 'standard' ? tour.priceStandard : tour.priceBasic);
      if (!tour.discount) return base;
      return Math.round(base * (1 - tour.discount / 100));
    },

    getBlogPosts: function () { return blogPosts.slice().sort(function (a, b) { return a.publishedAt < b.publishedAt ? 1 : -1; }); },
    getPostBySlug: function (slug) { return bySlug(blogPosts, slug); },
    getRelatedPosts: function (post, limit) {
      return blogPosts.filter(function (p) { return p.id !== post.id && p.category === post.category; }).slice(0, limit || 3);
    }
  };

  window.HT_DATA = HT_DATA;
})();
