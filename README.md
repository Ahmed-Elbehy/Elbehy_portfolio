# بورتفوليو Ahmed Elbehy

موقع بورتفوليو شخصي مبني بـ React + Vite.

## النشر على GitHub Pages

إعداد Vite يجهز الموقع للنشر في المستودع `Elbehy_portfolio` على حساب
[Ahmed-Elbehy](https://github.com/Ahmed-Elbehy). فعّل مرة واحدة مصدر النشر
`GitHub Actions` من `Settings > Pages > Build and deployment > Source` في المستودع.
بعد رفع المشروع إلى الفرع `main`، يتولى GitHub Actions بناء الموقع ونشره تلقائيًا على:

https://ahmed-elbehy.github.io/Elbehy_portfolio/

## الهدف
عرض معلوماتي ومشاريعي ومهاراتي، وإتاحة التواصل معي عبر واتساب وLinkedIn.

## الأقسام المطلوبة

### Hero
- الاسم: Ahmed Elbehy
- المسمى الوظيفي: Front-End Developer
- صورة شخصية
- زران: تحميل CV (ملف `cv.pdf` داخل `public/`)، وتواصل معي

### عني
- نبذة قصيرة عن خبرتي في HTML وCSS وJavaScript وReact، وبناء صفحات الهبوط والمواقع المتجاوبة.

### المهارات
- React
- CSS
- JavaScript
- استدعاء APIs باستخدام Fetch

### المشاريع
كروت لكل مشروع، فيها الاسم والوصف والصورة والرابط:
- **Princess Coffee**: صفحة كافيه متجاوبة تضم قسم المنيو والصور وبيانات التواصل. الرابط: https://ahmed-elbehy.github.io/princess-coffee/
- **Rogina Cafe**: صفحة كافيه بقسم منيو مرتب وأوقات عمل ومعرض صور. الرابط: https://ahmed-elbehy.github.io/Rogina-Cafe/
- **Yammy**: تطبيق React يعرض بيانات الأطعمة من API. الرابط: https://ahmed-elbehy.github.io/yammy/

### التواصل
- واتساب: https://wa.me/201288669825
- LinkedIn: https://www.linkedin.com/in/ahmed-elbehy-8572762b8
- GitHub: https://github.com/Ahmed-Elbehy

## التصميم
- الألوان: خلفية داكنة `#0f172a`، ولون أساسي أزرق مائي `#38bdf8`
- الخطوط: Cairo للعربية، وInter للإنجليزية
- متجاوب مع جميع الشاشات والمتصفحات
- ترجمة عربية وإنجليزية باستخدام i18next
- مكونات جاهزة من Flowbite React، وتنسيق بـ Tailwind CSS
- أنيميشن بمكتبة Framer Motion، تظهر كل سيكشن عند الوصول إليه
- صفحة رئيسية، وصفحة للخدمات والخطط:
  - Landing Page بـ React: 20$
  - موقع كامل: السعر حسب المتطلبات وعدد الصفحات

## هيكل المشروع
- `src/components`: مكونات قابلة لإعادة الاستخدام (Navbar، Footer، ProjectCard)
- `src/features`: منطق ميزة معينة (مثل زر التواصل)
- `src/pages`: الصفحات التي تجمع المكونات
- `src/assets`: الصور والملفات الثابتة

## قواعد للكود
- استخدم Functional Components وHooks فقط.
- اكتب تعليقات قصيرة بالعربية عند الحاجة.
- استخدم Tailwind classes مباشرة، ولا تكتب CSS منفصلاً إلا عند الضرورة.
- اقترح الملفات قبل إنشائها.
- لا تغيّر ملفات أخرى دون أن تشرح التغيير أولاً.