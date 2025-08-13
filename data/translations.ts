export const translations: Record<'hindi' | 'english' | 'bengali' | 'marathi' | 'punjabi' | 'tamil' | 'telugu' | 'gujarati' | 'kannada' | 'malayalam', { [key: string]: string }> = {
  hindi: {
    // Common
    welcome: 'स्वागत',
    home: 'होम',
    marketplace: 'बाज़ार',
    buy: 'खरीदें',
    sell: 'बेचें',
    academy: 'अकादमी',
    help: 'सहायता',
    
    // Home Screen
    welcomeUser: 'स्वागत, {{name}}',
    weather: 'मौसम',
    cropRecommendation: 'फसल सुझाव',
    solarPlanner: 'सोलर कमाई',
    marketPrices: 'बाजार भाव',
    pestAlert: 'कीट चेतावनी',
    
    // Crop Recommendation
    soilType: 'मिट्टी का प्रकार',
    farmSize: 'खेत का आकार',
    irrigationSource: 'सिंचाई का स्रोत',
    getRecommendations: 'सुझाव पाएं',
    estimatedYield: 'अनुमानित उत्पादन',
    marketPrice: 'बाजार मूल्य',
    totalProfit: 'कुल लाभ',
    tellUsAboutYourFarm: 'हमें अपने खेत के बारे में बताएं',
    recommendedCrops: 'आपके खेत के लिए अनुशंसित फसलें',
    basedOn: '{{soil}} मिट्टी, {{size}} एकड़, {{irrigation}} सिंचाई के आधार पर',
    getNewRecommendations: 'नई सिफारिशें प्राप्त करें',

    // Marketplace
    seeds: 'बीज',
    fertilizers: 'उर्वरक',
    pesticides: 'कीटनाशक',
    tools: 'उपकरण',
    groupBuy: 'सामूहिक खरीद',
    addToCart: 'कार्ट में डालें',
    
    // Sell Screen
    cropName: 'फसल का नाम',
    quantity: 'मात्रा (क्विंटल में)',
    expectedPrice: 'अपेक्षित मूल्य',
    uploadPhoto: 'फोटो अपलोड करें',
    postListing: 'सूची में डालें',
    activeBids: 'सक्रिय बोलियां',
    postYourHarvest: 'अपनी फसल पोस्ट करें',
    cropNamePlaceholder: 'जैसे, गेहूं, चावल, गन्ना',
    quantityPlaceholder: 'क्विंटल में मात्रा दर्ज करें',
    pricePlaceholder: 'प्रति क्विंटल मूल्य (₹)',
    accept: 'स्वीकार करें',

    // Academy
    coinsEarned: 'कमाए गए सिक्के',
    watchVideo: 'वीडियो देखें',
    
    // Help
    govSchemes: 'सरकारी योजनाएं',
    callHelpline: 'हेल्पलाइन कॉल करें',
    eligibility: 'पात्रता',
    faq: 'अक्सर पूछे जाने वाले प्रश्न',
    voiceAssistantQuestion: 'मैं वॉयस असिस्टेंट का उपयोग कैसे करूं?',
    voiceAssistantAnswer: 'ऐप में कहीं भी माइक्रोफ़ोन आइकन पर टैप करें और अपना प्रश्न हिंदी या अंग्रेजी में बोलें।',
    recommendationAccuracyQuestion: 'फसल की सिफारिशें कितनी सटीक हैं?',
    recommendationAccuracyAnswer: 'हमारा AI 85%+ सटीक सिफारिशें प्रदान करने के लिए स्थानीय मौसम डेटा, मिट्टी की स्थिति और बाजार के रुझान का उपयोग करता है।',
    solarCalculatorAccuracyQuestion: 'क्या सोलर कैलकुलेटर सटीक है?',
    solarCalculatorAccuracyAnswer: 'हां, यह 10% सटीकता के भीतर संभावित कमाई की गणना करने के लिए उपग्रह डेटा और स्थानीय सौर विकिरण का उपयोग करता है।',

    // Onboarding
    phoneNumber: 'फोन नंबर',
    sendOTP: 'OTP भेजें',
    enterOTP: 'OTP दर्ज करें',
    verify: 'सत्यापित करें',
    name: 'नाम',
    state: 'राज्य',
    district: 'जिला',
    complete: 'पूरा करें',

    // Not Found Screen
    oops: 'ओह!',
    screenNotExist: 'यह स्क्रीन मौजूद नहीं है।',
    goToHome: 'होम स्क्रीन पर जाएं!',

    // Home placeholder
    moreFeaturesComing: 'अधिक सुविधाएं जल्द ही आ रही हैं',

    // Placeholder
    marketPricesPlaceholder: 'बाजार मूल्य की जानकारी यहां प्रदर्शित की जाएगी।',
    pestAlertPlaceholder: 'कीट अलर्ट के बारे में जानकारी यहां प्रदर्शित की जाएगी।',
    solarPlannerPlaceholder: 'सौर आय योजनाकार यहां उपलब्ध होगा।',
  },
  english: {
    // Common
    welcome: 'Welcome',
    home: 'Home',
    marketplace: 'Marketplace',
    buy: 'Buy',
    sell: 'Sell',
    academy: 'Academy',
    help: 'Help',
    
    // Home Screen
    welcomeUser: 'Welcome, {{name}}',
    weather: 'Weather',
    cropRecommendation: 'Crop Recommendation',
    solarPlanner: 'Solar Income Planner',
    marketPrices: 'Market Prices',
    pestAlert: 'Pest Alert',
    
    // Crop Recommendation
    soilType: 'Soil Type',
    farmSize: 'Farm Size',
    irrigationSource: 'Irrigation Source',
    getRecommendations: 'Get Recommendations',
    estimatedYield: 'Estimated Yield',
    marketPrice: 'Market Price',
    totalProfit: 'Total Profit',
    tellUsAboutYourFarm: 'Tell us about your farm',
    recommendedCrops: 'Recommended crops for your farm',
    basedOn: 'Based on {{soil}} soil, {{size}} acres, {{irrigation}} irrigation',
    getNewRecommendations: 'Get New Recommendations',
    
    // Marketplace
    seeds: 'Seeds',
    fertilizers: 'Fertilizers',
    pesticides: 'Pesticides',
    tools: 'Tools',
    groupBuy: 'Group Buy',
    addToCart: 'Add to Cart',
    
    // Sell Screen
    cropName: 'Crop Name',
    quantity: 'Quantity (in Quintals)',
    expectedPrice: 'Expected Price',
    uploadPhoto: 'Upload Photo',
    postListing: 'Post Listing',
    activeBids: 'Active Bids',
    postYourHarvest: 'Post Your Harvest',
    cropNamePlaceholder: 'e.g., Wheat, Rice, Sugarcane',
    quantityPlaceholder: 'Enter quantity in quintals',
    pricePlaceholder: 'Price per quintal (₹)',
    accept: 'Accept',
    
    // Academy
    coinsEarned: 'Coins Earned',
    watchVideo: 'Watch Video',
    
    // Help
    govSchemes: 'Government Schemes',
    callHelpline: 'Call Helpline',
    eligibility: 'Eligibility',
    faq: 'Frequently Asked Questions',
    voiceAssistantQuestion: 'How do I use the voice assistant?',
    voiceAssistantAnswer: 'Tap the microphone icon anywhere in the app and speak your question in Hindi or English.',
    recommendationAccuracyQuestion: 'How accurate are the crop recommendations?',
    recommendationAccuracyAnswer: 'Our AI uses local weather data, soil conditions, and market trends to provide 85%+ accurate recommendations.',
    solarCalculatorAccuracyQuestion: 'Is the solar calculator accurate?',
    solarCalculatorAccuracyAnswer: 'Yes, it uses satellite data and local solar irradiance to calculate potential earnings within 10% accuracy.',

    // Onboarding
    phoneNumber: 'Phone Number',
    sendOTP: 'Send OTP',
    enterOTP: 'Enter OTP',
    verify: 'Verify',
    name: 'Name',
    state: 'State',
    district: 'District',
    complete: 'Complete',
    
    // Not Found Screen
    oops: 'Oops!',
    screenNotExist: "This screen doesn't exist.",
    goToHome: 'Go to home screen!',

    // Home placeholder
    moreFeaturesComing: 'More features coming soon',

    // Placeholder
    marketPricesPlaceholder: 'Market price information will be displayed here.',
    pestAlertPlaceholder: 'Information about pest alerts will be displayed here.',
    solarPlannerPlaceholder: 'The solar income planner will be available here.',
  },
  bengali: {
    // Common
    welcome: 'স্বাগতম',
    home: 'হোম',
    marketplace: 'বাজার',
    buy: 'কিনুন',
    sell: 'বিক্রি করুন',
    academy: 'একাডেমি',
    help: 'সাহায্য',
    
    // Home Screen
    welcomeUser: 'স্বাগতম, {{name}}',
    weather: 'আবহাওয়া',
    cropRecommendation: 'ফসল সুপারিশ',
    solarPlanner: 'সৌর আয় পরিকল্পনাকারী',
    marketPrices: 'বাজার দাম',
    pestAlert: 'কীটপতঙ্গ সতর্কতা',
    
    // Crop Recommendation
    soilType: 'মাটির ধরন',
    farmSize: 'খামারের আকার',
    irrigationSource: 'সেচের উৎস',
    getRecommendations: 'সুপারিশ পান',
    estimatedYield: 'আনুমানিক ফলন',
    marketPrice: 'বাজার মূল্য',
    totalProfit: 'মোট লাভ',
    tellUsAboutYourFarm: 'আপনার খামার সম্পর্কে বলুন',
    recommendedCrops: 'আপনার খামারের জন্য প্রস্তাবিত ফসল',
    basedOn: '{{soil}} মাটি, {{size}} একর, {{irrigation}} সেচের উপর ভিত্তি করে',
    getNewRecommendations: 'নতুন সুপারিশ পান',

    // Marketplace
    seeds: 'বীজ',
    fertilizers: 'সার',
    pesticides: 'কীটনাশক',
    tools: 'যন্ত্রপাতি',
    groupBuy: 'গ্রুপ কেনাকাটা',
    addToCart: 'কার্টে যোগ করুন',
    
    // Sell Screen
    cropName: 'ফসলের নাম',
    quantity: 'পরিমাণ (কুইন্টালে)',
    expectedPrice: 'প্রত্যাশিত দাম',
    uploadPhoto: 'ছবি আপলোড করুন',
    postListing: 'তালিকা পোস্ট করুন',
    activeBids: 'সক্রিয় বিড',
    postYourHarvest: 'আপনার ফসল পোস্ট করুন',
    cropNamePlaceholder: 'যেমন, গম, চাল, আখ',
    quantityPlaceholder: 'কুইন্টালে পরিমাণ লিখুন',
    pricePlaceholder: 'প্রতি কুইন্টাল দাম (₹)',
    accept: 'গ্রহণ করুন',

    // Academy
    coinsEarned: 'অর্জিত কয়েন',
    watchVideo: 'ভিডিও দেখুন',
    
    // Help
    govSchemes: 'সরকারি প্রকল্প',
    callHelpline: 'হেল্পলাইনে কল করুন',
    eligibility: 'যোগ্যতা',
    faq: 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    voiceAssistantQuestion: 'আমি কীভাবে ভয়েস সহায়ক ব্যবহার করব?',
    voiceAssistantAnswer: 'অ্যাপের যেকোনো জায়গায় মাইক্রোফোন আইকনে ট্যাপ করুন এবং বাংলা বা ইংরেজিতে আপনার প্রশ্ন বলুন।',
    recommendationAccuracyQuestion: 'ফসলের সুপারিশ কতটা নির্ভুল?',
    recommendationAccuracyAnswer: 'আমাদের AI স্থানীয় আবহাওয়া ডেটা, মাটির অবস্থা এবং বাজারের প্রবণতা ব্যবহার করে 85%+ নির্ভুল সুপারিশ প্রদান করে।',
    solarCalculatorAccuracyQuestion: 'সৌর ক্যালকুলেটর কি নির্ভুল?',
    solarCalculatorAccuracyAnswer: 'হ্যাঁ, এটি 10% নির্ভুলতার মধ্যে সম্ভাব্য আয় গণনা করতে স্যাটেলাইট ডেটা এবং স্থানীয় সৌর বিকিরণ ব্যবহার করে।',

    // Onboarding
    phoneNumber: 'ফোন নম্বর',
    sendOTP: 'OTP পাঠান',
    enterOTP: 'OTP লিখুন',
    verify: 'যাচাই করুন',
    name: 'নাম',
    state: 'রাজ্য',
    district: 'জেলা',
    complete: 'সম্পূর্ণ করুন',

    // Not Found Screen
    oops: 'ওহ!',
    screenNotExist: 'এই স্ক্রিনটি বিদ্যমান নেই।',
    goToHome: 'হোম স্ক্রিনে যান!',

    // Home placeholder
    moreFeaturesComing: 'আরও বৈশিষ্ট্য শীঘ্রই আসছে',

    // Placeholder
    marketPricesPlaceholder: 'বাজার মূল্যের তথ্য এখানে প্রদর্শিত হবে।',
    pestAlertPlaceholder: 'কীটপতঙ্গ সতর্কতা সম্পর্কে তথ্য এখানে প্রদর্শিত হবে।',
    solarPlannerPlaceholder: 'সৌর আয় পরিকল্পনাকারী এখানে উপলব্ধ হবে।',
  },
  marathi: {
    // Common
    welcome: 'स्वागत',
    home: 'होम',
    marketplace: 'बाजार',
    buy: 'खरेदी करा',
    sell: 'विक्री करा',
    academy: 'अकादमी',
    help: 'मदत',
    
    // Home Screen
    welcomeUser: 'स्वागत, {{name}}',
    weather: 'हवामान',
    cropRecommendation: 'पीक शिफारस',
    solarPlanner: 'सौर उत्पन्न नियोजक',
    marketPrices: 'बाजार भाव',
    pestAlert: 'कीड इशारा',
    
    // Crop Recommendation
    soilType: 'मातीचा प्रकार',
    farmSize: 'शेताचा आकार',
    irrigationSource: 'सिंचनाचा स्रोत',
    getRecommendations: 'शिफारसी मिळवा',
    estimatedYield: 'अंदाजित उत्पादन',
    marketPrice: 'बाजार किंमत',
    totalProfit: 'एकूण नफा',
    tellUsAboutYourFarm: 'आपल्या शेताबद्दल सांगा',
    recommendedCrops: 'आपल्या शेतासाठी शिफारस केलेली पिके',
    basedOn: '{{soil}} माती, {{size}} एकर, {{irrigation}} सिंचनावर आधारित',
    getNewRecommendations: 'नवीन शिफारसी मिळवा',

    // Marketplace
    seeds: 'बियाणे',
    fertilizers: 'खत',
    pesticides: 'कीटकनाशके',
    tools: 'साधने',
    groupBuy: 'गट खरेदी',
    addToCart: 'कार्टमध्ये जोडा',
    
    // Sell Screen
    cropName: 'पिकाचे नाव',
    quantity: 'प्रमाण (क्विंटलमध्ये)',
    expectedPrice: 'अपेक्षित किंमत',
    uploadPhoto: 'फोटो अपलोड करा',
    postListing: 'यादी पोस्ट करा',
    activeBids: 'सक्रिय बोली',
    postYourHarvest: 'आपली कापणी पोस्ट करा',
    cropNamePlaceholder: 'उदा., गहू, तांदूळ, ऊस',
    quantityPlaceholder: 'क्विंटलमध्ये प्रमाण टाका',
    pricePlaceholder: 'प्रति क्विंटल किंमत (₹)',
    accept: 'स्वीकार करा',

    // Academy
    coinsEarned: 'मिळवलेली नाणी',
    watchVideo: 'व्हिडिओ पहा',
    
    // Help
    govSchemes: 'सरकारी योजना',
    callHelpline: 'हेल्पलाइनवर कॉल करा',
    eligibility: 'पात्रता',
    faq: 'वारंवार विचारले जाणारे प्रश्न',
    voiceAssistantQuestion: 'मी व्हॉइस असिस्टंट कसा वापरू?',
    voiceAssistantAnswer: 'अॅपमध्ये कुठेही मायक्रोफोन आयकनवर टॅप करा आणि मराठी किंवा इंग्रजीमध्ये आपला प्रश्न बोला.',
    recommendationAccuracyQuestion: 'पीक शिफारसी किती अचूक आहेत?',
    recommendationAccuracyAnswer: 'आमचा AI स्थानिक हवामान डेटा, मातीची स्थिती आणि बाजारातील ट्रेंड वापरून 85%+ अचूक शिफारसी प्रदान करतो.',
    solarCalculatorAccuracyQuestion: 'सौर कॅल्क्युलेटर अचूक आहे का?',
    solarCalculatorAccuracyAnswer: 'होय, ते 10% अचूकतेच्या आत संभाव्य कमाईची गणना करण्यासाठी उपग्रह डेटा आणि स्थानिक सौर विकिरण वापरते.',

    // Onboarding
    phoneNumber: 'फोन नंबर',
    sendOTP: 'OTP पाठवा',
    enterOTP: 'OTP टाका',
    verify: 'सत्यापित करा',
    name: 'नाव',
    state: 'राज्य',
    district: 'जिल्हा',
    complete: 'पूर्ण करा',

    // Not Found Screen
    oops: 'अरे!',
    screenNotExist: 'ही स्क्रीन अस्तित्वात नाही.',
    goToHome: 'होम स्क्रीनवर जा!',

    // Home placeholder
    moreFeaturesComing: 'अधिक वैशिष्ट्ये लवकरच येत आहेत',

    // Placeholder
    marketPricesPlaceholder: 'बाजार किंमतीची माहिती येथे प्रदर्शित केली जाईल.',
    pestAlertPlaceholder: 'कीटक इशाऱ्याबद्दल माहिती येथे प्रदर्शित केली जाईल.',
    solarPlannerPlaceholder: 'सौर उत्पन्न नियोजक येथे उपलब्ध असेल.',
  },
  punjabi: {
    // Common
    welcome: 'ਸੁਆਗਤ',
    home: 'ਘਰ',
    marketplace: 'ਬਾਜ਼ਾਰ',
    buy: 'ਖਰੀਦੋ',
    sell: 'ਵੇਚੋ',
    academy: 'ਅਕਾਦਮੀ',
    help: 'ਮਦਦ',
    
    // Home Screen
    welcomeUser: 'ਸੁਆਗਤ, {{name}}',
    weather: 'ਮੌਸਮ',
    cropRecommendation: 'ਫਸਲ ਸਿਫਾਰਸ਼',
    solarPlanner: 'ਸੋਲਰ ਆਮਦਨ ਯੋਜਨਾਕਾਰ',
    marketPrices: 'ਮਾਰਕੀਟ ਰੇਟ',
    pestAlert: 'ਕੀੜੇ ਚੇਤਾਵਨੀ',
    
    // Crop Recommendation
    soilType: 'ਮਿੱਟੀ ਦੀ ਕਿਸਮ',
    farmSize: 'ਖੇਤ ਦਾ ਆਕਾਰ',
    irrigationSource: 'ਸਿੰਚਾਈ ਦਾ ਸਰੋਤ',
    getRecommendations: 'ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ',
    estimatedYield: 'ਅਨੁਮਾਨਿਤ ਪੈਦਾਵਾਰ',
    marketPrice: 'ਮਾਰਕੀਟ ਰੇਟ',
    totalProfit: 'ਕੁੱਲ ਮੁਨਾਫਾ',
    tellUsAboutYourFarm: 'ਸਾਨੂੰ ਆਪਣੇ ਖੇਤ ਬਾਰੇ ਦੱਸੋ',
    recommendedCrops: 'ਤੁਹਾਡੇ ਖੇਤ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ ਫਸਲਾਂ',
    basedOn: '{{soil}} ਮਿੱਟੀ, {{size}} ਏਕੜ, {{irrigation}} ਸਿੰਚਾਈ ਦੇ ਆਧਾਰ ਤੇ',
    getNewRecommendations: 'ਨਵੀਆਂ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਾਪਤ ਕਰੋ',

    // Marketplace
    seeds: 'ਬੀਜ',
    fertilizers: 'ਖਾਦ',
    pesticides: 'ਕੀੜੇਮਾਰ',
    tools: 'ਔਜ਼ਾਰ',
    groupBuy: 'ਗਰੁੱਪ ਖਰੀਦ',
    addToCart: 'ਕਾਰਟ ਵਿੱਚ ਪਾਓ',
    
    // Sell Screen
    cropName: 'ਫਸਲ ਦਾ ਨਾਮ',
    quantity: 'ਮਾਤਰਾ (ਕੁਇੰਟਲ ਵਿੱਚ)',
    expectedPrice: 'ਉਮੀਦ ਕੀਤੀ ਕੀਮਤ',
    uploadPhoto: 'ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ',
    postListing: 'ਸੂਚੀ ਪੋਸਟ ਕਰੋ',
    activeBids: 'ਸਰਗਰਮ ਬੋਲੀਆਂ',
    postYourHarvest: 'ਆਪਣੀ ਫਸਲ ਪੋਸਟ ਕਰੋ',
    cropNamePlaceholder: 'ਜਿਵੇਂ, ਕਣਕ, ਚਾਵਲ, ਗੰਨਾ',
    quantityPlaceholder: 'ਕੁਇੰਟਲ ਵਿੱਚ ਮਾਤਰਾ ਦਰਜ ਕਰੋ',
    pricePlaceholder: 'ਪ੍ਰਤੀ ਕੁਇੰਟਲ ਕੀਮਤ (₹)',
    accept: 'ਸਵੀਕਾਰ ਕਰੋ',

    // Academy
    coinsEarned: 'ਕਮਾਏ ਗਏ ਸਿੱਕੇ',
    watchVideo: 'ਵੀਡੀਓ ਦੇਖੋ',
    
    // Help
    govSchemes: 'ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ',
    callHelpline: 'ਹੈਲਪਲਾਈਨ ਕਾਲ ਕਰੋ',
    eligibility: 'ਯੋਗਤਾ',
    faq: 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ',
  tamil: {
    // Common
    welcome: 'வரவேற்கிறோம்',
    home: 'முகப்பு',
    marketplace: 'சந்தை',
    buy: 'வாங்க',
    sell: 'விற்க',
    academy: 'கல்விக்கூடம்',
    help: 'உதவி',
    
    // Home Screen
    welcomeUser: 'வரவேற்கிறோம், {{name}}',
    weather: 'வானிலை',
    cropRecommendation: 'பயிர் பரிந்துரை',
    solarPlanner: 'சூரிய வருமான திட்டமிடல்',
    marketPrices: 'சந்தை விலைகள்',
    pestAlert: 'பூச்சி எச்சரிக்கை',
    
    // Crop Recommendation
    soilType: 'மண் வகை',
    farmSize: 'பண்ணை அளவு',
    irrigationSource: 'நீர்ப்பாசன மூலம்',
    getRecommendations: 'பரிந்துரைகளைப் பெறுங்கள்',
    estimatedYield: 'மதிப்பிடப்பட்ட விளைச்சல்',
    marketPrice: 'சந்தை விலை',
    totalProfit: 'மொத்த லாபம்',
    tellUsAboutYourFarm: 'உங்கள் பண்ணையைப் பற்றி எங்களிடம் கூறுங்கள்',
    recommendedCrops: 'உங்கள் பண்ணைக்கு பரிந்துரைக்கப்பட்ட பயிர்கள்',
    basedOn: '{{soil}} மண், {{size}} ஏக்கர், {{irrigation}} நீர்ப்பாசனத்தின் அடிப்படையில்',
    getNewRecommendations: 'புதிய பரிந்துரைகளைப் பெறுங்கள்',
    voiceAssistantQuestion: 'ਮੈਂ ਵੌਇਸ ਅਸਿਸਟੈਂਟ ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰਾਂ?',
    // Marketplace
    seeds: 'விதைகள்',
    fertilizers: 'உரங்கள்',
    pesticides: 'பூச்சிக்கொல்லிகள்',
    tools: 'கருவிகள்',
    groupBuy: 'குழு வாங்குதல்',
    addToCart: 'கார்ட்டில் சேர்க்கவும்',
    
    // Sell Screen
    cropName: 'பயிர் பெயர்',
    quantity: 'அளவு (குவிண்டல்களில்)',
    expectedPrice: 'எதிர்பார்க்கப்படும் விலை',
    uploadPhoto: 'புகைப்படம் பதிவேற்றவும்',
    postListing: 'பட்டியல் இடுகையிடவும்',
    activeBids: 'செயலில் உள்ள ஏலங்கள்',
    postYourHarvest: 'உங்கள் அறுவடையை இடுகையிடுங்கள்',
    cropNamePlaceholder: 'எ.கா., கோதுமை, அரிசி, கரும்பு',
    quantityPlaceholder: 'குவிண்டல்களில் அளவை உள்ளிடவும்',
    pricePlaceholder: 'குவிண்டல் ஒன்றுக்கு விலை (₹)',
    accept: 'ஏற்றுக்கொள்',
    voiceAssistantAnswer: 'ਐਪ ਵਿੱਚ ਕਿਤੇ ਵੀ ਮਾਈਕ੍ਰੋਫੋਨ ਆਈਕਨ ਤੇ ਟੈਪ ਕਰੋ ਅਤੇ ਪੰਜਾਬੀ ਜਾਂ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਆਪਣਾ ਸਵਾਲ ਬੋਲੋ।',
    // Academy
    coinsEarned: 'சம்பாதித்த நாணயங்கள்',
    watchVideo: 'வீடியோ பார்க்கவும்',
    
    // Help
    govSchemes: 'அரசு திட்டங்கள்',
    callHelpline: 'உதவி எண்ணை அழைக்கவும்',
    eligibility: 'தகுதி',
    faq: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    voiceAssistantQuestion: 'குரல் உதவியாளரை எவ்வாறு பயன்படுத்துவது?',
    voiceAssistantAnswer: 'ஆப்பில் எங்கும் மைக்ரோஃபோன் ஐகானைத் தட்டி தமிழ் அல்லது ஆங்கிலத்தில் உங்கள் கேள்வியைப் பேசுங்கள்.',
    recommendationAccuracyQuestion: 'பயிர் பரிந்துரைகள் எவ்வளவு துல்லியமானவை?',
    recommendationAccuracyAnswer: 'எங்கள் AI உள்ளூர் வானிலை தரவு, மண் நிலைமைகள் மற்றும் சந்தை போக்குகளைப் பயன்படுத்தி 85%+ துல்லியமான பரிந்துரைகளை வழங்குகிறது.',
    solarCalculatorAccuracyQuestion: 'சூரிய கணிப்பான் துல்லியமானதா?',
    solarCalculatorAccuracyAnswer: 'ஆம், இது 10% துல்லியத்திற்குள் சாத்தியமான வருவாயைக் கணக்கிட செயற்கைக்கோள் தரவு மற்றும் உள்ளூர் சூரிய கதிர்வீச்சைப் பயன்படுத்துகிறது.',
    recommendationAccuracyQuestion: 'ਫਸਲ ਦੀਆਂ ਸਿਫਾਰਸ਼ਾਂ ਕਿੰਨੀਆਂ ਸਹੀ ਹਨ?',
    // Onboarding
    phoneNumber: 'தொலைபேசி எண்',
    sendOTP: 'OTP அனுப்பவும்',
    enterOTP: 'OTP உள்ளிடவும்',
    verify: 'சரிபார்க்கவும்',
    name: 'பெயர்',
    state: 'மாநிலம்',
    district: 'மாவட்டம்',
    complete: 'முடிக்கவும்',
    recommendationAccuracyAnswer: 'ਸਾਡਾ AI ਸਥਾਨਕ ਮੌਸਮ ਡੇਟਾ, ਮਿੱਟੀ ਦੀਆਂ ਸਥਿਤੀਆਂ ਅਤੇ ਮਾਰਕੀਟ ਰੁਝਾਨਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ 85%+ ਸਹੀ ਸਿਫਾਰਸ਼ਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।',
    // Not Found Screen
    oops: 'அச்சோ!',
    screenNotExist: 'இந்த திரை இல்லை.',
    goToHome: 'முகப்பு திரைக்கு செல்லவும்!',
    solarCalculatorAccuracyQuestion: 'ਕੀ ਸੋਲਰ ਕੈਲਕੁਲੇਟਰ ਸਹੀ ਹੈ?',
    // Home placeholder
    moreFeaturesComing: 'மேலும் அம்சங்கள் விரைவில் வருகின்றன',
    solarCalculatorAccuracyAnswer: 'ਹਾਂ, ਇਹ 10% ਸਹੀਤਾ ਦੇ ਅੰਦਰ ਸੰਭਾਵਿਤ ਕਮਾਈ ਦੀ ਗਣਨਾ ਕਰਨ ਲਈ ਸੈਟੇਲਾਈਟ ਡੇਟਾ ਅਤੇ ਸਥਾਨਕ ਸੋਲਰ ਰੇਡੀਏਸ਼ਨ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।',
    // Placeholder
    marketPricesPlaceholder: 'சந்தை விலை தகவல் இங்கே காட்டப்படும்.',
    pestAlertPlaceholder: 'பூச்சி எச்சரிக்கை பற்றிய தகவல் இங்கே காட்டப்படும்.',
    solarPlannerPlaceholder: 'சூரிய வருமான திட்டமிடல் இங்கே கிடைக்கும்.',
  },
  telugu: {
    // Common
    welcome: 'స్వాగతం',
    home: 'హోమ్',
    marketplace: 'మార్కెట్',
    buy: 'కొనండి',
    sell: 'అమ్మండి',
    academy: 'అకాడమీ',
    help: 'సహాయం',
    
    // Home Screen
    welcomeUser: 'స్వాగతం, {{name}}',
    weather: 'వాతావరణం',
    cropRecommendation: 'పంట సిఫార్సు',
    solarPlanner: 'సోలార్ ఆదాయ ప్లానర్',
    marketPrices: 'మార్కెట్ ధరలు',
    pestAlert: 'కీటకాల హెచ్చరిక',
    
    // Crop Recommendation
    soilType: 'మట్టి రకం',
    farmSize: 'వ్యవసాయ భూమి పరిమాణం',
    irrigationSource: 'నీటిపారుదల మూలం',
    getRecommendations: 'సిఫార్సులు పొందండి',
    estimatedYield: 'అంచనా దిగుబడి',
    marketPrice: 'మార్కెట్ ధర',
    totalProfit: 'మొత్తం లాభం',
    tellUsAboutYourFarm: 'మీ వ్యవసాయ భూమి గురించి మాకు చెప్పండి',
    recommendedCrops: 'మీ వ్యవసాయ భూమికి సిఫార్సు చేయబడిన పంటలు',
    basedOn: '{{soil}} మట్టి, {{size}} ఎకరాలు, {{irrigation}} నీటిపారుదల ఆధారంగా',
    getNewRecommendations: 'కొత్త సిఫార్సులు పొందండి',

    // Marketplace
    seeds: 'విత్తనాలు',
    fertilizers: 'ఎరువులు',
    pesticides: 'కీటకనాశకాలు',
    tools: 'పరికరాలు',
    groupBuy: 'గ్రూప్ కొనుగోలు',
    addToCart: 'కార్ట్‌లో చేర్చండి',
    
    // Sell Screen
    cropName: 'పంట పేరు',
    quantity: 'పరిమాణం (క్వింటల్స్‌లో)',
    expectedPrice: 'ఆశించిన ధర',
    uploadPhoto: 'ఫోటో అప్‌లోడ్ చేయండి',
    postListing: 'జాబితా పోస్ట్ చేయండి',
    activeBids: 'క్రియాశీల బిడ్‌లు',
    postYourHarvest: 'మీ పంట పోస్ట్ చేయండి',
    cropNamePlaceholder: 'ఉదా., గోధుమలు, వరి, చెరకు',
    quantityPlaceholder: 'క్వింటల్స్‌లో పరిమాణం నమోదు చేయండి',
    pricePlaceholder: 'క్వింటల్‌కు ధర (₹)',
    accept: 'అంగీకరించండి',
    // Onboarding
    // Academy
    coinsEarned: 'సంపాదించిన నాణేలు',
    watchVideo: 'వీడియో చూడండి',
    
    // Help
    govSchemes: 'ప్రభుత్వ పథకాలు',
    callHelpline: 'హెల్ప్‌లైన్‌కు కాల్ చేయండి',
    eligibility: 'అర్హత',
    faq: 'తరచుగా అడిగే ప్రశ్నలు',
    voiceAssistantQuestion: 'వాయిస్ అసిస్టెంట్‌ను ఎలా ఉపయోగించాలి?',
    voiceAssistantAnswer: 'యాప్‌లో ఎక్కడైనా మైక్రోఫోన్ ఐకాన్‌పై ట్యాప్ చేసి తెలుగు లేదా ఇంగ్లీష్‌లో మీ ప్రశ్న చెప్పండి.',
    recommendationAccuracyQuestion: 'పంట సిఫార్సులు ఎంత ఖచ్చితమైనవి?',
    recommendationAccuracyAnswer: 'మా AI స్థానిక వాతావరణ డేటా, మట్టి పరిస్థితులు మరియు మార్కెట్ ట్రెండ్‌లను ఉపయోగించి 85%+ ఖచ్చితమైన సిఫార్సులను అందిస్తుంది.',
    solarCalculatorAccuracyQuestion: 'సోలార్ కాలిక్యులేటర్ ఖచ్చితమైనదా?',
    solarCalculatorAccuracyAnswer: 'అవును, ఇది 10% ఖచ్చితత్వంలో సంభావ్య ఆదాయాన్ని లెక్కించడానికి ఉపగ్రహ డేటా మరియు స్థానిక సౌర వికిరణాన్ని ఉపయోగిస్తుంది.',
    phoneNumber: 'ਫੋਨ ਨੰਬਰ',
    // Onboarding
    phoneNumber: 'ఫోన్ నంబర్',
    sendOTP: 'OTP పంపండి',
    enterOTP: 'OTP నమోదు చేయండి',
    verify: 'ధృవీకరించండి',
    name: 'పేరు',
    state: 'రాష్ట్రం',
    district: 'జిల్లా',
    complete: 'పూర్తి చేయండి',
    sendOTP: 'OTP ਭੇਜੋ',
    // Not Found Screen
    oops: 'అయ్యో!',
    screenNotExist: 'ఈ స్క్రీన్ లేదు.',
    goToHome: 'హోమ్ స్క్రీన్‌కు వెళ్లండి!',
    enterOTP: 'OTP ਦਰਜ ਕਰੋ',
    // Home placeholder
    moreFeaturesComing: 'మరిన్ని ఫీచర్లు త్వరలో వస్తున్నాయి',
    verify: 'ਤਸਦੀਕ ਕਰੋ',
    // Placeholder
    marketPricesPlaceholder: 'మార్కెట్ ధర సమాచారం ఇక్కడ ప్రదర్శించబడుతుంది.',
    pestAlertPlaceholder: 'కీటకాల హెచ్చరిక గురించి సమాచారం ఇక్కడ ప్రదర్శించబడుతుంది.',
    solarPlannerPlaceholder: 'సోలార్ ఆదాయ ప్లానర్ ఇక్కడ అందుబాటులో ఉంటుంది.',
  },
  gujarati: {
    // Common
    welcome: 'સ્વાગત',
    home: 'હોમ',
    marketplace: 'બજાર',
    buy: 'ખરીદો',
    sell: 'વેચો',
    academy: 'એકેડેમી',
    help: 'મદદ',
    
    // Home Screen
    welcomeUser: 'સ્વાગત, {{name}}',
    weather: 'હવામાન',
    cropRecommendation: 'પાક ભલામણ',
    solarPlanner: 'સોલાર આવક પ્લાનર',
    marketPrices: 'બજાર ભાવ',
    pestAlert: 'જંતુ ચેતવણી',
    
    // Crop Recommendation
    soilType: 'માટીનો પ્રકાર',
    farmSize: 'ખેતરનું કદ',
    irrigationSource: 'સિંચાઈનો સ્રોત',
    getRecommendations: 'ભલામણો મેળવો',
    estimatedYield: 'અંદાજિત ઉત્પાદન',
    marketPrice: 'બજાર ભાવ',
    totalProfit: 'કુલ નફો',
    tellUsAboutYourFarm: 'તમારા ખેતર વિશે અમને કહો',
    recommendedCrops: 'તમારા ખેતર માટે ભલામણ કરેલ પાકો',
    basedOn: '{{soil}} માટી, {{size}} એકર, {{irrigation}} સિંચાઈના આધારે',
    getNewRecommendations: 'નવી ભલામણો મેળવો',
    name: 'ਨਾਮ',
    // Marketplace
    seeds: 'બીજ',
    fertilizers: 'ખાતર',
    pesticides: 'જંતુનાશક',
    tools: 'સાધનો',
    groupBuy: 'ગ્રુપ ખરીદી',
    addToCart: 'કાર્ટમાં ઉમેરો',
    
    // Sell Screen
    cropName: 'પાકનું નામ',
    quantity: 'માત્રા (ક્વિન્ટલમાં)',
    expectedPrice: 'અપેક્ષિત કિંમત',
    uploadPhoto: 'ફોટો અપલોડ કરો',
    postListing: 'યાદી પોસ્ટ કરો',
    activeBids: 'સક્રિય બિડ',
    postYourHarvest: 'તમારો પાક પોસ્ટ કરો',
    cropNamePlaceholder: 'જેમ કે, ઘઉં, ચોખા, શેરડી',
    quantityPlaceholder: 'ક્વિન્ટલમાં માત્રા દાખલ કરો',
    pricePlaceholder: 'ક્વિન્ટલ દીઠ કિંમત (₹)',
    accept: 'સ્વીકારો',
    state: 'ਰਾਜ',
    // Academy
    coinsEarned: 'કમાયેલા સિક્કા',
    watchVideo: 'વિડિયો જુઓ',
    
    // Help
    govSchemes: 'સરકારી યોજનાઓ',
    callHelpline: 'હેલ્પલાઇન પર કૉલ કરો',
    eligibility: 'પાત્રતા',
    faq: 'વારંવાર પૂછાતા પ્રશ્નો',
    voiceAssistantQuestion: 'વૉઇસ આસિસ્ટન્ટનો ઉપયોગ કેવી રીતે કરું?',
    voiceAssistantAnswer: 'એપમાં ગમે ત્યાં માઇક્રોફોન આઇકન પર ટેપ કરો અને ગુજરાતી અથવા અંગ્રેજીમાં તમારો પ્રશ્ન બોલો.',
    recommendationAccuracyQuestion: 'પાક ભલામણો કેટલી સચોટ છે?',
    recommendationAccuracyAnswer: 'અમારી AI સ્થાનિક હવામાન ડેટા, માટીની સ્થિતિ અને બજારના વલણોનો ઉપયોગ કરીને 85%+ સચોટ ભલામણો પ્રદાન કરે છે.',
    solarCalculatorAccuracyQuestion: 'શું સોલાર કેલ્ક્યુલેટર સચોટ છે?',
    solarCalculatorAccuracyAnswer: 'હા, તે 10% સચોટતાની અંદર સંભવિત કમાણીની ગણતરી કરવા માટે સેટેલાઇટ ડેટા અને સ્થાનિક સોલાર રેડિયેશનનો ઉપયોગ કરે છે.',
    district: 'ਜ਼ਿਲ੍ਹਾ',
    // Onboarding
    phoneNumber: 'ફોન નંબર',
    sendOTP: 'OTP મોકલો',
    enterOTP: 'OTP દાખલ કરો',
    verify: 'ચકાસો',
    name: 'નામ',
    state: 'રાજ્ય',
    district: 'જિલ્લો',
    complete: 'પૂર્ણ કરો',
    complete: 'ਪੂਰਾ ਕਰੋ',
    // Not Found Screen
    oops: 'અરે!',
    screenNotExist: 'આ સ્ક્રીન અસ્તિત્વમાં નથી.',
    goToHome: 'હોમ સ્ક્રીન પર જાઓ!',

    // Home placeholder
    moreFeaturesComing: 'વધુ ફીચર્સ જલ્દી આવી રહ્યા છે',
    // Not Found Screen
    // Placeholder
    marketPricesPlaceholder: 'બજાર ભાવની માહિતી અહીં પ્રદર્શિત થશે.',
    pestAlertPlaceholder: 'જંતુ ચેતવણી વિશેની માહિતી અહીં પ્રદર્શિત થશે.',
    solarPlannerPlaceholder: 'સોલાર આવક પ્લાનર અહીં ઉપલબ્ધ હશે.',
  },
  kannada: {
    // Common
    welcome: 'ಸ್ವಾಗತ',
    home: 'ಮುಖ್ಯಪುಟ',
    marketplace: 'ಮಾರುಕಟ್ಟೆ',
    buy: 'ಖರೀದಿಸಿ',
    sell: 'ಮಾರಿ',
    academy: 'ಅಕಾಡೆಮಿ',
    help: 'ಸಹಾಯ',
    
    // Home Screen
    welcomeUser: 'ಸ್ವಾಗತ, {{name}}',
    weather: 'ಹವಾಮಾನ',
    cropRecommendation: 'ಬೆಳೆ ಶಿಫಾರಸು',
    solarPlanner: 'ಸೌರ ಆದಾಯ ಯೋಜಕ',
    marketPrices: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು',
    pestAlert: 'ಕೀಟ ಎಚ್ಚರಿಕೆ',
    
    // Crop Recommendation
    soilType: 'ಮಣ್ಣಿನ ಪ್ರಕಾರ',
    farmSize: 'ಕೃಷಿ ಭೂಮಿಯ ಗಾತ್ರ',
    irrigationSource: 'ನೀರಾವರಿ ಮೂಲ',
    getRecommendations: 'ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ',
    estimatedYield: 'ಅಂದಾಜು ಇಳುವರಿ',
    marketPrice: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆ',
    totalProfit: 'ಒಟ್ಟು ಲಾಭ',
    tellUsAboutYourFarm: 'ನಿಮ್ಮ ಕೃಷಿ ಭೂಮಿಯ ಬಗ್ಗೆ ನಮಗೆ ತಿಳಿಸಿ',
    recommendedCrops: 'ನಿಮ್ಮ ಕೃಷಿ ಭೂಮಿಗೆ ಶಿಫಾರಸು ಮಾಡಿದ ಬೆಳೆಗಳು',
    basedOn: '{{soil}} ಮಣ್ಣು, {{size}} ಎಕರೆ, {{irrigation}} ನೀರಾವರಿ ಆಧಾರದ ಮೇಲೆ',
    getNewRecommendations: 'ಹೊಸ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ',
    oops: 'ਓਹ!',
    // Marketplace
    seeds: 'ಬೀಜಗಳು',
    fertilizers: 'ರಸಗೊಬ್ಬರಗಳು',
    pesticides: 'ಕೀಟನಾಶಕಗಳು',
    tools: 'ಉಪಕರಣಗಳು',
    groupBuy: 'ಗುಂಪು ಖರೀದಿ',
    addToCart: 'ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ',
    
    // Sell Screen
    cropName: 'ಬೆಳೆಯ ಹೆಸರು',
    quantity: 'ಪ್ರಮಾಣ (ಕ್ವಿಂಟಲ್‌ಗಳಲ್ಲಿ)',
    expectedPrice: 'ನಿರೀಕ್ಷಿತ ಬೆಲೆ',
    uploadPhoto: 'ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    postListing: 'ಪಟ್ಟಿ ಪೋಸ್ಟ್ ಮಾಡಿ',
    activeBids: 'ಸಕ್ರಿಯ ಬಿಡ್‌ಗಳು',
    postYourHarvest: 'ನಿಮ್ಮ ಬೆಳೆಯನ್ನು ಪೋಸ್ಟ್ ಮಾಡಿ',
    cropNamePlaceholder: 'ಉದಾ., ಗೋಧಿ, ಅಕ್ಕಿ, ಕಬ್ಬು',
    quantityPlaceholder: 'ಕ್ವಿಂಟಲ್‌ಗಳಲ್ಲಿ ಪ್ರಮಾಣವನ್ನು ನಮೂದಿಸಿ',
    pricePlaceholder: 'ಪ್ರತಿ ಕ್ವಿಂಟಲ್ ಬೆಲೆ (₹)',
    accept: 'ಸ್ವೀಕರಿಸಿ',
    screenNotExist: 'ਇਹ ਸਕ੍ਰੀਨ ਮੌਜੂਦ ਨਹੀਂ ਹੈ।',
    // Academy
    coinsEarned: 'ಗಳಿಸಿದ ನಾಣ್ಯಗಳು',
    watchVideo: 'ವೀಡಿಯೋ ನೋಡಿ',
    
    // Help
    govSchemes: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
    callHelpline: 'ಸಹಾಯವಾಣಿಗೆ ಕರೆ ಮಾಡಿ',
    eligibility: 'ಅರ್ಹತೆ',
    faq: 'ಆಗಾಗ್ಗೆ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು',
    voiceAssistantQuestion: 'ಧ್ವನಿ ಸಹಾಯಕವನ್ನು ಹೇಗೆ ಬಳಸುವುದು?',
    voiceAssistantAnswer: 'ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ಎಲ್ಲಿಯಾದರೂ ಮೈಕ್ರೋಫೋನ್ ಐಕಾನ್ ಮೇಲೆ ಟ್ಯಾಪ್ ಮಾಡಿ ಮತ್ತು ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಹೇಳಿ.',
    recommendationAccuracyQuestion: 'ಬೆಳೆ ಶಿಫಾರಸುಗಳು ಎಷ್ಟು ನಿಖರವಾಗಿವೆ?',
    recommendationAccuracyAnswer: 'ನಮ್ಮ AI ಸ್ಥಳೀಯ ಹವಾಮಾನ ಡೇಟಾ, ಮಣ್ಣಿನ ಪರಿಸ್ಥಿತಿಗಳು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳನ್ನು ಬಳಸಿಕೊಂಡು 85%+ ನಿಖರವಾದ ಶಿಫಾರಸುಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.',
    solarCalculatorAccuracyQuestion: 'ಸೌರ ಕ್ಯಾಲ್ಕುಲೇಟರ್ ನಿಖರವಾಗಿದೆಯೇ?',
    solarCalculatorAccuracyAnswer: 'ಹೌದು, ಇದು 10% ನಿಖರತೆಯೊಳಗೆ ಸಂಭಾವ್ಯ ಗಳಿಕೆಯನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡಲು ಉಪಗ್ರಹ ಡೇಟಾ ಮತ್ತು ಸ್ಥಳೀಯ ಸೌರ ವಿಕಿರಣವನ್ನು ಬಳಸುತ್ತದೆ.',
    goToHome: 'ਹੋਮ ਸਕ੍ਰੀਨ ਤੇ ਜਾਓ!',
    // Onboarding
    phoneNumber: 'ಫೋನ್ ಸಂಖ್ಯೆ',
    sendOTP: 'OTP ಕಳುಹಿಸಿ',
    enterOTP: 'OTP ನಮೂದಿಸಿ',
    verify: 'ಪರಿಶೀಲಿಸಿ',
    name: 'ಹೆಸರು',
    state: 'ರಾಜ್ಯ',
    district: 'ಜಿಲ್ಲೆ',
    complete: 'ಪೂರ್ಣಗೊಳಿಸಿ',

    // Not Found Screen
    oops: 'ಅಯ್ಯೋ!',
    screenNotExist: 'ಈ ಪರದೆ ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ.',
    goToHome: 'ಮುಖ್ಯಪುಟಕ್ಕೆ ಹೋಗಿ!',
    // Home placeholder
    // Home placeholder
    moreFeaturesComing: 'ಹೆಚ್ಚಿನ ವೈಶಿಷ್ಟ್ಯಗಳು ಶೀಘ್ರದಲ್ಲೇ ಬರುತ್ತಿವೆ',
    moreFeaturesComing: 'ਹੋਰ ਫੀਚਰ ਜਲਦੀ ਆ ਰਹੇ ਹਨ',
    // Placeholder
    marketPricesPlaceholder: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮಾಹಿತಿಯನ್ನು ಇಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.',
    pestAlertPlaceholder: 'ಕೀಟ ಎಚ್ಚರಿಕೆಯ ಬಗ್ಗೆ ಮಾಹಿತಿಯನ್ನು ಇಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.',
    solarPlannerPlaceholder: 'ಸೌರ ಆದಾಯ ಯೋಜಕ ಇಲ್ಲಿ ಲಭ್ಯವಿರುತ್ತದೆ.',
  },
  malayalam: {
    // Common
    welcome: 'സ്വാഗതം',
    home: 'ഹോം',
    marketplace: 'മാർക്കറ്റ്',
    buy: 'വാങ്ങുക',
    sell: 'വിൽക്കുക',
    academy: 'അക്കാദമി',
    help: 'സഹായം',
    
    // Home Screen
    welcomeUser: 'സ്വാഗതം, {{name}}',
    weather: 'കാലാവസ്ഥ',
    cropRecommendation: 'വിള ശുപാർശ',
    solarPlanner: 'സോളാർ വരുമാന പ്ലാനർ',
    marketPrices: 'മാർക്കറ്റ് വിലകൾ',
    pestAlert: 'കീട മുന്നറിയിപ്പ്',
    
    // Crop Recommendation
    soilType: 'മണ്ണിന്റെ തരം',
    farmSize: 'കൃഷിഭൂമിയുടെ വലുപ്പം',
    irrigationSource: 'ജലസേചന സ്രോതസ്സ്',
    getRecommendations: 'ശുപാർശകൾ നേടുക',
    estimatedYield: 'കണക്കാക്കിയ വിളവ്',
    marketPrice: 'മാർക്കറ്റ് വില',
    totalProfit: 'മൊത്തം ലാഭം',
    tellUsAboutYourFarm: 'നിങ്ങളുടെ കൃഷിഭൂമിയെക്കുറിച്ച് ഞങ്ങളോട് പറയുക',
    recommendedCrops: 'നിങ്ങളുടെ കൃഷിഭൂമിക്ക് ശുപാർശ ചെയ്യുന്ന വിളകൾ',
    basedOn: '{{soil}} മണ്ണ്, {{size}} ഏക്കർ, {{irrigation}} ജലസേചനത്തിന്റെ അടിസ്ഥാനത്തിൽ',
    getNewRecommendations: 'പുതിയ ശുപാർശകൾ നേടുക',

    // Marketplace
    seeds: 'വിത്തുകൾ',
    fertilizers: 'വളങ്ങൾ',
    pesticides: 'കീടനാശിനികൾ',
    tools: 'ഉപകരണങ്ങൾ',
    groupBuy: 'ഗ്രൂപ്പ് വാങ്ങൽ',
    addToCart: 'കാർട്ടിൽ ചേർക്കുക',
    
    // Sell Screen
    cropName: 'വിളയുടെ പേര്',
    quantity: 'അളവ് (ക്വിന്റലുകളിൽ)',
    expectedPrice: 'പ്രതീക്ഷിക്കുന്ന വില',
    uploadPhoto: 'ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക',
    postListing: 'ലിസ്റ്റിംഗ് പോസ്റ്റ് ചെയ്യുക',
    activeBids: 'സജീവ ബിഡുകൾ',
    postYourHarvest: 'നിങ്ങളുടെ വിള പോസ്റ്റ് ചെയ്യുക',
    cropNamePlaceholder: 'ഉദാ., ഗോതമ്പ്, അരി, കരിമ്പ്',
    quantityPlaceholder: 'ക്വിന്റലുകളിൽ അളവ് നൽകുക',
    pricePlaceholder: 'ക്വിന്റലിന് വില (₹)',
    accept: 'സ്വീകരിക്കുക',
    // Placeholder
    // Academy
    coinsEarned: 'നേടിയ നാണയങ്ങൾ',
    watchVideo: 'വീഡിയോ കാണുക',
    
    // Help
    govSchemes: 'സർക്കാർ പദ്ധതികൾ',
    callHelpline: 'ഹെൽപ്പ്‌ലൈനിൽ വിളിക്കുക',
    eligibility: 'യോഗ്യത',
    faq: 'പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ',
    voiceAssistantQuestion: 'വോയ്‌സ് അസിസ്റ്റന്റ് എങ്ങനെ ഉപയോഗിക്കാം?',
    voiceAssistantAnswer: 'ആപ്പിൽ എവിടെയും മൈക്രോഫോൺ ഐക്കണിൽ ടാപ്പ് ചെയ്ത് മലയാളത്തിലോ ഇംഗ്ലീഷിലോ നിങ്ങളുടെ ചോദ്യം പറയുക.',
    recommendationAccuracyQuestion: 'വിള ശുപാർശകൾ എത്രത്തോളം കൃത്യമാണ്?',
    recommendationAccuracyAnswer: 'ഞങ്ങളുടെ AI പ്രാദേശിക കാലാവസ്ഥാ ഡാറ്റ, മണ്ണിന്റെ അവസ്ഥകൾ, മാർക്കറ്റ് ട്രെൻഡുകൾ എന്നിവ ഉപയോഗിച്ച് 85%+ കൃത്യമായ ശുപാർശകൾ നൽകുന്നു.',
    solarCalculatorAccuracyQuestion: 'സോളാർ കാൽക്കുലേറ്റർ കൃത്യമാണോ?',
    solarCalculatorAccuracyAnswer: 'അതെ, 10% കൃത്യതയ്ക്കുള്ളിൽ സാധ്യമായ വരുമാനം കണക്കാക്കാൻ ഇത് സാറ്റലൈറ്റ് ഡാറ്റയും പ്രാദേശിക സോളാർ റേഡിയേഷനും ഉപയോഗിക്കുന്നു.',
    marketPricesPlaceholder: 'ਮਾਰਕੀਟ ਰੇਟ ਦੀ ਜਾਣਕਾਰੀ ਇੱਥੇ ਦਿਖਾਈ ਜਾਵੇਗੀ।',
    // Onboarding
    phoneNumber: 'ഫോൺ നമ്പർ',
    sendOTP: 'OTP അയയ്ക്കുക',
    enterOTP: 'OTP നൽകുക',
    verify: 'പരിശോധിക്കുക',
    name: 'പേര്',
    state: 'സംസ്ഥാനം',
    district: 'ജില്ല',
    complete: 'പൂർത്തിയാക്കുക',
    pestAlertPlaceholder: 'ਕੀੜੇ ਚੇਤਾਵਨੀ ਬਾਰੇ ਜਾਣਕਾਰੀ ਇੱਥੇ ਦਿਖਾਈ ਜਾਵੇਗੀ।',
    // Not Found Screen
    oops: 'അയ്യോ!',
    screenNotExist: 'ഈ സ്ക്രീൻ നിലവിലില്ല.',
    goToHome: 'ഹോം സ്ക്രീനിലേക്ക് പോകുക!',
    solarPlannerPlaceholder: 'ਸੋਲਰ ਆਮਦਨ ਯੋਜਨਾਕਾਰ ਇੱਥੇ ਉਪਲਬਧ ਹੋਵੇਗਾ।',
    // Home placeholder
    moreFeaturesComing: 'കൂടുതൽ ഫീച്ചറുകൾ ഉടൻ വരുന്നു',
  }
    // Placeholder
    marketPricesPlaceholder: 'മാർക്കറ്റ് വില വിവരങ്ങൾ ഇവിടെ പ്രദർശിപ്പിക്കും.',
    pestAlertPlaceholder: 'കീട മുന്നറിയിപ്പിനെക്കുറിച്ചുള്ള വിവരങ്ങൾ ഇവിടെ പ്രദർശിപ്പിക്കും.',
    solarPlannerPlaceholder: 'സോളാർ വരുമാന പ്ലാനർ ഇവിടെ ലഭ്യമാകും.',
  }
};

export function translate(key: string, language: 'hindi' | 'english' | 'bengali' | 'marathi' | 'punjabi' | 'tamil' | 'telugu' | 'gujarati' | 'kannada' | 'malayalam', params?: Record<string, string>) {
  let text = translations[language][key] || key;
  
  if (params) {
    Object.keys(params).forEach(param => {
      text = text.replace(`{{${param}}}`, params[param]);
    });
  }
  
  return text;
}