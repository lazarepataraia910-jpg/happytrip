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
      "id": "t1",
      "slug": "tbilisi-old-town-walk",
      "destinationId": "d1",
      "title": "თბილისის ძველი ქალაქის ჯადო",
      "type": "cultural",
      "typeLabel": "კულტურული",
      "durationDays": 1,
      "difficulty": "easy",
      "difficultyLabel": "ადვილი",
      "groupMin": 2,
      "groupMax": 15,
      "rating": 0,
      "reviewCount": 0,
      "featured": true,
      "discount": 0,
      "priceBasic": 85,
      "priceStandard": 120,
      "pricePremium": 180,
      "summary": "ნახევარდღიანი ფეხით სეირნობა ძველ თბილისში — ნარიყალადან აბანოთუბნამდე, ადგილობრივი გიდის თანხლებით.",
      "inclusions": [
        "ლიცენზირებული გიდი",
        "ნარიყალას საბაგირო",
        "დეგუსტაცია ადგილობრივ მარანში",
        "ჯგუფური ფოტოსესია"
      ],
      "exclusions": [
        "სადილი",
        "პირადი ხარჯები",
        "სასტუმრო"
      ],
      "meetingPoint": "თავისუფლების მოედანი, მეტროს გამოსასვლელთან",
      "languages": [
        "ქართული",
        "ინგლისური",
        "რუსული"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "თავისუფლების მოედანი → ძველი ქალაქი",
          "desc": "შეხვედრა გიდთან, სეირნობა სიონის საკათედრო ტაძრამდე და მშრალ ხიდამდე."
        }
      ],
      "theme": "th-2",
      "icon": "city",
      "reviews": []
    },
    {
      "id": "t2",
      "slug": "kazbegi-gergeti",
      "destinationId": "d2",
      "title": "ყაზბეგი და გერგეტის სამება",
      "type": "daytrip",
      "typeLabel": "ერთდღიანი",
      "durationDays": 1,
      "difficulty": "moderate",
      "difficultyLabel": "საშუალო",
      "groupMin": 2,
      "groupMax": 12,
      "rating": 0,
      "reviewCount": 0,
      "featured": true,
      "discount": 10,
      "priceBasic": 110,
      "priceStandard": 150,
      "pricePremium": 220,
      "summary": "გასვლა თბილისიდან სამხედრო გზით, გაჩერებები ანანურის ციხესთან და ჟინვალის წყალსაცავთან, ასვლა გერგეტის სამებამდე.",
      "inclusions": [
        "ტრანსპორტი კომფორტული მიკროავტობუსით",
        "გიდი",
        "4x4-ით ასვლა ეკლესიამდე",
        "შუადღის ერთი კერძი"
      ],
      "exclusions": [
        "დამატებითი კვება",
        "პირადი ხარჯები"
      ],
      "meetingPoint": "დიდუბის ავტოსადგური ან სასტუმროდან აყვანა (დამატებით)",
      "languages": [
        "ქართული",
        "ინგლისური"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "თბილისი → ანანური → ჟინვალი → სტეფანწმინდა → გერგეტი",
          "desc": "გაჩერებები გზაზე, თავისუფალი დრო გერგეტის სამებასთან, დაბრუნება საღამოს."
        }
      ],
      "theme": "th-1",
      "icon": "mountain",
      "reviews": []
    },
    {
      "id": "t3",
      "slug": "svaneti-mestia-ushguli",
      "destinationId": "d4",
      "title": "სვანეთი: მესტია–უშგული",
      "type": "trekking",
      "typeLabel": "მთის ტრეკინგი",
      "durationDays": 4,
      "difficulty": "hard",
      "difficultyLabel": "რთული",
      "groupMin": 4,
      "groupMax": 10,
      "rating": 0,
      "reviewCount": 0,
      "featured": true,
      "discount": 0,
      "priceBasic": 780,
      "priceStandard": 980,
      "pricePremium": 1350,
      "summary": "4 დღიანი მოგზაურობა მესტიაში და უშგულში, კოშკებით სავსე სოფლებში სეირნობით და თეთნულდის პანორამით.",
      "inclusions": [
        "საცხოვრებელი გესთჰაუსებში",
        "ტრანსპორტი მთელი მარშრუტზე",
        "გიდი",
        "საუზმეები"
      ],
      "exclusions": [
        "სადილი და ვახშამი (გარდა 1-ლი დღისა)",
        "სამოგზაურო დაზღვევა"
      ],
      "meetingPoint": "ქუთაისის აეროპორტი ან თბილისი (დამატებითი ტრანსფერი)",
      "languages": [
        "ქართული",
        "ინგლისური"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "თბილისი/ქუთაისი → მესტია",
          "desc": "გზა მთის სერპანტინებით, დასახლება, საღამოს სეირნობა მესტიაში."
        },
        {
          "day": 2,
          "title": "მესტიის მუზეუმი და გარშემო სოფლები",
          "desc": "სვანური კოშკების დათვალიერება, თეთნულდის ხედვის პუნქტამდე ლაშქრობა."
        },
        {
          "day": 3,
          "title": "მესტია → უშგული",
          "desc": "ერთ-ერთი ევროპის უმაღლესი მუდმივად დასახლებული სოფლის მონახულება, თავისუფალი დრო ფოტოებისთვის."
        },
        {
          "day": 4,
          "title": "უშგული → მესტია → გამგზავრება",
          "desc": "დილის სეირნობა, დაბრუნება და ტრანსფერი გამგზავრების პუნქტამდე."
        }
      ],
      "theme": "th-4",
      "icon": "peak",
      "reviews": []
    },
    {
      "id": "t4",
      "slug": "batumi-seaside-escape",
      "destinationId": "d3",
      "title": "ბათუმის საზღვაო დასვენება",
      "type": "seaside",
      "typeLabel": "ზღვისპირა",
      "durationDays": 5,
      "difficulty": "easy",
      "difficultyLabel": "ადვილი",
      "groupMin": 1,
      "groupMax": 20,
      "rating": 0,
      "reviewCount": 0,
      "featured": false,
      "discount": 15,
      "priceBasic": 650,
      "priceStandard": 890,
      "pricePremium": 1290,
      "summary": "5 დღიანი დასვენება ბათუმში საზღვაო სასტუმროში, ბოტანიკური ბაღით და ერთი დღით მთისკენ გასვლით.",
      "inclusions": [
        "სასტუმრო საუზმით",
        "ტრანსფერი აეროპორტიდან",
        "ბოტანიკური ბაღის ბილეთი",
        "ერთდღიანი ტური მთისკენ"
      ],
      "exclusions": [
        "ფრენა",
        "სადილ-ვახშმები",
        "სპა პროცედურები"
      ],
      "meetingPoint": "ბათუმის აეროპორტი",
      "languages": [
        "ქართული",
        "ინგლისური",
        "რუსული"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "ჩამოსვლა და დასახლება",
          "desc": "თავისუფალი საღამო ბულვარზე სეირნობისთვის."
        },
        {
          "day": 2,
          "title": "ძველი ბათუმი და ბულვარი",
          "desc": "გიდით სეირნობა, საღამოს მუსიკალური შადრევანი."
        },
        {
          "day": 3,
          "title": "ბოტანიკური ბაღი",
          "desc": "მთელი დღე ბაღში, საზღვაო ხედებით."
        },
        {
          "day": 4,
          "title": "გასვლა მთისკენ (ხულო/გოდერძი)",
          "desc": "ერთდღიანი ტური აჭარის მთიანეთში."
        },
        {
          "day": 5,
          "title": "თავისუფალი დრო და გამგზავრება",
          "desc": "პლაჟზე დასვენება, ტრანსფერი აეროპორტამდე."
        }
      ],
      "theme": "th-3",
      "icon": "wave",
      "reviews": []
    },
    {
      "id": "t5",
      "slug": "kakheti-wine-tour",
      "destinationId": "d5",
      "title": "კახეთის ღვინის მარშრუტი",
      "type": "wine",
      "typeLabel": "ღვინის ტური",
      "durationDays": 2,
      "difficulty": "easy",
      "difficultyLabel": "ადვილი",
      "groupMin": 2,
      "groupMax": 14,
      "rating": 0,
      "reviewCount": 0,
      "featured": true,
      "discount": 0,
      "priceBasic": 240,
      "priceStandard": 340,
      "pricePremium": 490,
      "summary": "ორდღიანი მოგზაურობა კახეთში — საოჯახო მარნები, ქვევრში ღვინის დაყენების ტრადიცია და სიღნაღის ღამისთევა.",
      "inclusions": [
        "ტრანსპორტი",
        "გიდი",
        "ღვინის დეგუსტაცია 3 მარანში",
        "ღამისთევა სასტუმროში სიღნაღში",
        "ერთი სადილი"
      ],
      "exclusions": [
        "დამატებითი ღვინის შეძენა",
        "ვახშამი მე-2 დღეს"
      ],
      "meetingPoint": "დიდუბის ავტოსადგური, თბილისი",
      "languages": [
        "ქართული",
        "ინგლისური"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "თბილისი → წინანდალი → სიღნაღი",
          "desc": "წინანდლის მამულის მონახულება, საღამოს ღამისთევა სიღნაღში."
        },
        {
          "day": 2,
          "title": "ბოდბე → საოჯახო მარანი → თბილისი",
          "desc": "ბოდბის მონასტერი, ქვევრში ღვინის დამზადების დემონსტრაცია, დაბრუნება."
        }
      ],
      "theme": "th-5",
      "icon": "grape",
      "reviews": []
    },
    {
      "id": "t6",
      "slug": "borjomi-nature-spa",
      "destinationId": "d6",
      "title": "ბორჯომი-ბაკურიანის ბუნება",
      "type": "family",
      "typeLabel": "საოჯახო",
      "durationDays": 2,
      "difficulty": "easy",
      "difficultyLabel": "ადვილი",
      "groupMin": 2,
      "groupMax": 16,
      "rating": 0,
      "reviewCount": 0,
      "featured": false,
      "discount": 0,
      "priceBasic": 260,
      "priceStandard": 360,
      "pricePremium": 520,
      "summary": "ორდღიანი საოჯახო მოგზაურობა ბორჯომში — მინერალური წყლის პარკი, საბაგირო და ბაკურიანის ტყეები.",
      "inclusions": [
        "ტრანსპორტი",
        "გიდი",
        "საბაგიროს ბილეთი",
        "ერთი ღამე სასტუმროში"
      ],
      "exclusions": [
        "კვება (გარდა საუზმისა)",
        "დამატებითი გასართობები"
      ],
      "meetingPoint": "დიდუბის ავტოსადგური, თბილისი",
      "languages": [
        "ქართული",
        "ინგლისური",
        "რუსული"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "თბილისი → ბორჯომი",
          "desc": "მინერალური წყლის პარკი, საბაგირო, თავისუფალი საღამო."
        },
        {
          "day": 2,
          "title": "ბაკურიანი → თბილისი",
          "desc": "ტყის სეირნობა, დაბრუნება საღამოს."
        }
      ],
      "theme": "th-6",
      "icon": "leaf",
      "reviews": []
    },
    {
      "id": "t7",
      "slug": "vardzia-akhaltsikhe",
      "destinationId": "d7",
      "title": "ვარძია და რაბათის ციხე",
      "type": "cultural",
      "typeLabel": "კულტურული",
      "durationDays": 1,
      "difficulty": "moderate",
      "difficultyLabel": "საშუალო",
      "groupMin": 2,
      "groupMax": 15,
      "rating": 0,
      "reviewCount": 0,
      "featured": false,
      "discount": 0,
      "priceBasic": 95,
      "priceStandard": 135,
      "pricePremium": 190,
      "summary": "ერთდღიანი ტური კლდეში ნაკვეთ ვარძიის მონასტერსა და ახალციხის რაბათის ციხე-სიმაგრეში.",
      "inclusions": [
        "ტრანსპორტი",
        "გიდი",
        "ორივე ობიექტის ბილეთი"
      ],
      "exclusions": [
        "სადილი",
        "პირადი ხარჯები"
      ],
      "meetingPoint": "დიდუბის ავტოსადგური, თბილისი",
      "languages": [
        "ქართული",
        "ინგლისური"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "თბილისი → ახალციხე (რაბათი) → ვარძია → თბილისი",
          "desc": "დილით რაბათის ციხე, შუადღეს ვარძია, საღამოს დაბრუნება."
        }
      ],
      "theme": "th-7",
      "icon": "castle",
      "reviews": []
    },
    {
      "id": "t8",
      "slug": "martvili-okatse-canyon",
      "destinationId": "d8",
      "title": "მარტვილის და ოქაცეს კანიონები",
      "type": "adventure",
      "typeLabel": "სათავგადასავლო",
      "durationDays": 1,
      "difficulty": "moderate",
      "difficultyLabel": "საშუალო",
      "groupMin": 2,
      "groupMax": 12,
      "rating": 0,
      "reviewCount": 0,
      "featured": true,
      "discount": 5,
      "priceBasic": 100,
      "priceStandard": 140,
      "pricePremium": 200,
      "summary": "ერთდღიანი ტური ორ ულამაზეს კანიონში — ნავით სეირნობა მარტვილში და შუშის ბილიკი ოქაცეში.",
      "inclusions": [
        "ტრანსპორტი",
        "გიდი",
        "ნავით სეირნობის ბილეთი",
        "ორივე კანიონის შესასვლელი"
      ],
      "exclusions": [
        "სადილი",
        "პირადი ხარჯები"
      ],
      "meetingPoint": "ქუთაისის ცენტრი (თბილისიდან დამატებითი ტრანსფერით)",
      "languages": [
        "ქართული",
        "ინგლისური"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "ქუთაისი → მარტვილის კანიონი → ოქაცეს კანიონი → ქუთაისი",
          "desc": "დილით მარტვილი და ნავით სეირნობა, შუადღეს ოქაცეს ბილიკი და ჩანჩქერი."
        }
      ],
      "theme": "th-8",
      "icon": "canyon",
      "reviews": []
    },
    {
      "id": "t9",
      "slug": "tusheti-highland-trek",
      "destinationId": "d9",
      "title": "თუშეთის მთის ტრეკინგი",
      "type": "trekking",
      "typeLabel": "მთის ტრეკინგი",
      "durationDays": 3,
      "difficulty": "hard",
      "difficultyLabel": "რთული",
      "groupMin": 4,
      "groupMax": 8,
      "rating": 0,
      "reviewCount": 0,
      "featured": false,
      "discount": 0,
      "priceBasic": 590,
      "priceStandard": 760,
      "pricePremium": 990,
      "summary": "3 დღიანი ექსპედიცია აბანოს უღელტეხილზე გავლით თუშეთში, ომალოსა და მიმდებარე სოფლების მონახულებით.",
      "inclusions": [
        "4x4 ტრანსპორტი უღელტეხილზე",
        "გიდი",
        "საცხოვრებელი გესთჰაუსში",
        "საუზმეები"
      ],
      "exclusions": [
        "სადილ-ვახშმები",
        "სამოგზაურო დაზღვევა"
      ],
      "meetingPoint": "თელავი",
      "languages": [
        "ქართული",
        "ინგლისური"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "თელავი → აბანოს უღელტეხილი → ომალო",
          "desc": "გრძელი მთის გზა, ხედები კავკასიონზე."
        },
        {
          "day": 2,
          "title": "ომალო → დარტლო → სოფლების ლაშქრობა",
          "desc": "ლაშქრობა ისტორიულ სოფლებს შორის."
        },
        {
          "day": 3,
          "title": "ომალო → აბანოს უღელტეხილი → თელავი",
          "desc": "დაბრუნება, გზაში დამატებითი გაჩერებები."
        }
      ],
      "theme": "th-9",
      "icon": "path",
      "reviews": []
    },
    {
      "id": "t10",
      "slug": "grand-georgia-luxury",
      "destinationId": "d1",
      "title": "დიდი საქართველო: ლუქს ტური",
      "type": "luxury",
      "typeLabel": "ლუქსი",
      "durationDays": 7,
      "difficulty": "easy",
      "difficultyLabel": "ადვილი",
      "groupMin": 2,
      "groupMax": 6,
      "rating": 0,
      "reviewCount": 0,
      "featured": true,
      "discount": 0,
      "priceBasic": 1890,
      "priceStandard": 2450,
      "pricePremium": 3400,
      "summary": "7 დღიანი პრემიუმ მარშრუტი — თბილისი, კახეთი, ყაზბეგი და სვანეთი, საუკეთესო სასტუმროებით და პირადი გიდით.",
      "inclusions": [
        "პირადი გიდი მთელი მარშრუტისთვის",
        "4-5 ვარსკვლავიანი სასტუმროები",
        "ყველა ტრანსფერი კომფორტული მანქანით",
        "შერჩეული სადილ-ვახშმები საუკეთესო რესტორნებში"
      ],
      "exclusions": [
        "საერთაშორისო ფრენა",
        "პირადი ხარჯები",
        "სპა პროცედურები"
      ],
      "meetingPoint": "თბილისის საერთაშორისო აეროპორტი",
      "languages": [
        "ქართული",
        "ინგლისური",
        "რუსული",
        "ფრანგული (მოთხოვნით)"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "ჩამოსვლა თბილისში",
          "desc": "პირადი ტრანსფერი, დასახლება, მისალმების ვახშამი."
        },
        {
          "day": 2,
          "title": "თბილისის კერძო ტური",
          "desc": "ძველი ქალაქი, აბანოები, ღვინის დეგუსტაცია."
        },
        {
          "day": 3,
          "title": "კახეთი — ღვინის მამულები",
          "desc": "პრემიუმ მარნების ვიზიტი, ვახშამი მამულში."
        },
        {
          "day": 4,
          "title": "ყაზბეგი",
          "desc": "გერგეტის სამება, ხედების პუნქტები."
        },
        {
          "day": 5,
          "title": "გადაადგილება სვანეთისკენ",
          "desc": "ფრენა ან კერძო ტრანსფერი მესტიაში."
        },
        {
          "day": 6,
          "title": "სვანეთის მარშრუტები",
          "desc": "უშგული და მთის პანორამები."
        },
        {
          "day": 7,
          "title": "დაბრუნება და გამგზავრება",
          "desc": "ტრანსფერი აეროპორტამდე."
        }
      ],
      "theme": "th-2",
      "icon": "city",
      "reviews": []
    },
    {
      "id": "t11",
      "slug": "family-georgia-week",
      "destinationId": "d1",
      "title": "ოჯახური მოგზაურობა საქართველოში",
      "type": "family",
      "typeLabel": "საოჯახო",
      "durationDays": 6,
      "difficulty": "easy",
      "difficultyLabel": "ადვილი",
      "groupMin": 2,
      "groupMax": 10,
      "rating": 0,
      "reviewCount": 0,
      "featured": false,
      "discount": 10,
      "priceBasic": 990,
      "priceStandard": 1290,
      "pricePremium": 1750,
      "summary": "6 დღიანი მარშრუტი ბავშვებთან ერთად მოსაგზავრებლად — თბილისი, ბორჯომი-ბაკურიანი და ერთი დღით ზღვასთან.",
      "inclusions": [
        "ოჯახური ოთახები სასტუმროებში",
        "ტრანსპორტი მთელი მარშრუტისთვის",
        "გიდი",
        "ბავშვებისთვის ფასდაკლება"
      ],
      "exclusions": [
        "ფრენა",
        "ზოგიერთი კვება"
      ],
      "meetingPoint": "თბილისის საერთაშორისო აეროპორტი",
      "languages": [
        "ქართული",
        "ინგლისური"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "ჩამოსვლა თბილისში",
          "desc": "დასახლება, მსუბუქი სეირნობა."
        },
        {
          "day": 2,
          "title": "თბილისი ბავშვებთან ერთად",
          "desc": "ფუნიკულიორი, პარკი, ატრაქციონები."
        },
        {
          "day": 3,
          "title": "ბორჯომი-ბაკურიანი",
          "desc": "მინერალური წყლის პარკი, საბაგირო."
        },
        {
          "day": 4,
          "title": "ბაკურიანი — ბუნება",
          "desc": "ტყის სეირნობა, ცხენოსნობა (მოთხოვნით)."
        },
        {
          "day": 5,
          "title": "დაბრუნება თბილისში",
          "desc": "თავისუფალი დღე შოპინგისთვის."
        },
        {
          "day": 6,
          "title": "გამგზავრება",
          "desc": "ტრანსფერი აეროპორტამდე."
        }
      ],
      "theme": "th-6",
      "icon": "leaf",
      "reviews": []
    },
    {
      "id": "t12",
      "slug": "tbilisi-kazbegi-2day",
      "destinationId": "d2",
      "title": "თბილისი–ყაზბეგი უიკენდი",
      "type": "adventure",
      "typeLabel": "სათავგადასავლო",
      "durationDays": 2,
      "difficulty": "moderate",
      "difficultyLabel": "საშუალო",
      "groupMin": 2,
      "groupMax": 12,
      "rating": 0,
      "reviewCount": 0,
      "featured": false,
      "discount": 0,
      "priceBasic": 220,
      "priceStandard": 310,
      "pricePremium": 430,
      "summary": "უიკენდის მარშრუტი — პირველი დღე თბილისის ძველ უბანში, მეორე დღე ყაზბეგში ლაშქრობით.",
      "inclusions": [
        "სასტუმრო თბილისში",
        "ტრანსპორტი ყაზბეგისკენ",
        "გიდი",
        "საუზმე"
      ],
      "exclusions": [
        "სადილ-ვახშმები",
        "პირადი ხარჯები"
      ],
      "meetingPoint": "თავისუფლების მოედანი, თბილისი",
      "languages": [
        "ქართული",
        "ინგლისური"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "თბილისის ძველი ქალაქი",
          "desc": "გიდით სეირნობა, საღამო თავისუფალი."
        },
        {
          "day": 2,
          "title": "ყაზბეგი",
          "desc": "გასვლა დილით ადრე, ასვლა გერგეტის სამებამდე, საღამოს დაბრუნება."
        }
      ],
      "theme": "th-1",
      "icon": "mountain",
      "reviews": []
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

  function byId(list, id) { for (var i = 0; i < list.length; i++) if (String(list[i].id) === String(id)) return list[i]; return null; }
  function bySlug(list, slug) { for (var i = 0; i < list.length; i++) if (list[i].slug === slug) return list[i]; return null; }

  function allTours() { return tours.slice(); }

  // ---------- Supabase (destinations/tours/reviews live there; falls back to the
  // seed arrays above if the project is unreachable or empty) ----------
  var SUPABASE_URL = 'https://pwbjpsffmnzxpfqbfkjt.supabase.co';
  var SUPABASE_KEY = 'sb_publishable_zfRZHdcza9cQPW4b4UWubA_kFxrL0Xp';
  var sbReadyPromise = null;

  function sbFetch(path, options) {
    options = options || {};
    var headers = Object.assign(
      { apikey: SUPABASE_KEY, Authorization: 'Bearer ' + SUPABASE_KEY, 'Content-Type': 'application/json' },
      options.headers || {}
    );
    return fetch(SUPABASE_URL + '/rest/v1/' + path, Object.assign({}, options, { headers: headers })).then(function (res) {
      return res.text().then(function (text) {
        if (!res.ok) throw new Error('Supabase ' + path + ' -> ' + res.status + ': ' + text);
        return text ? JSON.parse(text) : null;
      });
    });
  }

  var sbClient = null;
  var sbClientPromise = null;
  function getSupabaseClient() {
    if (sbClientPromise) return sbClientPromise;
    sbClientPromise = new Promise(function (resolve) {
      function makeClient() {
        sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        resolve(sbClient);
      }
      if (window.supabase && window.supabase.createClient) { makeClient(); return; }
      var existing = document.getElementById('supabaseSdk');
      if (existing) { existing.addEventListener('load', makeClient); return; }
      var s = document.createElement('script');
      s.id = 'supabaseSdk';
      s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js';
      s.onload = makeClient;
      document.head.appendChild(s);
    });
    return sbClientPromise;
  }

  function mapDestRow(row) {
    return {
      id: row.id, slug: row.slug, name: row.name, region: row.region, theme: row.theme, icon: row.icon,
      tagline: row.tagline, description: row.description, bestTime: row.best_time, climate: row.climate,
      highlights: row.highlights || [], tips: row.tips || []
    };
  }
  function mapReviewRow(row) {
    var initials = (row.name || '').trim().split(/\s+/).map(function (w) { return w.charAt(0); }).join('').slice(0, 2);
    return { name: row.name, initials: initials, rating: row.rating, date: (row.created_at || '').slice(0, 10), text: row.text, verified: row.verified };
  }
  function mapTourRow(row, reviewsByTourId) {
    return {
      id: row.id, slug: row.slug, title: row.title, destinationId: row.destination_id,
      type: row.type, typeLabel: row.type_label, durationDays: row.duration_days,
      difficulty: row.difficulty, difficultyLabel: row.difficulty_label,
      groupMin: row.group_min, groupMax: row.group_max,
      priceBasic: row.price_basic, priceStandard: row.price_standard, pricePremium: row.price_premium,
      discount: row.discount, summary: row.summary,
      inclusions: row.inclusions || [], exclusions: row.exclusions || [],
      meetingPoint: row.meeting_point, languages: row.languages || [],
      itinerary: row.itinerary || [], theme: row.theme, icon: row.icon,
      images: row.images || [],
      featured: row.featured, rating: row.rating, reviewCount: row.review_count,
      reviews: (reviewsByTourId[row.id] || []).map(mapReviewRow)
    };
  }

  function refreshFromSupabase() {
    return Promise.all([
      sbFetch('destinations?select=*&order=id'),
      sbFetch('tours?select=*&order=id'),
      sbFetch('reviews?select=*')
    ]).then(function (results) {
      var destRows = results[0] || [], tourRows = results[1] || [], reviewRows = results[2] || [];
      var reviewsByTourId = {};
      reviewRows.forEach(function (r) { (reviewsByTourId[r.tour_id] = reviewsByTourId[r.tour_id] || []).push(r); });
      if (destRows.length) {
        var mappedDests = destRows.map(mapDestRow);
        destinations.length = 0;
        Array.prototype.push.apply(destinations, mappedDests);
      }
      if (tourRows.length) {
        var mappedTours = tourRows.map(function (row) { return mapTourRow(row, reviewsByTourId); });
        tours.length = 0;
        Array.prototype.push.apply(tours, mappedTours);
      }
    });
  }

  function ready() {
    if (!sbReadyPromise) {
      sbReadyPromise = refreshFromSupabase().catch(function (err) {
        console.warn('Supabase unavailable, using local seed data.', err);
      });
    }
    return sbReadyPromise;
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
      if (filters.destinationId) list = list.filter(function (t) { return String(t.destinationId) === String(filters.destinationId); });
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
    },

    ready: ready,
    refresh: refreshFromSupabase,
    getSupabaseClient: getSupabaseClient,
    getAdminSession: function () {
      return getSupabaseClient().then(function (client) { return client.auth.getSession(); })
        .then(function (res) { return (res.data && res.data.session) || null; });
    },
    adminAddTour: function (fields) {
      return getSupabaseClient().then(function (client) { return client.from('tours').insert([fields]); })
        .then(function (res) { if (res.error) throw res.error; return refreshFromSupabase(); });
    },
    adminUpdateTour: function (id, fields) {
      return getSupabaseClient().then(function (client) { return client.from('tours').update(fields).eq('id', id); })
        .then(function (res) { if (res.error) throw res.error; return refreshFromSupabase(); });
    },
    adminDeleteTour: function (id) {
      return getSupabaseClient().then(function (client) { return client.from('tours').delete().eq('id', id); })
        .then(function (res) { if (res.error) throw res.error; return refreshFromSupabase(); });
    },
    adminUploadTourImage: function (tourSlug, file) {
      var path = 'tours/' + tourSlug + '/' + Date.now() + '-' + file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      return getSupabaseClient().then(function (client) {
        return client.storage.from('happytrip-images').upload(path, file).then(function (res) {
          if (res.error) throw res.error;
          return client.storage.from('happytrip-images').getPublicUrl(path).data.publicUrl;
        });
      });
    },
    adminDeleteTourImage: function (url) {
      var marker = '/happytrip-images/';
      var idx = url.indexOf(marker);
      if (idx === -1) return Promise.resolve();
      var path = url.slice(idx + marker.length);
      return getSupabaseClient().then(function (client) {
        return client.storage.from('happytrip-images').remove([path]);
      });
    }
  };

  window.HT_DATA = HT_DATA;
})();
