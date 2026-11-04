/* رفيق رامي — تطبيق مستقل دون خوادم أو تتبع. */
'use strict';
const START='2026-11-03', END='2026-11-20';
const FRENCH_LETTERS=['i','l','a','m','n','e','o','d','é','c'];
const ARABIC_LETTERS=['د','م','ر','ب','س','ف'];
const skills = [
['arStory','الاستماع والتحدث','العربية','11','حكاية «سمسم يلتحق بالمدرسة»','ينصت، يذكر الشخصيات، يرتب حدثين، ويجيب بجملة مفهومة.'],
['frGraphemes','تمييز الحروف الفرنسية','الفرنسية','11','i · l · a · m · n · e · o · d · é · c','يسمي/يتعرف على الحروف المكتوبة ويربطها بنطقها كما تعلّمه في القسم.'],
['frRead','قراءة مقاطع وكلمات بالفرنسية','الفرنسية','11','الحروف العشرة المذكورة في البرنامج','يقرأ دون تخمين أو قفز؛ لا نختبر تتابعات صوتية لم تُدرَّس بعد.'],
['arLetters','حروف العربية','العربية','12','د · م · ر · ب · س · ف','يتعرف على كل حرف مع حركته وأشكاله التي درسها.'],
['arBlend','الدمج الصوتي بالعربية','العربية','12','مقاطع وكلمات قصيرة من الحروف المدروسة','يصل الحركات بالأصوات بالتسلسل دون قلب ترتيب الحروف.'],
['arRead','قراءة كلمات وجمل بالعربية','العربية','12','مقاطع وكلمات وجمل بالحروف الستة','يقرأ كلمات وجملاً من كتابه، وفق الحركات المدروسة.'],
['amazigh38','الأمازيغية: ص 38','الأمازيغية','12','الوحدة الأولى، الصفحة 38','استرجاع أنشطة الصفحة 38 بالاعتماد على الكتاب.'],
['amazigh42','الأمازيغية: ص 42','الأمازيغية','12','الوحدة الأولى، الصفحة 42','استرجاع أنشطة الصفحة 42 بالاعتماد على الكتاب.'],
['amazigh43','الأمازيغية: ص 43','الأمازيغية','12','الوحدة الأولى، الصفحة 43','استرجاع أنشطة الصفحة 43 بالاعتماد على الكتاب.'],
['it','المعلوميات','المعلوميات','12','Chapitre 1 : Ordinateur (théorique)','يشرح شفوياً المفاهيم والصور الواردة في دفتر الدرس.'],
['frPoemA','المحفوظة: C’est la rentrée','الفرنسية','12','Poésie «C’est la rentrée»','يردد نص القصيدة الأول كما هو في الكتاب ويستظهره تدريجياً.'],
['frPoemB','المحفوظة: J’ai une maison','الفرنسية','12','Poésie «J’ai une maison»','يردد نص القصيدة الثاني كما هو في الكتاب ويستظهره تدريجياً.'],
['frDict','الإملاء بالفرنسية','الفرنسية','13','الحروف i · l · a · m · n · e · o · d · é · c','يكتب الحروف والمقاطع/الكلمات التي دُرست بالفعل.'],
['arWrite','الخط والنقل بالعربية','العربية','16','د · م · ر · ب · س · ف','يتبع اتجاه كتابة الحرف ويحترم السطر وأشكال الحروف.'],
['arDict','الإملاء بالعربية','العربية','16','د · م · ر · ب · س · ف','يكتب حروفاً ومقاطع مدروسة دون نموذج ثم يصحح.'],
['mathSort','تصنيف الأشياء','الرياضيات','16','حسب اللون والشكل والحجم والطول','يصنف بأحد المعايير ويشرح لماذا وضع الأشياء معاً.'],
['mathPair','التواصل حداً بحد','الرياضيات','16','مطابقة عناصر مجموعتين عنصراً بعنصر','يُقرن كل عنصر بواحد فقط ويحدد المجموعة الزائدة إن وجدت.'],
['mathNum','الأعداد من 1 إلى 5','الرياضيات','16','تقديم الأعداد 1، 2، 3، 4، 5','يعد أشياء حقيقية، يربط الكمية بالرمز، ويكتب الأعداد.'],
['mathOrder','المقارنة والترتيب','الرياضيات','16','مقارنة وترتيب الأعداد 1 إلى 5','يقارن مجموعتين أو عددين ويُرتب تصاعدياً وتنازلياً.'],
['mathSpace','التموضع في المكان','الرياضيات','16','تحديد موضع الأشياء بالنسبة إلى بعضها','يستعمل ألفاظ المكان المدروسة مع أشياء فعلية.'],
['arBuild','بناء الكلمات','العربية','17','بناء كلمات من حروف أو مقاطع','يرتب الحروف المعطاة ليكوّن كلمة صحيحة.'],
['arSplit','تجزيء الكلمات','العربية','17','تجزيء الكلمات إلى مقاطع أو وحدات مدروسة','يحدد أجزاء الكلمة بالطريقة المعتمدة في دفتر المدرسة.'],
['arNetwork','شبكة الكلمة','العربية','17','شبكة الكلمة','يربط الكلمة بمفردات وصور أو معانٍ، وفق نموذج المعلم.'],
['arDem','أسماء الإشارة للمفرد','العربية','17','هذا / هذه','يوظف اسم الإشارة المناسب في أمثلة بسيطة.'],
['frSimilar','تمييز الكلمات المتشابهة','الفرنسية','17','Distinguer les mots qui se ressemblent','ينتبه لتغير حرف بين كلمتين مألوفتين.'],
['frSentence','ترتيب كلمات الجملة','الفرنسية','17','Remettre les mots dans l’ordre','يضع الكلمات في ترتيب صحيح، دون الاعتماد على التخمين.'],
['frPronouns','إكمال الجمل بـ il / elle','الفرنسية','17','Compléter avec «elle» ou «il»','يختار الضمير وفق الشخص المشار إليه؛ نستعين بصورة أو سياق واضح.'],
['sport','التربية البدنية','التربية البدنية','19','الجري','يراجع تعليمات الجري والسلامة مع راحة كافية.'],
['art','التربية الفنية','التربية الفنية','19','دروس الوحدة الأولى','مراجعة أعمال ومفاهيم الوحدة كما في الدفتر.'],
['english1','الإنجليزية: الدرس الأول','الإنجليزية','19','Unit 1 / Lesson 1','التعرف والنطق والاستجابة اعتماداً على أنشطة الدرس الأول.'],
['english2','الإنجليزية: الدرس الثاني','الإنجليزية','19','Unit 1 / Lesson 2','التعرف والنطق والاستجابة اعتماداً على أنشطة الدرس الثاني.'],
['quran','القرآن الكريم','التربية الإسلامية','20','سورة الفاتحة','تلاوة السورة كما يتعلمها معلمه، دون استعجال.'],
['faith','التربية الإسلامية: عقيدة واستجابة','التربية الإسلامية','20','الله ربي؛ أعبد الله كما علمنا الرسول ﷺ','تذكر الأفكار وفهمها بلغة تناسب عمره.'],
['values','التربية الإسلامية: اقتداء وقسط وحكمة','التربية الإسلامية','20','محمد ﷺ نبيي؛ أوحد الله تعالى؛ أنفع ولا أضر','أمثلة تطبيقية من الدروس المدروسة.'],
['science1','النشاط العلمي: الوحدة الأولى','النشاط العلمي','20','جميع دروس الوحدة الأولى','مراجعة صور وملاحظات وتجارب الكتاب.'],
['science2','النشاط العلمي: الوحدة الثانية','النشاط العلمي','20','الدروس الأربعة الأولى من الوحدة الثانية','أسئلة من الدفتر دون اختراع موضوعات غير مذكورة.']
].map(([id,name,domain,exam,detail,teacher])=>({id,name,domain,exam,detail,teacher}));
const skillMap=Object.fromEntries(skills.map(s=>[s.id,s]));
const exams=[
 {date:'2026-11-11',rows:[['الاستماع والتحدث · العربية','حكاية «سمسم يلتحق بالمدرسة»','arStory'],['Lecture · Français','les sons / graphies : i – l – a – m – n – e – o – d – é – c','frGraphemes,frRead']]},
 {date:'2026-11-12',rows:[['القراءة · العربية','قراءة مقاطع وكلمات وجمل تتضمن الحروف: د – م – ر – ب – س – ف','arLetters,arBlend,arRead'],['الأمازيغية','الوحدة الأولى: ص 38 + ص 42 + ص 43','amazigh38,amazigh42,amazigh43'],['المعلوميات','Chapitre 1 : Ordinateur «théorique»','it'],['Poésie · Français','«C’est la rentrée» و«J’ai une maison»','frPoemA,frPoemB']]},
 {date:'2026-11-13',rows:[['Dictée · Français','الحروف: i – l – a – m – n – e – o – d – é – c','frDict']]},
 {date:'2026-11-16',rows:[['الخط والنقل والإملاء · العربية','الحروف: د – م – ر – ب – س – ف','arWrite,arDict'],['الرياضيات','تصنيف حسب اللون والشكل والحجم والطول؛ التواصل حداً بحد؛ تقديم الأعداد 1 إلى 5؛ مقارنتها وترتيبها؛ التموضع في المكان','mathSort,mathPair,mathNum,mathOrder,mathSpace']]},
 {date:'2026-11-17',rows:[['التعبير الكتابي · العربية','بناء كلمات؛ تجزيء الكلمات؛ شبكة الكلمة؛ أسماء الإشارة للمفرد','arBuild,arSplit,arNetwork,arDem'],['Exercices écrits · Français','التعرف على الحروف؛ تمييز الكلمات المتشابهة؛ ترتيب كلمات لتكوين جملة؛ إكمال الجمل بـ elle أو il','frGraphemes,frSimilar,frSentence,frPronouns']]},
 {date:'2026-11-19',rows:[['التربية البدنية','الجري','sport'],['التربية الفنية','دروس الوحدة الأولى','art'],['الإنجليزية','UNIT 1 / LESSON 1-2','english1,english2']]},
 {date:'2026-11-20',rows:[['القرآن الكريم','سورة الفاتحة','quran'],['التربية الإسلامية','الله ربي؛ أعبد الله كما علمنا الرسول ﷺ؛ محمد ﷺ نبيي؛ أوحد الله تعالى؛ أنفع ولا أضر','faith,values'],['النشاط العلمي','دروس الوحدة الأولى + الدروس الأربعة من الوحدة الثانية','science1,science2']]}
];
const T=(skill,title,how,m=6)=>({skill,title,how,m});
const schedule={
'2026-11-03':[
 T('arStory','الاستماع إلى حكاية سمسم','اقرأ الحكاية من كتابه، ثم اسأله: من؟ أين؟ ماذا حدث؟',6),
 T('arBlend','تشخيص دمج الأصوات','جرّب رَسَمَ ودَرَسَ بصوت هادئ. سجّل هل حافظ على الترتيب.',7),
 T('frGraphemes','تمييز الحروف الفرنسية','اعرض 5 حروف من القائمة واطلب الإشارة إليها دون تهجئة كلمة.',6),
 T('mathNum','عدّ أدوات من 1 إلى 5','استعمل أقلاماً أو أغطية زجاجات، ثم طابق العدد والكمية.',6)],
'2026-11-04':[
 T('arStory','حكاية: الشخصيات والأحداث','أعد السرد معه باستعمال صورتين أو ثلاث من الكتاب.',6),
 T('frRead','دمج أصوات فرنسية مدروسة','أمثلة بسيطة: la، ma، ami إن كانت قد دُرست قراءةً.',6),
 T('arLetters','تمييز ثلاثة أحرف عربية','استرجع د، م، ر مع الحركات وأشكالها المدرّسة.',5),
 T('mathSort','تصنيف مواد ملموسة','فرز حسب اللون، ثم غيّر المعيار للشكل أو الحجم.',6)],
'2026-11-05':[
 T('arBlend','دمج مقاطع عربية','أشر ببطء إلى رَ → سَ → مَ ثم رَسَمَ دون تسريع مفاجئ.',7),
 T('amazigh38','الأمازيغية: الصفحة 38','راجع محتوى الصفحة من الكتاب؛ اسأل رامي أن يشير ويجيب.',6),
 T('it','المعلوميات: أجزاء ومفاهيم الدرس','استعن بالصور والتعريفات الفعلية بدرس Ordinateur.',6),
 T('mathPair','مطابقة واحد لواحد','ضع 3 ملاعق و3 أغطية، ثم 4 ملاعق و3 أغطية للمقارنة.',6)],
'2026-11-06':[
 T('frGraphemes','تمييز é و e، و m و n','اعرض الحروف من دون إضافة قاعدة نطق غير مدروسة.',6),
 T('arRead','قراءة سطر من كتاب العربية','اطلب قراءة مقطعين وكلمتين مع تتبع الاتجاه الصحيح.',7),
 T('frPoemA','سماع المحفوظة الأولى','اقرأ «C’est la rentrée» من الدفتر بنبرة واضحة.',5),
 T('frPoemB','سماع المحفوظة الثانية','اقرأ «J’ai une maison» من الدفتر بنبرة واضحة.',4),
 T('science1','النشاط العلمي: صور الوحدة 1','اسأله عما يظهر في درس واحد اختاره من الكتاب.',6)],
'2026-11-07':[
 T('arBlend','قراءة رَسَمَ ودَرَسَ','درّب على دمجها ثم اطلب المعنى أو تمثيل الفعل.',7),
 T('frRead','تمييز la / ma / ami','استخدم بطاقات؛ استبدل بكلمات الكتاب إن كانت مختلفة.',7),
 T('frPoemA','ترديد المحفوظة الأولى','قسّم القصيدة إلى أشطر كما هي في دفتره، دون طلب حفظ النص كله دفعة واحدة.',7),
 T('amazigh42','الأمازيغية: الصفحة 42','أنشطة الكتاب صفحة 42.',7),
 T('mathNum','العدد والكمية 1–5','أعطه كمية واطلب اختيار بطاقة العدد المناسب.',7)],
'2026-11-08':[
 T('arStory','اختبار شفهي تجريبي للحكاية','3 أسئلة قصيرة، ودعه يجيب بأسلوبه.',7),
 T('frGraphemes','فحص الحروف العشرة','اعرضها عشوائياً، وسجّل الأخطاء الشائعة.',7),
 T('frPoemB','ترديد المحفوظة الثانية','الاستعانة بالنص الأصلي ثم محاولة الاستظهار.',7),
 T('amazigh43','الأمازيغية: الصفحة 43','مراجعة أمثلة وتمارين الصفحة كما في الدفتر.',6),
 T('mathOrder','مقارنة وترتيب من 1 إلى 5','استعمل بطاقات الأعداد وقطع العد.',7)],
'2026-11-09':[
 T('arStory','سرد الحكاية باستقلال','أعطه تلميحاً واحداً فقط عند الحاجة.',7),
 T('frRead','محاكاة قراءة فرنسية','تمييز الحروف ثم قراءة مقاطع مدروسة من الكتاب.',7),
 T('arRead','محاكاة قراءة عربية','3 مقاطع + كلمتان + جملة قصيرة من الكتاب.',7),
 T('it','مراجعة درس الحاسوب','أسئلة شفوية وبطاقات من صور الدرس المدرسي.',6),
 T('frDict','تمرين إملاء فرنسي تمهيدي','كتابة ثلاثة حروف فرنسية ومقطع سبق تدريسه.',4)],
'2026-11-10':[
 T('arStory','تثبيت حكاية سمسم','سؤال عن الشخصيات والمكان والحدث دون تدريب مطوّل.',6),
 T('frGraphemes','مراجعة الفرنسية قبل الاختبار','بطاقات الحروف العشرة بترتيب غير ثابت.',6),
 T('frRead','قراءة فرنسية خفيفة','مقاطع وكلمتان مألوفتان من دفتر المدرسة.',6),
 T('arLetters','مراجعة حروف العربية','تمييز الحروف الستة بالحركات المدروسة.',5),
 T('mathSpace','التموضع: نشاط حركي قصير','ضع لعبة أعلى أو أسفل شيء، وفق المصطلحات المدروسة.',4)],
'2026-11-11':[
 T('arRead','بعد الاختبار: قراءة عربية','6 دقائق فقط من النصوص المألوفة.',6),
 T('amazigh38','تثبيت الأمازيغية ص 38','سؤال واحد من الصفحة 38.',3),
 T('amazigh42','تثبيت الأمازيغية ص 42','سؤال واحد من الصفحة 42.',3),
 T('amazigh43','تثبيت الأمازيغية ص 43','سؤال واحد من الصفحة 43.',3),
 T('it','المعلوميات: خلاصة الفصل','اسم/وظيفة حسب ما في الدرس.',5),
 T('frPoemA','استظهار C’est la rentrée','استرجاع القصيدة الأولى من النص الأصلي.',4),
 T('frPoemB','استظهار J’ai une maison','استرجاع القصيدة الثانية من النص الأصلي.',4)],
'2026-11-12':[
 T('frDict','الاستعداد لإملاء الجمعة','أملِ الحروف الفرنسية ثم مقاطع/كلمات دُرست في القسم.',8),
 T('arWrite','كتابة الحروف العربية','حرفان أو ثلاثة على السطر مع احترام الشكل.',6),
 T('mathNum','العدد والكمية','العدّ والمطابقة بين 1 و5 بأدوات منزلية.',5),
 T('arBuild','تكوين كلمة بسيطة','رتّب بطاقات حروف كلمة من دفتر العربية.',5),
 T('arDem','استعمال هذا وهذه','جملتان مع أشياء ملموسة أو صور من الدفتر.',4)],
'2026-11-13':[
 T('arDict','إملاء عربي قصير','أملِ حرفين ومقطعين من المقرر واسمح بالتصحيح.',7),
 T('mathSort','التصنيف حسب أربع خصائص','لون، شكل، حجم، طول: مثال ملموس لكل خاصية.',7),
 T('mathPair','التواصل حداً بحد','أزواج من مجموعتين متفاوتتين من 1 إلى 5.',6),
 T('frPronouns','il أو elle','مع صور واضحة لولد وبنت، جملتان قصيرتان.',6),
 T('frSimilar','ملاحظة اختلاف كلمة بحرف','قارن midi وmini أو كلمتين مألوفتين من الدفتر.',4)],
'2026-11-14':[
 T('mathOrder','مقارنة وترتيب الأعداد','رتب 1 إلى 5 ثم اعكس الترتيب واستعمل > و < فقط إذا دُرسا.',7),
 T('mathSpace','التموضع في المكان','ضع لعبة فوق/تحت/أمام/خلف كرسي وفق مفردات القسم.',7),
 T('arWrite','خط ونقل','انسخ حروفاً وكلمات من الدفتر على السطر، دون إكثار.',6),
 T('arNetwork','شبكة الكلمة','استعمل النموذج الفعلي الذي شرحه المعلم.',6),
 T('frSimilar','تمييز الكلمات المتشابهة','اعرض midi وmini، dame وlame؛ لاحظ الحرف المختلف.',7),
 T('arSplit','تجزيء كلمة إلى مقاطع','مثال واحد فقط بالطريقة المستعملة في القسم.',4)],
'2026-11-15':[
 T('mathNum','محاكاة رياضيات 1–5','عدّ ومطابقة كمية وكتابة العدد مع تقليل المساعدة.',6),
 T('mathSort','محاكاة تصنيف ومطابقة','تغيير معيار التصنيف والعدّ واحداً بواحد.',6),
 T('arWrite','محاكاة خط ونقل','حروف منفردة وأشكال حسب الدفتر.',5),
 T('arDict','محاكاة إملاء عربي','ثلاث وحدات قصيرة مدروسة، دون ضغط.',5),
 T('frSentence','ترتيب جملة فرنسية','نشاط البطاقات القصيرة، وقراءة الجملة الناتجة.',6),
 T('arDem','هذا وهذه','أشر إلى أشياء فعلية واطلب الجملة المناسبة.',5)],
'2026-11-16':[
 T('arBuild','بناء الكلمات','حروف مبعثرة من الدفتر يعيد تركيبها.',6),
 T('arSplit','تجزيء الكلمات','تحليل كلمتين بالطريقة المدرسية المعتمدة.',6),
 T('arNetwork','شبكة الكلمة','طبّق نموذج معلم رامي على كلمة من الدرس.',6),
 T('frPronouns','تمييز il و elle','ثلاث جمل مرتبطة بصور أو أسماء واضحة.',5),
 T('frSentence','ترتيب الكلمات الفرنسية','ركّب جملتين من كلمات مألوفة.',5),
 T('english1','تمهيد Unit 1 / Lesson 1','استمع لثلاثة تعبيرات من الدرس مع رامي.',3)],
'2026-11-17':[
 T('english1','الإنجليزية: Lesson 1','مطابقة الصور بالتعابير والنطق من الكتاب.',6),
 T('art','التربية الفنية: الوحدة 1','انظر مع رامي إلى أعماله ومفاهيم المعلم.',6),
 T('english2','تمهيد الإنجليزية Lesson 2','بطاقتان فقط من الدرس الثاني كما في الكتاب.',4),
 T('science2','النشاط العلمي: الوحدة 2','راجع الدرسين الأول والثاني من الدروس الأربعة.',6),
 T('quran','الفاتحة','تلاوة قصيرة دون ضغط على السرعة.',5),
 T('sport','الاستعداد للجري','نشاط خفيف وآمن يراعي تعب رامي بعد الاختبار.',4)],
'2026-11-18':[
 T('english2','الإنجليزية: Lesson 2','نشاط تعرّف واستجابة من الكتاب.',6),
 T('sport','الجري','نشاط حركة خفيف آمن وتذكير بالتعليمات.',5),
 T('faith','الله ربي + أعبد الله','سؤال وجواب قصيران من الدرسين.',6),
 T('values','محمد نبيي + أوحد الله + أنفع ولا أضر','أمثلة حياتية بسيطة من مضامين الدروس.',6),
 T('science1','النشاط العلمي: مراجعة الوحدة 1','صور الدروس وأسئلة قصيرة مألوفة.',6),
 T('art','التربية الفنية: تثبيت الوحدة','سؤال واحد من دفتر الوحدة الأولى أو مشاهدة عمل فني.',4)],
'2026-11-19':[
 T('quran','تلاوة سورة الفاتحة','تلاوة هادئة وتثبيت المواضع الصعبة.',5),
 T('faith','الدرسَان: عقيدة واستجابة','استرجاع فكرتين من كل درس.',5),
 T('values','اقتداء + قسط + حكمة','سؤال تطبيقي من كل محور.',5),
 T('science2','الدروس الأربعة للوحدة 2','سؤال واحد من كل درس باستخدام كتابه.',7),
 T('science1','النشاط العلمي: الوحدة 1','العودة إلى أصعب درس فقط.',5)],
'2026-11-20':[
 T('quran','مراجعة شفوية خفيفة','تلاوة واحدة فقط إن رغب رامي.',4),
 T('science1','استرجاع معلومات علمية','سؤالان سهلان من الصور دون معلومة جديدة.',4),
 T('values','تذكير بالقيم','مثال واحد على أنفع ولا أضر.',3)]
};
const dates=Object.keys(schedule).sort();
const today=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');};
const dateObj=x=>new Date(x+'T12:00:00');
const dayName=x=>new Intl.DateTimeFormat('ar-MA',{weekday:'long'}).format(dateObj(x));
const displayDate=x=>`${dayName(x)} ${Number(x.slice(8))} نونبر`;
const safe=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const K='rami-revisions-v2';
let canPersist=true;
const fresh=()=>({version:2,results:{},notes:{}});
function load(){try{let raw=localStorage.getItem(K);if(!raw)return fresh();let s=JSON.parse(raw);if(!s||s.version!==2||typeof s.results!=='object'||typeof s.notes!=='object')return fresh();return s;}catch(_){canPersist=false;return fresh();}}
let data=load();
function persist(){try{localStorage.setItem(K,JSON.stringify(data));canPersist=true;}catch(_){canPersist=false;toast('التخزين المحلي غير متاح. استخدم تصدير نسخة من التقدم.');}}
const allTasks=dates.flatMap(d=>schedule[d].map((t,i)=>({...t,id:`${d}-${i}`,date:d})));
const taskMap=Object.fromEntries(allTasks.map(t=>[t.id,t]));
function entriesFor(skill){return allTasks.filter(t=>t.skill===skill&&['support','independent'].includes(data.results[t.id])).map(t=>({...t,result:data.results[t.id]}));}
function mastery(id){let logs=entriesFor(id);if(!logs.length)return {level:0,text:'لم يُقيّم',css:''};let last=logs[logs.length-1];if(last.result==='support')return {level:1,text:'يحتاج دعماً',css:'amber'};let goodDates=new Set(logs.filter(x=>x.result==='independent').map(x=>x.date));return goodDates.size>=2?{level:3,text:'مستقر مبدئياً',css:'green'}:{level:2,text:'محاولة مستقلة',css:'navy'};}
const progress=()=>{const touched=allTasks.filter(t=>data.results[t.id]).length;const stable=skills.filter(s=>mastery(s.id).level===3).length;return {touched,all:allTasks.length,pct:Math.round(100*touched/allTasks.length),stable,total:skills.length};};
let page='home',selectedDate=(today()>=START&&today()<=END)?today():START,skillFilter='الكل',examFilter='الكل',activity='arabic',arIndex=0,arReveal=false,frIndex=0,mathIndex=0,frWritingIndex=0,deixisIndex=0,chosenOrder=[],feedback=null;
const names={home:'لوحة المتابعة',plan:'برنامجي اليومي',exams:'الاختبارات والمقررات',skills:'إتقان المهارات',activities:'أنشطة تدريبية',report:'التقرير والنسخ الاحتياطي',guide:'الدليل البيداغوجي'};
function setPage(p){if(!(p in names))return;page=p;document.getElementById('pageTitle').textContent=names[p];document.querySelectorAll('.nav-link').forEach(n=>{n.classList.toggle('active',n.dataset.page===p);n.setAttribute('aria-current',n.dataset.page===p?'page':'false')});document.querySelector('.sidebar').classList.remove('open');render();window.scrollTo({top:0,behavior:'smooth'});}
function toast(txt){let t=document.getElementById('toast');t.textContent=txt;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),2800);}
function bar(p){return `<div class="progress" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100"><div class="progress-fill" style="width:${p}%"></div></div>`}
function statusChip(level){let t=['لم يبدأ','بمساعدة','محاولة مستقلة','مستقر مبدئياً'][level];return `<span class="chip ${['','amber','navy','green'][level]}">${t}</span>`}
function examDateLabel(d){return displayDate(d).replace(' نونبر',' نونبر 2026')}
function remainingDays(){let now=today(),next=exams.find(e=>e.date>=now);if(!next)return null;return {event:next,days:Math.round((dateObj(next.date)-dateObj(now))/86400000)}}
function topHero(){let r=remainingDays(),p=progress();let sentence=r?`الاختبار المقبل: ${displayDate(r.event.date)} — ${r.days===0?'اليوم':r.days===1?'غداً':`بعد ${r.days} أيام`}`:'انتهت الفترة المحددة للاختبارات؛ يمكنك الاحتفاظ بسجل المراجعة.';return `<div class="hero"><div><div class="hero-label">✦ خطة تعليمية متدرجة · 2026 / 2027</div><h2>خطوة صغيرة كل يوم،<br>وتقدم واضح لرامي.</h2><p>${sentence}</p><button class="button ghost-invert" data-go="plan">ابدأ مراجعة اليوم ←</button></div><div class="hero-stat"><strong>${p.pct}%</strong><small>من أنشطة الخطة المنجزة</small></div></div>`}
function statsHTML(){let p=progress(),next=remainingDays(),remaining=allTasks.filter(t=>t.date>=today()&&!data.results[t.id]).length;return `<div class="stats"><div class="stat"><div class="label">أنشطة أُنجزت</div><div class="value">${p.touched} <span class="muted" style="font-size:13px">/ ${p.all}</span></div><div class="sub">يشمل الإنجاز بمساعدة</div></div><div class="stat"><div class="label">مهارات مستقرة مبدئياً</div><div class="value accent">${p.stable} <span class="muted" style="font-size:13px">/ ${p.total}</span></div><div class="sub">محاولتان مستقلتان في يومين</div></div><div class="stat"><div class="label">الاختبار المقبل</div><div class="value">${next?Number(next.event.date.slice(8)):'—'}</div><div class="sub">${next?'نونبر 2026':'اكتملت فترة الاختبارات'}</div></div><div class="stat"><div class="label">أنشطة قادمة غير منجزة</div><div class="value">${remaining}</div><div class="sub">حتى 20 نونبر</div></div></div>`}
function todayPanel(){let s=selectedDate,ts=schedule[s]||[],done=ts.filter((_,i)=>data.results[`${s}-${i}`]).length;return `<div class="panel"><div class="panel-head"><div><h3>خطة ${displayDate(s)}</h3><span class="helper">${ts.reduce((a,b)=>a+b.m,0)} دقيقة أنشطة + فواصل قصيرة للحركة</span></div><span class="chip ${done===ts.length?'green':'navy'}">${done}/${ts.length}</span></div><div class="tasks">${ts.slice(0,4).map((t,i)=>`<div class="exam-mini"><div class="date-tile" style="height:36px;width:36px;min-width:36px;font-size:14px">${data.results[`${s}-${i}`]?'✓':i+1}</div><div class="exam-mini-content"><b>${safe(t.title)}</b><p>${safe(skillMap[t.skill].domain)} · ${t.m} دقائق</p></div></div>`).join('')}</div><button class="button ghost" style="margin-top:15px;width:100%" data-go="plan">فتح الحصة وتسجيل الأداء ←</button></div>`}
function miniExams(){let now=today();let shown=exams.filter(e=>e.date>=now).slice(0,4);if(!shown.length)shown=exams.slice(-4);return `<div class="panel"><div class="panel-head"><h3>مواعيد الاختبارات</h3><button class="button small ghost" data-go="exams">عرض الكل</button></div>${shown.map(e=>`<div class="exam-mini"><div class="date-tile"><b>${Number(e.date.slice(8))}</b><small>نونبر</small></div><div class="exam-mini-content"><b>${safe(e.rows.map(r=>r[0].split(' · ')[0]).join(' · '))}</b><p>${dayName(e.date)} · ${e.rows.length} ${e.rows.length===1?'مجال':'مجالات'}</p></div></div>`).join('')}</div>`}
function urgentSkills(){let att=skills.filter(s=>mastery(s.id).level<3).sort((a,b)=>Number(a.exam)-Number(b.exam)).slice(0,6);return `<div class="panel"><div class="panel-head"><h3>مهارات تحتاج إلى تعزيز</h3><button class="button small ghost" data-go="skills">جميع المهارات</button></div>${att.map(s=>`<div class="exam-mini"><div class="exam-mini-content"><b>${safe(s.name)}</b><p>${safe(s.domain)} · اختبار ${s.exam} نونبر</p></div>${statusChip(mastery(s.id).level)}</div>`).join('')}<p class="helper">هذا ترتيب متابعة فقط، وليس تشخيصاً لقدرات الطفل.</p></div>`}
function renderHome(){return `${topHero()}${statsHTML()}<div class="section" style="margin-top:21px"><div class="grid-2">${todayPanel()}${miniExams()}</div></div><div class="section"><div class="grid-2">${urgentSkills()}<div class="panel"><h3>كيف نقيس التقدم؟</h3><div style="margin:16px 0">${bar(progress().pct)}</div><div class="guide-step"><b>١</b><div>تُجرى المحاولة في 5–8 دقائق دون إجهاد.</div></div><div class="guide-step"><b>٢</b><div>نسجل «بمساعدة» أو «بشكل مستقل»، وليس «صحيح/خاطئ» فقط.</div></div><div class="guide-step"><b>٣</b><div>لا نعتبر المهارة مستقرة مبدئياً إلا بعد استقلال في يومين مختلفين، وآخر محاولة مستقلة.</div></div><div class="notice warning">إذا تعثّر رامي في الدمج، نقلّل صعوبة الكلمات ونعود إلى صوتين، ثم ثلاثة. تجنب الاستعجال أو التكرار العقابي.</div></div></div></div>`}
function renderPlan(){let ts=schedule[selectedDate],done=ts.filter((_,i)=>data.results[`${selectedDate}-${i}`]).length,total=ts.reduce((a,x)=>a+x.m,0),evt=exams.find(e=>e.date===selectedDate);return `<div class="section"><div class="section-head"><div><h2>برنامج يوم بيوم</h2><p>من 3 إلى 20 نونبر · اختر التاريخ وتابع الإنجاز والمساعدة المطلوبة</p></div><span class="chip">18 يوماً</span></div><div class="calendar-scroll"><div class="dates-strip">${dates.map(d=>{let count=schedule[d].filter((_,i)=>data.results[`${d}-${i}`]).length;return `<button class="date-button ${d===selectedDate?'selected':''} ${exams.some(x=>x.date===d)?'has-exam':''}" data-date="${d}" aria-pressed="${d===selectedDate}"><span>${dayName(d)}</span><strong>${Number(d.slice(8))}</strong><small>${count===schedule[d].length?'✓ مكتمل':exams.some(x=>x.date===d)?'● اختبار':`${count}/${schedule[d].length}`}</small></button>`}).join('')}</div></div></div><div class="day-summary"><div><h2>${displayDate(selectedDate)}</h2><p>${total} دقيقة صافية · ${ts.length} أنشطة · استراحة حركية بعد 8–10 دقائق</p></div><div><span class="chip ${done===ts.length&&done>0?'green':done?'navy':''}">${done===ts.length&&done>0?'أنشطة اليوم مكتملة':`${done}/${ts.length} أنشطة منجزة`}</span></div></div>${evt?`<div class="notice warning section"><strong>موعد اختبار اليوم</strong>${safe(evt.rows.map(x=>x[0]).join(' · '))}<br>الأنشطة التالية مراجعة خفيفة بعد الاختبار، وليست واجباً إضافياً إلزامياً.</div>`:''}<div class="tasks section">${ts.map((t,i)=>{let id=`${selectedDate}-${i}`,v=data.results[id],s=skillMap[t.skill];return `<article class="task ${v?'done':''}"><div class="task-index">${v?'✓':i+1}</div><div><h3>${safe(t.title)}</h3><p>${safe(s.domain)} · <span class="task-time">${t.m} دقائق</span></p><div class="guide-text">${safe(t.how)}</div></div><div class="task-actions"><button class="rate ${v==='support'?'active support':''}" data-result="support" data-task="${id}" aria-pressed="${v==='support'}">تم بمساعدة</button><button class="rate ${v==='independent'?'active independent':''}" data-result="independent" data-task="${id}" aria-pressed="${v==='independent'}">تم باستقلال</button>${v?`<button class="rate clear" data-result="clear" data-task="${id}" title="إلغاء التسجيل">↶ تراجع</button>`:''}</div></article>`}).join('')}</div><div class="panel"><div class="panel-head"><h3>ملاحظات ولي الأمر</h3><span class="helper">تُحفظ على هذا الجهاز</span></div><textarea id="dailyNote" class="day-notes" maxlength="3000" placeholder="مثال: رامي يخلط بين م و ن، لكنه دمج رَسَمَ بمساعدة بسيطة..."></textarea><p class="helper" style="margin:9px 0 0">تُحفظ الملاحظة عند مغادرة الحقل. سجّل نوع المساعدة وما إذا كان الطفل متعباً.</p></div><div class="notice section" style="margin-top:15px"><strong>مبدأ مهم</strong>إنجاز النشاط لا يعني الإتقان. يُستحسن إعادة المهارات الصعبة في يوم لاحق مع تقليل كمية التمرين، وليس زيادة الوقت.</div>`}
function renderExams(){return `<div class="section-head"><div><h2>المقررات الرسمية من الورقتين</h2><p>دُمجت اختبارات العربية والرياضيات والفرنسية وبقية المواد دون إسقاط تواريخ</p></div></div><div class="notice warning section"><strong>حدود المعلومات المتاحة</strong>المقررات تحدد الموضوعات، لكنها لا تتضمن نص الحكاية أو المحفوظتين أو دروس الوحدات في الأمازيغية والعلوم والفنية والإنجليزية. راجع كتاب رامي قبل اعتماد أي مثال تفصيلي.</div>${exams.map(e=>`<div class="exam-card"><div class="exam-top"><h3>${examDateLabel(e.date)}</h3><span class="chip ${e.date<today()?'':'amber'}">${e.rows.length} ${e.rows.length===1?'مادة / مجال':'مواد / مجالات'}</span></div>${e.rows.map(r=>`<div class="exam-subject"><span>${safe(r[0])}</span><p>${safe(r[1])}</p></div>`).join('')}</div>`).join('')}<div class="panel section"><details><summary style="cursor:pointer;font-weight:750">عرض صور برنامجي الاختبارات الأصليين للتحقق</summary><div class="grid-2" style="margin-top:15px"><figure style="margin:0"><img src="sources/source_ar.jpg" alt="ورقة برنامج اللغة العربية وبقية المواد" loading="lazy" style="max-width:100%;border:1px solid #dce7ee;border-radius:10px"><figcaption class="helper">اللغة العربية وبقية المواد</figcaption></figure><figure style="margin:0"><img src="sources/source_fr_math.jpg" alt="ورقة برنامج الرياضيات والفرنسية" loading="lazy" style="max-width:100%;border:1px solid #dce7ee;border-radius:10px"><figcaption class="helper">الرياضيات والفرنسية</figcaption></figure></div></details></div>`}
function renderSkills(){let domains=['الكل',...new Set(skills.map(s=>s.domain))],filtered=skills.filter(s=>skillFilter==='الكل'||s.domain===skillFilter),stable=skills.filter(s=>mastery(s.id).level===3).length;return `<div class="section-head"><div><h2>إتقان المهارات لا مجرد إنهاء الحصص</h2><p>آخر محاولة «بمساعدة» تعني أن المهارة تحتاج إلى تعزيز حتى لو نجح سابقاً</p></div><span class="chip green">${stable}/${skills.length} مستقرة</span></div><div class="section inline-flex"><label for="skillFilter" class="helper">المادة:</label><select class="filter-select" id="skillFilter">${domains.map(d=>`<option ${d===skillFilter?'selected':''} value="${safe(d)}">${safe(d)}</option>`).join('')}</select></div><div class="skills-grid section">${filtered.map(s=>{let m=mastery(s.id),logs=entriesFor(s.id);return `<div class="skill-card"><span class="skill-name">${safe(s.name)}</span><span class="skill-detail">${safe(s.detail)}</span><div class="skill-bottom"><span class="helper">${safe(s.domain)} · ${s.exam} نونبر<br>${logs.length} محاولات مسجلة</span>${statusChip(m.level)}</div><details><summary style="cursor:pointer;font-size:11px;color:#287d7a;margin-top:8px">كيف أتحقق منها؟</summary><p class="helper" style="margin:7px 0 0">${safe(s.teacher)}</p></details></div>`}).join('')}</div>`}
const arWords=[{parts:['رَ','سَ','مَ'],word:'رَسَمَ',hint:'اسأله: ماذا فعل الطفل بالقلم؟',stages:['رَ','رَسَ','رَسَمَ']},{parts:['دَ','رَ','سَ'],word:'دَرَسَ',hint:'اسأله: ماذا فعل التلميذ في المدرسة؟',stages:['دَ','دَرَ','دَرَسَ']}];
const frQuestions=[
{prompt:'أي حرف هو m ؟',options:['n','m','l'],correct:'m',why:'انتبه إلى عدد الأعمدة واتجاهها.'},
{prompt:'أي حرف هو n ؟',options:['m','n','d'],correct:'n',why:'نميز شكل n عن m بصرياً.'},
{prompt:'اختر الحرف é مع العلامة.',options:['e','c','é'],correct:'é',why:'é يحمل accent aigu، أما e فلا يحمل هذه العلامة.'},
{prompt:'أين الحرف l الصغير؟',options:['i','l','d'],correct:'l',why:'الحرف l مختلف عن i حتى إن بدا الشكلان متقاربين في بعض الخطوط.'},
{prompt:'أين الحرف o ؟',options:['a','o','c'],correct:'o',why:'الحرف o دائري ومغلق.'},
{prompt:'أين الحرف c ؟',options:['d','c','e'],correct:'c',why:'هذا نشاط تمييز بصري للحرف c؛ نطقه يتغير حسب الحرف الموالي.'},
{prompt:'أين الحرف d ؟',options:['d','l','a'],correct:'d',why:'راقب العمود والدائرة في شكل d.'},
{prompt:'أين الحرف a ؟',options:['o','e','a'],correct:'a',why:'انتبه لشكل a.'},
{prompt:'أين الحرف i ؟',options:['i','l','é'],correct:'i',why:'الحرف i له نقطة في كتابته الصغيرة المعتادة.'},
{prompt:'أين الحرف e ؟',options:['é','e','c'],correct:'e',why:'هذا هو الحرف e دون accent.'}
];
const mathQuestions=[
{q:'كم دائرة ترى؟',visual:'● ● ●',options:['2','3','4'],answer:'3',why:'المس كل دائرة مرة واحدة: واحد، اثنان، ثلاثة.'},
{q:'ما العدد الأكبر؟',visual:'2     5',options:['2','3','5'],answer:'5',why:'خمس قطع أكثر من قطعتين.'},
{q:'أكمل الترتيب: 1 ، 2 ، ؟ ، 4 ، 5',visual:'',options:['5','3','2'],answer:'3',why:'العدد الذي يأتي بعد 2 هو 3.'},
{q:'هل كل قلم له غطاء؟',visual:'✏️ ✏️ ✏️      ◯ ◯',options:['نعم','لا'],answer:'لا',why:'ثلاثة أقلام وغطاءان: قلم واحد بلا غطاء. هذا تواصل حداً بحد.'},
{q:'صنّف حسب اللون: ما العنصر المختلف في اللون؟',visual:'🔴  🔴  🔵',options:['الأول','الثاني','الثالث'],answer:'الثالث',why:'الاثنان الأولان أحمران، والثالث أزرق.'},
{q:'ما العدد الأصغر؟',visual:'1      4',options:['4','1','5'],answer:'1',why:'واحد أصغر من أربعة.'}
];
const demonstratives=[{q:'🚪 باب',answer:'هذا',why:'«باب» اسم مذكر: هذا باب.'},{q:'🌹 وردة',answer:'هذه',why:'«وردة» اسم مؤنث: هذه وردة.'},{q:'📘 كتاب',answer:'هذا',why:'«كتاب» اسم مذكر: هذا كتاب.'},{q:'🪑 طاولة',answer:'هذه',why:'«طاولة» اسم مؤنث: هذه طاولة.'}];
const pronouns=[{q:'Le papa est là.  …  a mal.',options:['il','elle'],answer:'il',why:'Le papa شخص مذكر، لذلك نختار il.'},{q:'La maman est là.  …  a mal.',options:['il','elle'],answer:'elle',why:'La maman شخص مؤنث، لذلك نختار elle.'},{q:'Le garçon est là.  …  a mal.',options:['il','elle'],answer:'il',why:'Le garçon ⟶ il.'},{q:'La fille est là.  …  a mal.',options:['il','elle'],answer:'elle',why:'La fille ⟶ elle.'}];
const reorder=[
 {words:['mal.','a','Mila'],correct:['Mila','a','mal.'],why:'Mila a mal. الفاعل ثم الفعل ثم باقي الجملة.'},
 {words:['dame','mal.','La','a'],correct:['La','dame','a','mal.'],why:'La dame a mal. نبدأ بأداة التعريف ثم الاسم ثم الفعل.'},
];
const actTabs=[['arabic','العربية: دمج الأصوات'],['french','الفرنسية: تمييز الحروف'],['math','الرياضيات 1–5'],['deixis','هذا / هذه'],['pronouns','Français : il / elle'],['order','ترتيب جملة فرنسية']];
function renderActivities(){let content='';
if(activity==='arabic'){let w=arWords[arIndex];content=`<div class="activity-head"><h3>الدمج الصوتي المتدرج</h3><span class="chip">${arIndex+1} / ${arWords.length}</span></div><p class="helper">اسمع من رامي أولاً. انطق معه الأصوات بالترتيب من اليمين إلى اليسار، بلا مطالبة بالسرعة.</p><div class="options" dir="rtl" style="margin-top:27px">${w.parts.map(p=>`<span class="grapheme ar" lang="ar">${p}</span>`).join('')}</div>${arReveal?`<div class="quiz-prompt arabic-word">${w.word}</div><p class="feedback">${w.hint}</p>`:`<p class="quiz-prompt muted" style="font-size:16px">اربط الصوت الأول بالثاني، ثم أضف الثالث.</p>`}<div class="activity-actions"><button class="button primary" data-act="ar-reveal">${arReveal?'إخفاء الكلمة':'إظهار الكلمة كاملة'}</button><button class="button ghost" data-act="ar-next">كلمة أخرى ←</button></div><p class="notice warning" style="margin-top:25px">إذا غيّر ترتيب الأصوات، ارجع إلى صوتين فقط، ثم أضف الثالث. لا تقلب الحروف في التمرين نفسه ولا تكرر الكلمة عشرات المرات.</p>`;}
if(activity==='french'){let q=frQuestions[frIndex],answer=feedback?.for==='french'?feedback:null;content=`<div class="activity-head"><h3>التمييز البصري للحروف الفرنسية</h3><span class="chip">${frIndex+1}/${frQuestions.length}</span></div><p class="helper">اقرأ السؤال لرامي إن لزم. هذا اختبار تعرف بصري، لا يعوّض اختبار النطق والقراءة معك.</p><div class="quiz-prompt ltr" lang="fr">${safe(q.prompt)}</div><div class="options ltr">${q.options.map(c=>`<button class="option ltr ${answer&&answer.value===c?(answer.correct?'good':'bad'):''}" data-choose="french" data-value="${c}" lang="fr">${c}</button>`).join('')}</div>${answer?`<p class="feedback ${answer.correct?'':'error'}">${answer.correct?'أحسنت!':'حاول مرة أخرى بعد ملاحظة الفرق.'} ${q.why}</p>`:''}<div class="activity-actions"><button class="button primary" data-act="french-next">الحرف التالي ←</button><button class="button ghost" data-act="french-restart">إعادة البدء</button></div>`;}
if(activity==='math'){let q=mathQuestions[mathIndex],answer=feedback?.for==='math'?feedback:null;content=`<div class="activity-head"><h3>الرياضيات · العدد والتصنيف والمطابقة</h3><span class="chip">${mathIndex+1}/${mathQuestions.length}</span></div><div class="quiz-prompt">${safe(q.q)}</div>${q.visual?`<div style="text-align:center;direction:ltr;font-size:30px;letter-spacing:5px;margin-bottom:18px">${safe(q.visual)}</div>`:''}<div class="options">${q.options.map(o=>`<button class="option ${answer&&answer.value===o?(answer.correct?'good':'bad'):''}" data-choose="math" data-value="${safe(o)}">${safe(o)}</button>`).join('')}</div>${answer?`<p class="feedback ${answer.correct?'':'error'}">${answer.correct?'إجابة صحيحة.':'أعد العدّ بهدوء.'} ${safe(q.why)}</p>`:''}<div class="activity-actions"><button class="button primary" data-act="math-next">نشاط آخر ←</button></div><p class="helper" style="text-align:center;margin-top:20px">الأفضل إعادة التمرين بأشياء ملموسة، خاصة المطابقة والتموضع.</p>`;}
if(activity==='deixis'){let q=demonstratives[deixisIndex],answer=feedback?.for==='deixis'?feedback:null;content=`<div class="activity-head"><h3>أسماء الإشارة للمفرد: هذا / هذه</h3><span class="chip">${deixisIndex+1}/${demonstratives.length}</span></div><p class="helper">اقرأ اسم الشيء لرامي؛ هذا نشاط فهم شفهي، ولا يلزمه قراءة جميع حروف أسماء الأشياء.</p><div class="quiz-prompt">${q.q}</div><div class="options">${['هذا','هذه'].map(o=>`<button class="option ${answer&&answer.value===o?(answer.correct?'good':'bad'):''}" data-choose="deixis" data-value="${o}">${o}</button>`).join('')}</div>${answer?`<p class="feedback ${answer.correct?'':'error'}">${q.why}</p>`:''}<div class="activity-actions"><button class="button primary" data-act="deixis-next">مثال آخر ←</button></div>`;}
if(activity==='pronouns'){let idx=frWritingIndex%pronouns.length,q=pronouns[idx],answer=feedback?.for==='pronouns'?feedback:null;content=`<div class="activity-head"><h3>Compléter avec « il » ou « elle »</h3><span class="chip">${idx+1}/${pronouns.length}</span></div><div class="quiz-prompt ltr" lang="fr">${safe(q.q)}</div><div class="options ltr">${q.options.map(o=>`<button class="option ${answer&&answer.value===o?(answer.correct?'good':'bad'):''}" data-choose="pronouns" data-value="${o}">${o}</button>`).join('')}</div>${answer?`<p class="feedback ${answer.correct?'':'error'}">${q.why}</p>`:''}<div class="activity-actions"><button class="button primary" data-act="pronouns-next">الجملة التالية ←</button></div><p class="helper" style="text-align:center;margin-top:20px">الجمل نماذج تدريبية. اقرأها لرامي إذا كانت بعض كلماتها لم تُدرس قراءةً بعد.</p>`;}
if(activity==='order'){let q=reorder[frWritingIndex%reorder.length],answer=feedback?.for==='order'?feedback:null;content=`<div class="activity-head"><h3>Remettre les mots dans l’ordre</h3><span class="chip">${frWritingIndex%reorder.length+1}/${reorder.length}</span></div><p class="helper" style="text-align:center">اضغط على الكلمات بالترتيب الصحيح. يمكن التراجع عن آخر كلمة.</p><div class="word-board">${q.words.map((w,i)=>`<button class="word-tile" data-order-pick="${i}" ${chosenOrder.includes(i)?'disabled':''}>${safe(w)}</button>`).join('')}</div><div class="answer-board word-board">${chosenOrder.length?q.words.filter((_,i)=>chosenOrder.includes(i)).length&&chosenOrder.map(i=>`<span class="word-tile" style="background:#fff">${safe(q.words[i])}</span>`).join(''):'<span class="muted">الجملة هنا...</span>'}</div>${answer?`<p class="feedback ${answer.correct?'':'error'}">${answer.correct?'ترتيب صحيح!':'الترتيب يحتاج إلى تعديل.'} ${safe(q.why)}</p>`:''}<div class="activity-actions"><button class="button primary" data-act="order-check">تحقق من الجملة</button><button class="button ghost" data-act="order-undo">تراجع عن كلمة</button><button class="button ghost" data-act="order-next">جملة أخرى ←</button></div>`;}
return `<div class="section-head"><div><h2>أنشطة تدريبية مع رامي</h2><p>تمارين نموذجية قابلة للتكرار، لا تُحدد وحدها جاهزية الاختبار</p></div></div><div class="tabs" role="tablist" aria-label="نوع النشاط">${actTabs.map(([id,name])=>`<button role="tab" aria-selected="${id===activity}" class="tab ${id===activity?'active':''}" data-activity="${id}">${name}</button>`).join('')}</div><div class="activity-frame section">${content}</div><div class="notice"><strong>من اللعبة إلى المتابعة</strong>بعد التدريب، افتح «برنامجي اليومي» وسجّل هل أنجز رامي المهارة بمساعدة أم باستقلال. لا نسجل الإتقان آلياً من اختيار جواب واحد.</div>`}
function resultSummary(){let byDomain={};skills.forEach(s=>{byDomain[s.domain]??={all:0,stable:0,attempts:0};byDomain[s.domain].all++;byDomain[s.domain].stable+=mastery(s.id).level===3?1:0;byDomain[s.domain].attempts+=entriesFor(s.id).length});return byDomain;}
function renderReport(){let p=progress(),domain=resultSummary(),noted=Object.keys(data.notes).filter(d=>data.notes[d]?.trim());return `<div class="section-head"><div><h2>تقرير تقدم رامي</h2><p>يُحسب من الملاحظات الفعلية وليس من إجابات الألعاب وحدها</p></div><span class="chip navy">${p.pct}% إنجاز</span></div><div class="stats section"><div class="stat"><div class="label">الأنشطة المنجزة</div><div class="value">${p.touched}/${p.all}</div></div><div class="stat"><div class="label">المهارات المستقرة</div><div class="value accent">${p.stable}/${p.total}</div></div><div class="stat"><div class="label">الأيام التي جرت فيها مراجعة</div><div class="value">${dates.filter(d=>schedule[d].some((_,i)=>data.results[`${d}-${i}`])).length}/18</div></div><div class="stat"><div class="label">أيام بها ملاحظات</div><div class="value">${noted.length}</div></div></div><div class="panel section"><h3 style="margin-bottom:13px">حسب المادة</h3><div class="table-wrap"><table class="report-table"><thead><tr><th>المادة</th><th>مهارات البرنامج</th><th>مستقرة مبدئياً</th><th>محاولات مسجلة</th></tr></thead><tbody>${Object.entries(domain).map(([k,v])=>`<tr><td>${safe(k)}</td><td>${v.all}</td><td>${v.stable}</td><td>${v.attempts}</td></tr>`).join('')}</tbody></table></div></div><div class="panel section"><h3 style="margin-bottom:13px">ملاحظات الأيام</h3>${noted.length?noted.map(d=>`<div class="exam-mini"><div class="exam-mini-content"><b>${displayDate(d)}</b><p style="white-space:pre-wrap">${safe(data.notes[d])}</p></div></div>`).join(''):'<div class="empty">لم تسجل ملاحظات بعد. يمكنك إضافتها من صفحة البرنامج اليومي.</div>'}</div><div class="panel section"><h3 style="margin-bottom:9px">حفظ البيانات ونقلها</h3><p class="helper">البيانات محفوظة محلياً في المتصفح والجهاز الحالي فقط، دون حساب أو إرسال إلى خادم. إذا مسحت بيانات المتصفح، قد تفقد التقدم؛ احتفظ بنسخة JSON دورياً.</p><div class="inline-flex" style="margin-top:15px"><button class="button primary" data-report="export">↓ تنزيل نسخة JSON</button><button class="button ghost" data-report="import">↑ استيراد نسخة محفوظة</button><button class="button ghost" data-report="print">طباعة هذا التقرير</button><button class="button danger" data-report="reset">إعادة ضبط جميع النتائج</button></div>${!canPersist?'<p class="notice warning" style="margin-top:14px">المتصفح لا يتيح التخزين المحلي حالياً؛ صدّر نسخة قبل إغلاق الصفحة.</p>':''}</div>`}
function renderGuide(){return `<div class="section-head"><div><h2>دليل ولي الأمر</h2><p>طرق قصيرة ومدروسة لمساعدة تلميذ في السنة الأولى</p></div></div><div class="grid-2 section"><div class="panel"><h3>حصة قصيرة قابلة للتنفيذ</h3><div class="guide-step" style="margin-top:16px"><b>١</b><div>ابدأ بنجاح سهل من اليوم السابق، مدة 2–3 دقائق.</div></div><div class="guide-step"><b>٢</b><div>نفذ نشاطاً واحداً 6–8 دقائق، ثم استراحة حركية دقيقتين.</div></div><div class="guide-step"><b>٣</b><div>نفذ نشاطاً مختلفاً 6–8 دقائق، ثم نشاط استرجاع بسيط أو إنهاء الحصة.</div></div><div class="guide-step"><b>٤</b><div>سجّل النتيجة دون مكافأة السرعة أو عقوبة الخطأ.</div></div><p class="notice">في نهاية الأسبوع يمكن توزيع 30–40 دقيقة على فترتين منفصلتين. تقليل المدة أفضل من إجبار رامي على إكمال البرنامج وهو متعب.</p></div><div class="panel"><h3>عند صعوبة دمج الأصوات</h3><div class="guide-step" style="margin-top:16px"><b>١</b><div>انطق كل صوت مع حركته، وأشر إلى الحرف الذي تقرؤه.</div></div><div class="guide-step"><b>٢</b><div>ادمج الصوتين الأولين، ثم أضف الصوت الثالث تدريجياً.</div></div><div class="guide-step"><b>٣</b><div>إذا قال «رَمَسَ» بدل «رَسَمَ»، لا تطلب السرعة: اعرض الترتيب ببطء من جديد.</div></div><div class="guide-step"><b>٤</b><div>راجع الكلمة في اليوم التالي. المحاولتان المستقلتان في يومين مؤشر عملي، لا تشخيص أو معيار علمي مطلق.</div></div><p class="helper">انتبه: «م، ب، د» أصوات ساكنة عند تجريدها، ولا نضيف حركة لم تُكتب؛ في العربية استخدم الحركات المطبوعة كما دُرست، وفي الفرنسية لا تُدخل صوتاً زائداً مع الحرف الساكن.</p></div><div class="panel"><h3>الفرنسية: دقة مهمة</h3><p style="font-size:13px;margin:13px 0">القائمة التي كتبها الأستاذ تحت «les sons» تضم رموزاً كتابية وحروفاً، وليست جميعها أصواتاً مستقلة ثابتة. حرف <span class="ltr">c</span> يتغير نطقه حسب السياق، وكذلك قد تختلف قيمة <span class="ltr">e</span> داخل الكلمات. لذلك ركّز أولاً على التعرف عليها كما دُرست في الكتاب.</p><p style="font-size:13px">في نشاط <span class="ltr">il / elle</span> احرص على توضيح المرجع: ولد/بنت أو رجل/امرأة، ولا تُلقّن الضمير عشوائياً.</p></div><div class="panel"><h3>ما لا نُخمنه من الورقتين</h3><p style="font-size:13px;margin:13px 0">نص الحكاية «سمسم يلتحق بالمدرسة»، نصا <span class="ltr">C’est la rentrée</span> و<span class="ltr">J’ai une maison</span>، ومضامين صفحات الأمازيغية، ودرس المعلوميات، ودروس العلوم والفنية والإنجليزية. التزم بما هو في دفاتر رامي وكتبه، لا بنصوص تُنشأ من الذاكرة.</p><p class="notice warning">الأمثلة التفاعلية إضافات للتدريب فقط. أي كلمة فرنسية أو مفهوم لم يدرسه رامي ينبغي تجاوزه أو استبداله بمثال من كتابه.</p></div></div><div class="panel section"><h3>مرجعيات الطريقة</h3><p class="source-ref" style="margin-top:12px">الدمج المنظم للأصوات والتدرج في فك الرموز: <a target="_blank" rel="noopener noreferrer" href="https://ies.ed.gov/ncee/wwc/PracticeGuide/21">What Works Clearinghouse — Foundational Reading Skills</a>.</p><p class="source-ref">الحصص الواضحة القصيرة، التغذية الراجعة الإيجابية والاستراحات الحركية: <a target="_blank" rel="noopener noreferrer" href="https://www.cdc.gov/adhd/treatment/classroom.html">CDC — Classroom Support</a>. هذه تدابير تربوية عامة ولا تعني تشخيص رامي.</p><p class="source-ref">مراجعة موزعة واسترجاع المعرفة مع مراعاة الصعوبة: <a target="_blank" rel="noopener noreferrer" href="https://educationendowmentfoundation.org.uk/education-evidence/evidence-reviews/cognitive-science-approaches-in-the-classroom">Education Endowment Foundation — Cognitive Science Review</a>.</p></div>`}
function render(){let el=document.getElementById('app');el.innerHTML=({home:renderHome,plan:renderPlan,exams:renderExams,skills:renderSkills,activities:renderActivities,report:renderReport,guide:renderGuide})[page]();if(page==='plan')document.getElementById('dailyNote').value=data.notes[selectedDate]||'';}
function doExport(){let content=JSON.stringify({...data,exportedAt:new Date().toISOString(),app:'Rami Review'},null,2),blob=new Blob([content],{type:'application/json;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='rami-revision-backup-2026.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('تم إنشاء نسخة احتياطية. احتفظ بها في مكان آمن.');}
function confirmReset(){if(!confirm('هل تريد حذف جميع تقييمات وملاحظات رامي من هذا الجهاز؟ تأكد من تصدير نسخة احتياطية أولاً.'))return;data=fresh();persist();render();toast('أُعيد ضبط سجل المراجعة.');}
async function doImport(file){if(!file)return;if(file.size>1024*1024){toast('حجم ملف النسخة كبير بشكل غير متوقع.');return;}try{let obj=JSON.parse(await file.text());if(obj.version!==2||!obj.results||!obj.notes||typeof obj.results!=='object'||Array.isArray(obj.results)||typeof obj.notes!=='object'||Array.isArray(obj.notes))throw Error('format');let next=fresh();for(let [k,v] of Object.entries(obj.results))if(k in taskMap&&['support','independent'].includes(v))next.results[k]=v;for(let [k,v] of Object.entries(obj.notes))if(dates.includes(k)&&typeof v==='string')next.notes[k]=v.slice(0,3000);if(!confirm('هل تريد استبدال بيانات المراجعة الحالية بالمحفوظة في هذا الملف؟'))return;data=next;persist();render();toast('تم استيراد النسخة بنجاح.');}catch(_){toast('تعذر استيراد الملف: ليس نسخة متوافقة مع التطبيق.');}}
function choose(a,v){let q=a==='french'?frQuestions[frIndex]:a==='math'?mathQuestions[mathIndex]:a==='deixis'?demonstratives[deixisIndex]:pronouns[frWritingIndex%pronouns.length];feedback={for:a,value:v,correct:String(q.correct??q.answer)===v};render();}
function handleAct(action){if(action==='ar-reveal')arReveal=!arReveal;
if(action==='ar-next'){arIndex=(arIndex+1)%arWords.length;arReveal=false;}
if(action==='french-next'){frIndex=(frIndex+1)%frQuestions.length;feedback=null;}
if(action==='french-restart'){frIndex=0;feedback=null;}
if(action==='math-next'){mathIndex=(mathIndex+1)%mathQuestions.length;feedback=null;}
if(action==='deixis-next'){deixisIndex=(deixisIndex+1)%demonstratives.length;feedback=null;}
if(action==='pronouns-next'){frWritingIndex=(frWritingIndex+1)%pronouns.length;feedback=null;}
if(action==='order-check'){let q=reorder[frWritingIndex%reorder.length];feedback={for:'order',correct:chosenOrder.map(i=>q.words[i]).join('|')===q.correct.join('|')};}
if(action==='order-undo'){chosenOrder.pop();feedback=null;}
if(action==='order-next'){frWritingIndex=(frWritingIndex+1)%reorder.length;chosenOrder=[];feedback=null;}
render();}
document.addEventListener('click',e=>{
let nav=e.target.closest('[data-page]');if(nav){setPage(nav.dataset.page);return;}
let go=e.target.closest('[data-go]');if(go){setPage(go.dataset.go);return;}
let dt=e.target.closest('[data-date]');if(dt){selectedDate=dt.dataset.date;render();return;}
let r=e.target.closest('[data-result]');if(r){let id=r.dataset.task,val=r.dataset.result;if(!(id in taskMap))return;if(val==='clear'||data.results[id]===val)delete data.results[id];else data.results[id]=val;persist();render();return;}
let a=e.target.closest('[data-activity]');if(a){activity=a.dataset.activity;feedback=null;chosenOrder=[];render();return;}
let c=e.target.closest('[data-choose]');if(c){choose(c.dataset.choose,c.dataset.value);return;}
let o=e.target.closest('[data-order-pick]');if(o){let i=Number(o.dataset.orderPick);if(!chosenOrder.includes(i)){chosenOrder.push(i);feedback=null;render();}return;}
let act=e.target.closest('[data-act]');if(act){handleAct(act.dataset.act);return;}
let rp=e.target.closest('[data-report]');if(rp){if(rp.dataset.report==='export')doExport();else if(rp.dataset.report==='import')document.getElementById('importFile').click();else if(rp.dataset.report==='reset')confirmReset();else if(rp.dataset.report==='print')window.print();return;}
if(e.target.closest('#menuBtn')){document.getElementById('sidebar').classList.toggle('open');return;}
if(e.target.closest('#backupTop')){doExport();return;}
if(e.target.classList.contains('sidebar')&&e.target.classList.contains('open'))e.target.classList.remove('open');
});
document.addEventListener('change',e=>{if(e.target.id==='skillFilter'){skillFilter=e.target.value;render();}if(e.target.id==='importFile'){doImport(e.target.files[0]);e.target.value='';}if(e.target.id==='dailyNote'){data.notes[selectedDate]=e.target.value.slice(0,3000);persist();toast('حُفظت الملاحظة.');}});
document.addEventListener('input',e=>{if(e.target.id==='dailyNote'){data.notes[selectedDate]=e.target.value.slice(0,3000);persist();}});
render();
